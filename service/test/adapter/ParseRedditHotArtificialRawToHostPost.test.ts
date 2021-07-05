import * as path from 'path';
import * as fs from 'fs';
import { AxiosResponse } from "axios";
import { ParseRedditHotArtificialRawToHostPost } from "../../src/adapter/ParseRedditHotArtificialRawToHostPost"
import { IRedditHotArtificialRaw } from "../../src/interfaces/entity/IRedditHotArtificialRaw";
import { IContextApiIRedditHotArtificial } from "../../src/interfaces/repository/IContextApiIRedditHotArtificial";
import { RedditHotArtificial } from '../../src/repository/RedditHotRepository';
const fileMock = path.resolve(__dirname, '../mock/artificial.json')
const apiMock:IContextApiIRedditHotArtificial={
   
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
}
describe('Teste ParseRedditHotArtificialRawToHostPost', () => {
    test('Teste parse RedditHotArtificialRaw para HostPost', async() => {
        const adapter = new ParseRedditHotArtificialRawToHostPost();
        const repository = new RedditHotArtificial(apiMock);
        const data = await repository.findAll();
        const hotpost = await adapter.parse(data);
        expect(hotpost.length).toBe(903);
        expect(hotpost.filter(x=>x.autor.match('techsucker')).length).toBe(39);
        expect(hotpost.filter(x=>x.autor.match('Yuqing7')).length).toBe(52);
    },10000)
})
