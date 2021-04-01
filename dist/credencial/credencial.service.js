"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredencialService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ejs = require("ejs");
const moment = require("moment");
const membro_entity_1 = require("../shared/models/membro.entity");
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
const dataPorExtenso = (date) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day} de ${MESES[month]} de ${year}`;
};
const mascaraDeCpf = (cpf) => {
    return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};
let CredencialService = class CredencialService {
    constructor(repository) {
        this.repository = repository;
    }
    async emitirCredencial(membro) {
        let document = '';
        await ejs.renderFile('src/credencial/modelos/credencial.ejs', {
            membro: membro,
            moment: moment,
            dataPorExtenso: dataPorExtenso,
            mascaraDeCpf: mascaraDeCpf
        }, (err, html) => {
            if (err) {
                throw new Error('Não foi possivel renderizar o documento');
            }
            else {
                document = html;
            }
        });
        return document;
    }
    async emitirVariasCredenciais(membros) {
        let document = '';
        await ejs.renderFile('src/credencial/modelos/varias-credenciais.ejs', {
            membros: membros,
            moment: moment,
            dataPorExtenso: dataPorExtenso,
            mascaraDeCpf: mascaraDeCpf
        }, (err, html) => {
            if (err) {
                throw new Error('Não foi possivel renderizar o documento');
            }
            else {
                document = html;
            }
        });
        return document;
    }
};
CredencialService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(membro_entity_1.Membro)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CredencialService);
exports.CredencialService = CredencialService;
//# sourceMappingURL=credencial.service.js.map