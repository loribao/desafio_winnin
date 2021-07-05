import { IPost } from "../interface/IPost";
import { IPostsRaw } from "../interface/IPotsRaw";
import { Post } from "../model/Post";
import {redditReactjsRepository} from '../repository/apiRedditReacjs';
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');
interface IPostsNext{
    Posts:IPost[],
    after:string,
    before:string
}
export class ObterPosts {
    async hot(after:string='',limit: number=4, count: number=0):Promise<IPostsNext>{
        let api = new redditReactjsRepository();
        return await this.parseArray(await api.getHost({after},limit,count));
    }
    async news(after:string='',limit: number=4, count: number=0):Promise<IPostsNext>{
        let api = new redditReactjsRepository();
        return await this.parseArray(await api.getNews({after},limit,count));
    }
    async risings(after:string='',limit: number=4, count: number=0):Promise<IPostsNext>{
        let api = new redditReactjsRepository();
        return await this.parseArray(await api.getrisings({after},limit,count));
    }
    async parseArray(model: IPostsRaw): Promise<IPostsNext> {

       const data = model.data.children.map(async (dt)=> new Post({
                autor: dt.data.author,
                dominio: dt.data.domain,
                num_comentarios: dt.data.num_comments,
                timestamp: dt.data.created,
                ups: dt.data.ups,
                titulo: dt.data.title,
                timestampDescricao: moment(dt?.data?.created*1000).fromNow()
        }));
        return {Posts:await Promise.all(data),after:model.data.after,before: model.data.before };
    }
}