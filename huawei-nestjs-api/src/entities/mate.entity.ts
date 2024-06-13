import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class MateEntity extends BaseEntity {
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
    comment: number;

    @Column()
    is_del:number
}