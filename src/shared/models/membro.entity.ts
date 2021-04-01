import 
{ 
    Column, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn
} 
from "typeorm";

import { Cargo } from "src/shared/models/enuns/cargo.enum";
import { Congregacao } from "src/shared/models/enuns/congregacao.enum";
import { EntidadeBase } from "./entidade-base.entity";
import { SituacaoCredencial } from "./enuns/situacao-credencial.enum";

@Entity()
export class Membro extends EntidadeBase {

    @Column({ length: 255 })
    public nome: string;

    @Column({ length: 11 })
    public cpf: string;

    @Column({ length: 15 })
    public rg: string;

    @Column({ type:'timestamp' })
    public nascidoEm: Date;

    @Column({ type:'timestamp' })
    public batizadoEm: Date;

    @Column({ type: 'enum', enum: Cargo })
    public cargo: Cargo;

    @Column({ length: 255 })
    public nomePai: string;

    @Column({ length: 255 })
    public nomeMae: string;

    @Column({ type: 'enum', enum: Congregacao })
    public congregacao: Congregacao;

    @Column({ length: 15 })
    public whatsapp: string;

    @Column({ length: 255 })
    public email: string;

    @Column({ length: 255 })
    public urlFoto: string;

    @Column({ length: 255 })
    public urlAssinatura: string;

    @UpdateDateColumn()
    public atualizadoEm: Date;

    @Column({ type: 'enum', enum: SituacaoCredencial })
    public situacao: SituacaoCredencial;

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values) 
    }
}