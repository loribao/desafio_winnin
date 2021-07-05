import { IParseRedditHotArtificialRawToHostPost } from "../interfaces/adapter/IParseRedditHotArtificialRawToHostPost";
import { IHotPost } from "../interfaces/entity/IHotPost";
import { IHandleeHostPost } from "../interfaces/handle/IHandleHotPost";
import {IHotPostRepository} from '../interfaces/repository/IHotpostRepository'
import {IRedditHotArtificial} from '../interfaces/repository/IRedditHotArtificial'

export class HandleeHostPost implements IHandleeHostPost{
    private _db:IHotPostRepository;
    private _api:IRedditHotArtificial;
    private _adapter:IParseRedditHotArtificialRawToHostPost;
    constructor( db:IHotPostRepository, 
        api:IRedditHotArtificial,
        adapter:IParseRedditHotArtificialRawToHostPost){
        this._db = db;
        this._api = api;
        this._adapter = adapter;
    }
   async execute(): Promise<IHotPost[]> {
        try {
          console.log("Iniciando a consulta na api")
          const data = await this._api.findAll()
          console.log("salvando os dados no banco de dados")
          return await this._db.saveAll(await this._adapter.parse(data))
        } catch (error) {
            console.log("Erro:"+JSON.stringify(error))
            throw new Error("Erro HandleHotPost:"+JSON.stringify(error));
        }
    }
}