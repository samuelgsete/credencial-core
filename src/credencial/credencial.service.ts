import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import * as ejs from 'ejs';
import * as moment from "moment";

import { Membro } from 'src/shared/models/membro.entity';

const MESES = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril', 
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outrubo', 
    'Novembro',
    'Dezembro'
];

const dataPorExtenso = (date: Date) => {
    const day = date.getDate()
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day} de ${MESES[month]} de ${year}`;
}

const mascaraDeCpf = (cpf: string) => {
    return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

@Injectable()
export class CredencialService {

    public constructor(@InjectRepository(Membro) private readonly repository: Repository<Membro>) {}

    public async emitirCredencial(membro: Membro): Promise<any> {
        let document = '';
        await ejs.renderFile('src/credencial/modelos/credencial.ejs', 
            { 
                membro: membro, 
                moment: moment, 
                dataPorExtenso: dataPorExtenso,
                mascaraDeCpf: mascaraDeCpf  
            }, (err, html) => {
            if(err) {
                throw new Error('Não foi possivel renderizar o documento');
            }
            else {
                document = html;  
            }
        }); 
        return document;
    }

    public async emitirVariasCredenciais(membros: Membro[]) {
        let document = '';
        await ejs.renderFile('src/credencial/modelos/varias-credenciais.ejs', 
            { 
                membros: membros, 
                moment: moment, 
                dataPorExtenso: dataPorExtenso,
                mascaraDeCpf: mascaraDeCpf  
            }, (err, html) => {
            if(err) {
                throw new Error('Não foi possivel renderizar o documento');
            }
            else {
                document = html;  
            }
        }); 
        return document;
    }
}