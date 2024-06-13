import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class PrecinctEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    is_del:number
}