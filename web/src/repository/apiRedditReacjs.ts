import { AxiosInstance } from 'axios';
import {IPostsRaw} from '../interface/IPotsRaw';
import {api} from './base';

export class redditReactjsRepository {
    private _api:AxiosInstance;
    constructor(apibase:AxiosInstance=api) {
        this._api = apibase;
    }
    async getHost(navigation?:{after?:string,before?:string},limit:number=27,count:number=0): Promise<IPostsRaw>  {
        try {
            if(navigation){
                if(navigation.after){
                   return await (await this._api.get<IPostsRaw>(`hot?after=${navigation.after}&limit=${limit}&count=${count}`)).data
                }
                else if(navigation.before){
                    return await (await this._api.get<IPostsRaw>(`hot?after=${navigation.before}&limit=${limit}&count=${count}`)).data
                }
                return await (await this._api.get<IPostsRaw>(`hot?limit=${limit}&count=${count}`)).data
            }
            let data = await this._api.get<IPostsRaw>(`hot?limit=${limit}&count=${count}`)
            return data.data
        } catch (error) {
            throw new Error('erro na api'+JSON.stringify(error));
        }

    }
    async getNews(navigation?:{after?:string,before?:string},limit:number=27,count:number=0): Promise<IPostsRaw>  {
        const url = 'new';
        try {
            if(navigation){
                if(navigation.after){
                   return await (await this._api.get<IPostsRaw>(`${url}?after=${navigation.after}&limit=${limit}&count=${count}`)).data
                }
                else if(navigation.before){
                    return await (await this._api.get<IPostsRaw>(`${url}?after=${navigation.before}&limit=${limit}&count=${count}`)).data
                }
                return await (await this._api.get<IPostsRaw>(url+`?limit=${limit}&count=${count}`)).data
            }
            let data = await this._api.get<IPostsRaw>(url+`?limit=${limit}&count=${count}`)
            return data.data
        } catch (error) {
            throw new Error('erro na api'+JSON.stringify(error));
        }
//rising
    }
    async getrisings(navigation?:{after?:string,before?:string},limit:number=27,count:number=0): Promise<IPostsRaw>  {
        const url = 'rising'
        try {
            if(navigation){
                if(navigation.after){
                   return await (await this._api.get<IPostsRaw>(`${url}?after=${navigation.after}&limit=${limit}&count=${count}`)).data
                }
                else if(navigation.before){
                    return await (await this._api.get<IPostsRaw>(`${url}?after=${navigation.before}&limit=${limit}&count=${count}`)).data
                }
                return await (await this._api.get<IPostsRaw>(url+`?limit=${limit}&count=${count}`)).data
            }
            let data = await this._api.get<IPostsRaw>(url+`?limit=${limit}&count=${count}`)
            return data.data
        } catch (error) {
            throw new Error('erro na api'+JSON.stringify(error));
        }
//rising
    }
}