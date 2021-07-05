import { HotPost } from "../entity/HotPost";
import { getRepository, Repository } from "typeorm";
import { IHotPost } from "../interfaces/entity/IHotPost";
import { IHotPostRepository } from "../interfaces/repository/IHotpostRepository";

export class HotPostRepository implements IHotPostRepository {
    private _db:Repository<HotPost>;
    constructor(){
             this._db =  getRepository(HotPost);
    }
    async saveAll(model: IHotPost[]): Promise<IHotPost[]> {
        try {
            const rest:IHotPost[]=[];
            for (let i = 0; i < model.length; i++) { 
                 rest.push(await this._db.save(model[i]));  
            }
           return rest;
        } catch (error) {
            console.log("Erro saveAll"+JSON.stringify(error));
            throw new Error("Erro saveAll" + JSON.stringify(error))
        }
    }
}