import { MembroService } from './membro.service';
import { Membro } from 'src/shared/models/membro.entity';
export declare class MembroController {
    private readonly service;
    constructor(service: MembroService);
    buscarPorId(id: number): Promise<Membro | null>;
    buscarPaginado(filter: string, page: number, limit: number): Promise<any | null>;
    autenticarMembro(membro: any): Promise<any | null>;
    criarMembro(membro: Membro): Promise<void>;
    editarMembro(membro: Membro): Promise<void>;
    removerMembro(id: number): Promise<void>;
}
