import { AxiosResponse } from "axios";
import { IRedditHotArtificialRaw } from "../../src/interfaces/entity/IRedditHotArtificialRaw";
import { IContextApiIRedditHotArtificial } from "../../src/interfaces/repository/IContextApiIRedditHotArtificial";
import * as fs from "fs";
import * as path from "path";
import { RedditHotArtificial } from "../../src/repository/RedditHotRepository";
import { HandleeHostPost } from "../../src/handle/HandleHotPost";
import { ParseRedditHotArtificialRawToHostPost } from "../../src/adapter/ParseRedditHotArtificialRawToHostPost";
import { IHotPostRepository } from "../../src/interfaces/repository/IHotpostRepository";
import { IHotPost } from "../../src/interfaces/entity/IHotPost";

let fileMock = path.resolve(__dirname, '../mock/artificial.json')
let apiMock:IContextApiIRedditHotArtificial={
   
   get: async<T>(url: string):Promise<AxiosResponse<IRedditHotArtificialRaw>> => {

        let file = fs.readFileSync(fileMock).toString();
        let _data: IRedditHotArtificialRaw[] = JSON.parse(file);
        
        try {
            if(url == '/'){
                return  {
                    data: _data[0],
                    status: 200,
                    statusText: 'string',
                    headers: 'any',
                    config: {}
                };
            }else{
                let after = url.match(/\?after=(.*)/gi)[0]?.replace("?after=", "");
                let index = _data?.findIndex(x=>x.data.after == after)+1
                let result = {
                    data: _data[index],
                    status: 200,
                    statusText: 'string',
                    headers: 'any',
                    config: {}
                }
                return result;
            }
        } catch (error) {
            throw {
                data: error,
                status: 500,
                statusText: 'string',
                headers: 'any',
                config: {}
            }
        }
    }    
}
class dbMock implements IHotPostRepository {
    constructor() {
        
    }
    async saveAll(model: IHotPost[]): Promise<IHotPost[]> {
       return model;
    }
}
describe('Teste HandleHotPost', () => {
    test('Teste de fn executar: Esperado que obtenha e salve os dados', async () => {
        let api = new RedditHotArtificial(apiMock);
        const adapter = new ParseRedditHotArtificialRawToHostPost();
        const db = new dbMock();
        let handle = new HandleeHostPost(db,api,adapter)
        let dadosSalvos = await handle.execute();
        expect(dadosSalvos.length).toBe(903);
    });
});