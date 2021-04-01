"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembroModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const membro_controller_1 = require("./membro.controller");
const membro_service_1 = require("./membro.service");
const membro_entity_1 = require("../shared/models/membro.entity");
let MembroModule = class MembroModule {
};
MembroModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([membro_entity_1.Membro])
        ],
        controllers: [membro_controller_1.MembroController],
        providers: [membro_service_1.MembroService]
    })
], MembroModule);
exports.MembroModule = MembroModule;
//# sourceMappingURL=membro.module.js.map