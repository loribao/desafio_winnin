import { IPost } from "../interface/IPost"

export class Post implements IPost{
    constructor(model?: IPost) {
        if (model !== null) {
            this.titulo = model?.titulo
            this.dominio = model?.dominio
            this.autor = model?.autor
            this.num_comentarios = model?.num_comentarios
            this.ups = model?.ups
            this.timestamp = model?.timestamp
            this.timestampDescricao = model?.timestampDescricao;
    
        }
    }
    id?: number;
    titulo?: string;
    timestamp?: number;
    autor?: string;
    dominio?: string;
    ups?: number;
    num_comentarios?: number;
    timestampDescricao?:string;
}

