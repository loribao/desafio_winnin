import { HotPost } from "../entity/HotPost";
import { IParseRedditHotArtificialRawToHostPost } from "../interfaces/adapter/IParseRedditHotArtificialRawToHostPost";
import { IHotPost } from "../interfaces/entity/IHotPost";
import { IRedditHotArtificialRaw } from "../interfaces/entity/IRedditHotArtificialRaw";
import {v4} from 'uuid'

export class ParseRedditHotArtificialRawToHostPost implements IParseRedditHotArtificialRawToHostPost {
   private data:Date;
   private uuid:string;
    constructor(){
        this.data = new Date();
        this.uuid = v4();
    }
   
    parseArray(model: IRedditHotArtificialRaw): IHotPost[] {
        return model.data.children.map(dt => {
           
            return new HotPost({
                autor: dt.data.author,
                dominio: dt.data.domain,
                num_comentarios: dt.data.num_comments,
                timestamp: dt.data.created,
                ups: dt.data.ups,
                titulo: dt.data.title,
                data_obtido: this.data,
                uuid_insercao: this.uuid,
            });
        });
    }
   async parse(model: IRedditHotArtificialRaw[]): Promise<IHotPost[]> {
      const data:IHotPost[]=[];
      const rs = model.map(full=> this.parseArray(full))
        for (let index = 0; index < rs.length; index++) {
            for (let index2 = 0; index2 < rs[index].length; index2++) {
                data.push(rs[index][index2]); 
            }
        }
       return data;
    }
}