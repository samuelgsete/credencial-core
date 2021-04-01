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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Membro = void 0;
const typeorm_1 = require("typeorm");
const cargo_enum_1 = require("./enuns/cargo.enum");
const congregacao_enum_1 = require("./enuns/congregacao.enum");
const entidade_base_entity_1 = require("./entidade-base.entity");
const situacao_credencial_enum_1 = require("./enuns/situacao-credencial.enum");
let Membro = class Membro extends entidade_base_entity_1.EntidadeBase {
    constructor(values = {}) {
        super();
        Object.assign(this, values);
    }
};
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], Membro.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column({ length: 11 }),
    __metadata("design:type", String)
], Membro.prototype, "cpf", void 0);
__decorate([
    typeorm_1.Column({ length: 15 }),
    __metadata("design:type", String)
], Membro.prototype, "rg", void 0);
__decorate([
    typeorm_1.Column({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Membro.prototype, "nascidoEm", void 0);
__decorate([
    typeorm_1.Column({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Membro.prototype, "batizadoEm", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: cargo_enum_1.Cargo }),
    __metadata("design:type", String)
], Membro.prototype, "cargo", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], Membro.prototype, "nomePai", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], Membro.prototype, "nomeMae", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: congregacao_enum_1.Congregacao }),
    __metadata("design:type", String)
], Membro.prototype, "congregacao", void 0);
__decorate([
    typeorm_1.Column({ length: 15 }),
    __metadata("design:type", String)
], Membro.prototype, "whatsapp", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], Membro.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], Membro.prototype, "urlFoto", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], Membro.prototype, "urlAssinatura", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Membro.prototype, "atualizadoEm", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: situacao_credencial_enum_1.SituacaoCredencial }),
    __metadata("design:type", String)
], Membro.prototype, "situacao", void 0);
Membro = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [Object])
], Membro);
exports.Membro = Membro;
//# sourceMappingURL=membro.entity.js.map