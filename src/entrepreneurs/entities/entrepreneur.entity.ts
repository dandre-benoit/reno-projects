import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'entrepreneurs' })
export class Entrepreneur {
    @PrimaryGeneratedColumn()
    id: number;
}
