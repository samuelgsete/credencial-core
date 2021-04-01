import { Repository } from 'typeorm';
import { Membro } from 'src/shared/models/membro.entity';
export declare class CredencialService {
    private readonly repository;
    constructor(repository: Repository<Membro>);
    emitirCredencial(membro: Membro): Promise<any>;
    emitirVariasCredenciais(membros: Membro[]): Promise<string>;
}
