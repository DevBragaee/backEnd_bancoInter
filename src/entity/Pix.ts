
//  Aqui importamos do typeorm( as entidades,as relacoes ,os primaryskeys)
import {Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne, Column, CreateDateColumn,ManyToOne, UpdateDateColumn} from "typeorm";

// aqui observar a relacao com entidade "User" importamos ela
import { User } from './User';
 // usando decorators (uma funcao que traz mais propriedades encapsulas para nossa classe)
@Entity()
export class Pix {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    status: string;
     // relacao  muitos para um
     // uma chave Estrangeira referenciando uma chave primaria
    @ManyToOne(() => User, user => user.id)
    @JoinColumn()
    requestingUser: User;
    // relacao  muitos para um
    @ManyToOne(() => User, user => user.id, {nullable: true})
    @JoinColumn()
    payingUser: User;
    
    @Column()
    value: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}