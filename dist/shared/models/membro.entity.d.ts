import { Cargo } from "src/shared/models/enuns/cargo.enum";
import { Congregacao } from "src/shared/models/enuns/congregacao.enum";
import { EntidadeBase } from "./entidade-base.entity";
import { SituacaoCredencial } from "./enuns/situacao-credencial.enum";
export declare class Membro extends EntidadeBase {
    nome: string;
    cpf: string;
    rg: string;
    nascidoEm: Date;
    batizadoEm: Date;
    cargo: Cargo;
    nomePai: string;
    nomeMae: string;
    congregacao: Congregacao;
    whatsapp: string;
    email: string;
    urlFoto: string;
    urlAssinatura: string;
    atualizadoEm: Date;
    situacao: SituacaoCredencial;
    constructor(values?: Object);
}
