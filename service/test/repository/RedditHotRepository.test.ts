import { RedditHotArtificial } from "../../src/repository/RedditHotRepository";
import {AxiosResponse } from "axios";
import { IRedditHotArtificialRaw } from "../../src/interfaces/entity/IRedditHotArtificialRaw";
import { IContextApiIRedditHotArtificial } from "../../src/interfaces/repository/IContextApiIRedditHotArtificial";
import * as fs from "fs";
import * as path from "path";

let fileMock = path.resolve(__dirname, '../mock/artificial.json')
export const apiMock:IContextApiIRedditHotArtificial={
   
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   get: async<T>(url: string):Promise<AxiosResponse<IRedditHotArtificialRaw>> => {

        const file = fs.readFileSync(fileMock).toString();
        const _data: IRedditHotArtificialRaw[] = JSON.parse(file);
        
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
                const after = url.match(/\?after=(.*)/gi)[0]?.replace("?after=", "");
                const index = _data?.findIndex(x=>x.data.after == after)+1
                const result = {
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
};
describe('Teste RedditHotRepository',() => {

    test('Teste FindAll, esperado a concatenação de 37 paginas', async () => {
        const repository = new RedditHotArtificial(apiMock);
        const data = await repository.findAll();
        expect(data.length).toBe(37);
        expect(data[0].data.after).toBe('t3_o9o4xu');
        expect(data[35].data.after).toBe('t3_msq78p');
        expect(data[36].data.after).toBe(null);
    }, 30000);
    test('Teste FindAll, esperado uma mensagem de erro', async () => {
        fileMock='.sdffffffffffff';
        const repository = new RedditHotArtificial(apiMock);
        const err = await repository.findAll().catch(x=>x);
        expect(err.message).toMatch(/Erro findAll.*\.sdfffffffff.*/g);
    });
})