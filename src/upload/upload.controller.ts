import { 
    Controller, 
    Get, 
    Param, 
    Post, 
    Res, 
    UploadedFile, 
    UseInterceptors 
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { diskStorage } from 'multer';
import { extname } from 'path';

export const editarNomeDoArquivo = (req: any, file: any, callback: any) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = extname(file.originalname);
    const randomName = Array(4)
                        .fill(null)
                        .map(() => Math.round(Math.random() * 16).toString(16))
                        .join('');
    callback(null, `${name}-${randomName}${fileExtName}`);
};

@Controller('upload')
export class UploadController {

    @Get('foto/:foto')
    public obterFoto(@Param('foto') foto: string, @Res() res) {
        return res.sendFile(foto, { root: './uploads/fotos' });
    }

    @Get('assinatura/:assinatura')
    public obterAssinatura(@Param('assinatura') assinatura: string, @Res() res) {
        return res.sendFile(assinatura, { root: './uploads/assinaturas' });
    }

    @Post('foto')
    @UseInterceptors(FileInterceptor('foto3x4', { 
        storage: diskStorage({
            destination: './uploads/fotos',
            filename: editarNomeDoArquivo ,
        }), 
    }))
    public carregarFoto(@UploadedFile() foto: Express.Multer.File) {
        const response = {
            originalname: foto.originalname,
            filename: foto.filename,
            urlFoto: `http://localhost:3000/upload/foto/${foto.filename}`
        }
        return response;
    }

    @Post('assinatura')
    @UseInterceptors(FileInterceptor('assinatura', { 
        storage: diskStorage({
            destination: './uploads/assinaturas',
            filename: editarNomeDoArquivo ,
        }), 
    }))
    public carregarAssinatura(@UploadedFile() assinatura: Express.Multer.File) {
        const response = {
            originalname: assinatura.originalname,
            filename: assinatura.filename,
            urlFoto: `http://localhost:3000/upload/assinatura/${assinatura.filename}`
        }
        return response;
    }
}