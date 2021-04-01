import { SituacaoCredencial } from "src/shared/models/enuns/situacao-credencial.enum";
import { EntidadeBase } from "./entidade-base.entity";
import { Membro } from "./membro.entity";
export declare class Credencial extends EntidadeBase {
    emitidoEm: Date;
    situacao: SituacaoCredencial;
    membro: Membro;
    constructor(values?: Object);
}
