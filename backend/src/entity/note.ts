import { Entity, Column, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Note {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    desc: string;

    @Column()
    date: string;
}