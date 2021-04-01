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
exports.MembroController = void 0;
const common_1 = require("@nestjs/common");
const membro_service_1 = require("./membro.service");
const filter_search_entity_1 = require("../shared/filter-search.entity");
const membro_entity_1 = require("../shared/models/membro.entity");
let MembroController = class MembroController {
    constructor(service) {
        this.service = service;
    }
    buscarPorId(id) {
        return this.service.buscarPorId(id);
    }
    buscarPaginado(filter, page, limit) {
        return this.service.buscarPaginado(new filter_search_entity_1.FilterSearch(filter, page, limit));
    }
    autenticarMembro(membro) {
        return this.service.autorizarMembro(membro);
    }
    criarMembro(membro) {
        return this.service.criarMembro(membro);
    }
    editarMembro(membro) {
        return this.service.editarMembro(membro);
    }
    removerMembro(id) {
        return this.service.removerMembro(id);
    }
};
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MembroController.prototype, "buscarPorId", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query('filter')),
    __param(1, common_1.Query('page')),
    __param(2, common_1.Query('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], MembroController.prototype, "buscarPaginado", null);
__decorate([
    common_1.Post('autenticar'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MembroController.prototype, "autenticarMembro", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [membro_entity_1.Membro]),
    __metadata("design:returntype", Promise)
], MembroController.prototype, "criarMembro", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [membro_entity_1.Membro]),
    __metadata("design:returntype", Promise)
], MembroController.prototype, "editarMembro", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MembroController.prototype, "removerMembro", null);
MembroController = __decorate([
    common_1.Controller('membro'),
    __metadata("design:paramtypes", [membro_service_1.MembroService])
], MembroController);
exports.MembroController = MembroController;
//# sourceMappingURL=membro.controller.js.map