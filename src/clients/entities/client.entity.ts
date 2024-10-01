import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'clients' })
export class Client {
    @PrimaryGeneratedColumn()
    id: number;
}
