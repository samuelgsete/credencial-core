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
exports.MembroService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const membro_entity_1 = require("../shared/models/membro.entity");
const filter_search_entity_1 = require("../shared/filter-search.entity");
let MembroService = class MembroService {
    constructor(repository) {
        this.repository = repository;
    }
    async buscarPorId(id) {
        return this.repository.findOne(id);
    }
    async buscarPaginado(filter) {
        const [result, total] = await this.repository.findAndCount({
            where: { nome: typeorm_2.Raw(nome => `LOWER(${nome}) Like '%${filter.word}%'`) },
            order: { nome: 'ASC' },
            take: filter.take,
            skip: filter.skip
        });
        return {
            items: result,
            totalItems: total
        };
    }
    async criarMembro(novoMembro) {
        await this.repository.save(novoMembro);
    }
    async editarMembro(membroAtualizado) {
        await this.repository.save(membroAtualizado);
    }
    async removerMembro(id) {
        await this.repository.delete(id);
    }
    async autorizarMembro(membro) {
        const membroAutenticado = await this.repository.findOne({ where: { cpf: membro.cpf, nascidoEm: new Date(membro.nascidoEm) } });
        if (membroAutenticado) {
            return { id: membroAutenticado.id };
        }
        throw new common_1.HttpException("Inscrição não encontrada", common_1.HttpStatus.NOT_FOUND);
    }
};
MembroService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(membro_entity_1.Membro)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MembroService);
exports.MembroService = MembroService;
//# sourceMappingURL=membro.service.js.map