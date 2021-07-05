import { IHotPost } from "../entity/IHotPost";
import { IRedditHotArtificialRaw } from "../entity/IRedditHotArtificialRaw";

export interface IParseRedditHotArtificialRawToHostPost {
   parse(model: IRedditHotArtificialRaw[]): Promise<IHotPost[]>
}