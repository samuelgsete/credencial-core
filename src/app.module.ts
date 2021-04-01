import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';

import { MembroModule } from './membro/membro.module';
import { CredencialModule } from './credencial/credencial.module';
import { Membro } from './shared/models/membro.entity';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'motty.db.elephantsql.com',
      port: 5432,
      username: 'nngrlxjv',
      password: 'lxpXve-BKYJVM-jgzESLGb9gj1JR0gFX',
      database: 'nngrlxjv',
      entities: [
        Membro
      ],
      synchronize: true,
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    MembroModule,
    CredencialModule,
    UploadModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}