import { 
    Body, 
    Controller, 
    Delete, Get, 
    Param, 
    Post, 
    Put,
    Query
} 
from '@nestjs/common';

import { MembroService } from './membro.service';
import { FilterSearch } from 'src/shared/filter-search.entity';
import { Membro } from 'src/shared/models/membro.entity';

@Controller('membro')
export class MembroController {

    public constructor(private readonly service: MembroService) {}

    @Get(':id')
    public buscarPorId(@Param('id') id: number): Promise<Membro | null> {
        return this.service.buscarPorId(id);
    }

    @Get()
    public buscarPaginado(
                            @Query('filter') filter: string, 
                            @Query('page') page: number,  
                            @Query('limit') limit: number
                        ): Promise<any | null> 
    {
        return this.service.buscarPaginado(new FilterSearch(filter, page, limit));
    }

    @Post('autenticar')
    public autenticarMembro(@Body() membro: any): Promise<any | null> {
        return this.service.autorizarMembro(membro);
    }

    @Post()
    public criarMembro(@Body() membro: Membro): Promise<void> {
        return this.service.criarMembro(membro);
    }

    @Put()
    public editarMembro(@Body() membro: Membro): Promise<void> {
        return this.service.editarMembro(membro);
    }

    @Delete(':id')
    public removerMembro(@Param('id') id: number): Promise<void>  {
        return this.service.removerMembro(id);
    }
}