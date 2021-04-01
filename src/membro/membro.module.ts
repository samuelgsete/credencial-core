import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MembroController } from './membro.controller';
import { MembroService } from './membro.service';
import { Membro } from 'src/shared/models/membro.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ Membro ])
  ],
  controllers: [MembroController],
  providers: [MembroService]
})
export class MembroModule {}