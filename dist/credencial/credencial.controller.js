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
exports.CredencialController = void 0;
const common_1 = require("@nestjs/common");
const membro_entity_1 = require("../shared/models/membro.entity");
const credencial_service_1 = require("./credencial.service");
let CredencialController = class CredencialController {
    constructor(servico) {
        this.servico = servico;
    }
    async emitirCredencial(membro) {
        const html = await this.servico.emitirCredencial(membro);
        return { pagina: html };
    }
    async emitirVariasCredenciais(membros) {
        const html = await this.servico.emitirVariasCredenciais(membros);
        return { pagina: html };
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [membro_entity_1.Membro]),
    __metadata("design:returntype", Promise)
], CredencialController.prototype, "emitirCredencial", null);
__decorate([
    common_1.Post('/varias'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], CredencialController.prototype, "emitirVariasCredenciais", null);
CredencialController = __decorate([
    common_1.Controller('credencial'),
    __metadata("design:paramtypes", [credencial_service_1.CredencialService])
], CredencialController);
exports.CredencialController = CredencialController;
//# sourceMappingURL=credencial.controller.js.map