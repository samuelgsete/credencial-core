"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const cloudinary = require("cloudinary");
cloudinary.v2.config({
    cloud_name: "dt4bynswk",
    api_key: "689814511152418",
    api_secret: "usZp2NUWoFBkmCiAeAtTdFQpfsE"
});
let UploadService = class UploadService {
    async uploadFoto(foto) {
        const result = await cloudinary.v2.uploader.upload(foto);
        console.log(result);
        return { url: result.url };
    }
    async uploadAssinatura(assinatura) {
        return '';
    }
};
UploadService = __decorate([
    common_1.Injectable()
], UploadService);
exports.UploadService = UploadService;
//# sourceMappingURL=upload.service.js.map