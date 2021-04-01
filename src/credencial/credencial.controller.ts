import { Body, Controller, Post } from '@nestjs/common';

import { Membro } from 'src/shared/models/membro.entity';
import { CredencialService } from './credencial.service';

@Controller('credencial')
export class CredencialController {

    public constructor(private readonly servico: CredencialService) {}

    @Post()
    public async emitirCredencial(@Body() membro: Membro): Promise<any> {
        const html = await this.servico.emitirCredencial(membro); 
        return { pagina: html }
    }

    @Post('/varias')
    public async emitirVariasCredenciais(@Body() membros: Membro[]): Promise<any> {
        const html = await this.servico.emitirVariasCredenciais(membros); 
        return { pagina: html }
    }
}