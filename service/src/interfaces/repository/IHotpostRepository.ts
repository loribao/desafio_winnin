import { IHotPost } from "../entity/IHotPost";

export interface IHotPostRepository{
    saveAll(model: IHotPost[]):Promise<IHotPost[]>;
}