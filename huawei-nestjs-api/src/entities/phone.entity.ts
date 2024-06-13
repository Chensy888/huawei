import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class PhoneEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    image: string;

    @Column()
    name: string;

    @Column()
    introduce: string;

    @Column()
    price: number;

    @Column()
    is_del:number
}