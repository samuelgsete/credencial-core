/// <reference types="multer" />
export declare const editarNomeDoArquivo: (req: any, file: any, callback: any) => void;
export declare class UploadController {
    obterFoto(foto: string, res: any): any;
    obterAssinatura(assinatura: string, res: any): any;
    carregarFoto(foto: Express.Multer.File): {
        originalname: string;
        filename: string;
        urlFoto: string;
    };
    carregarAssinatura(assinatura: Express.Multer.File): {
        originalname: string;
        filename: string;
        urlFoto: string;
    };
}
