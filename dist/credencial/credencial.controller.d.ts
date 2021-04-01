import { Membro } from 'src/shared/models/membro.entity';
import { CredencialService } from './credencial.service';
export declare class CredencialController {
    private readonly servico;
    constructor(servico: CredencialService);
    emitirCredencial(membro: Membro): Promise<any>;
    emitirVariasCredenciais(membros: Membro[]): Promise<any>;
}
