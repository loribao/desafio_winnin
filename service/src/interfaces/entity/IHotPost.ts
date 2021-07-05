export interface IHotPost {
    titulo?: string;
    timestamp?: number;
    autor?: string;
    dominio?: string;
    ups?: number;
    num_comentarios?: number;
    data_obtido:Date;
    uuid_insercao:string;
}