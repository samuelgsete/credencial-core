import { Cargo } from "src/shared/enuns/cargo.enum";
import { Congregacao } from "src/shared/enuns/congregacao.enum";
export declare class Membro {
    readonly id: number;
    nome: string;
    cpf: string;
    rg: string;
    nascidoEm: Date;
    batizadoEm: Date;
    cargo: Cargo;
    nomePai: string;
    nomeMae: string;
    congregacao: Congregacao;
    email: string;
    urlFoto: string;
    urlAssinatura: string;
    atualizadoEm: Date;
    constructor(values?: Object);
}
