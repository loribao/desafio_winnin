import { IHotPost } from "../entity/IHotPost";
import { IRedditHotArtificialRaw } from "../entity/IRedditHotArtificialRaw";

export interface IRedditHotArtificial{
    findAll():Promise<IRedditHotArtificialRaw[]>;
}