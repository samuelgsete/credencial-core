export declare class UploadService {
    uploadFoto(foto: any): Promise<{
        url: string;
    }>;
    uploadAssinatura(assinatura: any): Promise<string>;
}
