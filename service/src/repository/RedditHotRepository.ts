import axios from "axios";
import { IRedditHotArtificialRaw } from "../interfaces/entity/IRedditHotArtificialRaw";
import { IContextApiIRedditHotArtificial } from "../interfaces/repository/IContextApiIRedditHotArtificial";
import { IRedditHotArtificial } from '../interfaces/repository/IRedditHotArtificial';

export const api = axios.create({ baseURL: 'https://api.reddit.com/r/artificial/hot' })

export class RedditHotArtificial implements IRedditHotArtificial {

    private _context: IContextApiIRedditHotArtificial;
    constructor(context: IContextApiIRedditHotArtificial = api) {
        this._context = context;
    }
    async findAll(): Promise<IRedditHotArtificialRaw[]> {
        try {
            let data: IRedditHotArtificialRaw[];
            let cache: IRedditHotArtificialRaw;

            cache = await (await this._context.get<IRedditHotArtificialRaw>('/')).data;
            // eslint-disable-next-line prefer-const
            data = [cache]

            let after = cache.data?.after;
            while (after !== null) {
                const url = `?after=${after}`
                cache = await (await this._context.get<IRedditHotArtificialRaw>(url)).data
                data.push(cache);
                after = cache.data?.after;
                cache = null;
            }
            return data;
        } catch (error) {
            throw new Error("Erro findAll:"+JSON.stringify(error));
        }   

    }
}
