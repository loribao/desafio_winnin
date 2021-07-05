import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IHotPost } from "../interfaces/entity/IHotPost";

@Entity('HotPost')
export class HotPost implements IHotPost {
    constructor(model: IHotPost = null) {
        if (model !== null) {
            this.titulo = model?.titulo
            this.dominio = model?.dominio
            this.autor = model?.autor
            this.num_comentarios = model?.num_comentarios
            this.ups = model?.ups
            this.timestamp = model?.timestamp
            this.data_obtido = model.data_obtido
            this.uuid_insercao = model.uuid_insercao
        }
    }
    @PrimaryGeneratedColumn()
    id?: number;

    @Column("varchar", { length: 240 })
    titulo?: string;

    @Column("integer")
    timestamp?: number;

    @Column("varchar", { length: 140 })
    autor?: string;

    @Column("varchar", { length: 100 })
    dominio?: string;

    @Column("integer")
    ups?: number;

    @Column("integer")
    num_comentarios?: number;

    @Column("datetime")
    data_obtido: Date;
    
    @Column("varchar", { length: 50 })
    uuid_insercao: string;
}

