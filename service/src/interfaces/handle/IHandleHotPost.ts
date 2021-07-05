import { IHotPost } from "../entity/IHotPost";

export interface IHandleeHostPost{
    execute():Promise<IHotPost[]>;
}