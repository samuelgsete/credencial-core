import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Raw } from 'typeorm';

import { Membro } from 'src/shared/models/membro.entity';
import { FilterSearch } from 'src/shared/filter-search.entity';

@Injectable()
export class MembroService {

    public constructor(@InjectRepository(Membro) private readonly repository: Repository<Membro>) {}

    public async buscarPorId(id: number): Promise<Membro | null> {
        return this.repository.findOne(id);
    }

    public async buscarPaginado(filter: FilterSearch): Promise<any>  {
        const [result, total] = await this.repository.findAndCount(
            {
                where: { nome: Raw(nome => `LOWER(${nome}) Like '%${filter.word}%'`) },
                order: { nome: 'ASC'},
                take: filter.take,
                skip: filter.skip
            } 
        );

        return {
            items: result,
            totalItems: total
        }
    }

    public async criarMembro(novoMembro: Membro): Promise<void> {
        await this.repository.save(novoMembro);
    }

    public async editarMembro(membroAtualizado: Membro): Promise<void> {
        await this.repository.save(membroAtualizado);
    }

    public async removerMembro(id: number): Promise<void> {
        await this.repository.delete(id);
    }

    public async autorizarMembro(membro: Membro): Promise<any | null> {
        const membroAutenticado = await this.repository.findOne({ where: { cpf: membro.cpf, nascidoEm: new Date(membro.nascidoEm) }});
        
        if(membroAutenticado) {
            return { id: membroAutenticado.id }
        }                                           
        throw new HttpException("Inscrição não encontrada", HttpStatus.NOT_FOUND);                                      
    }
}