import { Client } from "@/clients/entities/client.entity";
import { Entrepreneur } from "@/entrepreneurs/entities/entrepreneur.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'projects' })
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ select: false, nullable: true })
    clientId: number

    @Column({ select: false, nullable: true })
    entrepreneurId: number

    @Column({ type: 'varchar', unique: true })
    name: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'float', nullable: true })
    budget: number;

    @Column({ type: 'timestamp', nullable: true })
    startAt: Date;

    @Column({ type: 'timestamp', nullable: true })
    endAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @Column({ type: 'boolean', default: true })
    active: boolean;

    @OneToOne(() => Client)
    @JoinColumn()
    client: Client;

    @OneToOne(() => Entrepreneur)
    @JoinColumn()
    entrepreneur: Entrepreneur;
}
