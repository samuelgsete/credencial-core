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
exports.UploadController = exports.editarNomeDoArquivo = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const editarNomeDoArquivo = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = path_1.extname(file.originalname);
    const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
    callback(null, `${name}-${randomName}${fileExtName}`);
};
exports.editarNomeDoArquivo = editarNomeDoArquivo;
let UploadController = class UploadController {
    obterFoto(foto, res) {
        return res.sendFile(foto, { root: './uploads/fotos' });
    }
    obterAssinatura(assinatura, res) {
        return res.sendFile(assinatura, { root: './uploads/assinaturas' });
    }
    carregarFoto(foto) {
        const response = {
            originalname: foto.originalname,
            filename: foto.filename,
            urlFoto: `http://localhost:3000/upload/foto/${foto.filename}`
        };
        return response;
    }
    carregarAssinatura(assinatura) {
        const response = {
            originalname: assinatura.originalname,
            filename: assinatura.filename,
            urlFoto: `http://localhost:3000/upload/assinatura/${assinatura.filename}`
        };
        return response;
    }
};
__decorate([
    common_1.Get('foto/:foto'),
    __param(0, common_1.Param('foto')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "obterFoto", null);
__decorate([
    common_1.Get('assinatura/:assinatura'),
    __param(0, common_1.Param('assinatura')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "obterAssinatura", null);
__decorate([
    common_1.Post('foto'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('foto3x4', {
        storage: multer_1.diskStorage({
            destination: './uploads/fotos',
            filename: exports.editarNomeDoArquivo,
        }),
    })),
    __param(0, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "carregarFoto", null);
__decorate([
    common_1.Post('assinatura'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('assinatura', {
        storage: multer_1.diskStorage({
            destination: './uploads/assinaturas',
            filename: exports.editarNomeDoArquivo,
        }),
    })),
    __param(0, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "carregarAssinatura", null);
UploadController = __decorate([
    common_1.Controller('upload')
], UploadController);
exports.UploadController = UploadController;
//# sourceMappingURL=upload.controller.js.map