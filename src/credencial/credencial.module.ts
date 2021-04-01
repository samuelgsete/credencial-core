import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CredencialController } from './credencial.controller';
import { CredencialService } from './credencial.service';
import { Membro } from 'src/shared/models/membro.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([ Membro ])
      ],
    controllers: [CredencialController],
    providers: [CredencialService],
})
export class CredencialModule {}