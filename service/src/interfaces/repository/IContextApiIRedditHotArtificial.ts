import { AxiosResponse } from "axios";
import { IRedditHotArtificialRaw } from "../entity/IRedditHotArtificialRaw";

export interface IContextApiIRedditHotArtificial{
    get<T>(url:string):Promise<AxiosResponse<IRedditHotArtificialRaw>>
}