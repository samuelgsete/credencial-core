import { Repository } from 'typeorm';
import { Membro } from 'src/shared/models/membro.entity';
import { FilterSearch } from 'src/shared/filter-search.entity';
export declare class MembroService {
    private readonly repository;
    constructor(repository: Repository<Membro>);
    buscarPorId(id: number): Promise<Membro | null>;
    buscarPaginado(filter: FilterSearch): Promise<any>;
    criarMembro(novoMembro: Membro): Promise<void>;
    editarMembro(membroAtualizado: Membro): Promise<void>;
    removerMembro(id: number): Promise<void>;
    autorizarMembro(membro: Membro): Promise<any | null>;
}
