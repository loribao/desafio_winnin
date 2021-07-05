import { CronJob } from "cron";
import { HotPostRepository } from "./repository/HotPostRepository";
import { RedditHotArtificial } from "./repository/RedditHotRepository";
import { HandleeHostPost } from "./handle/HandleHotPost";
import { ParseRedditHotArtificialRawToHostPost } from "./adapter/ParseRedditHotArtificialRawToHostPost";

import "./database/index";

let isRunHandle: boolean;
//executa as 00:00 de todos os dias
const boot = async () => {
    try {
        if (!isRunHandle) {
            let db = new HotPostRepository();
            let api = new RedditHotArtificial();
            let adapter = new ParseRedditHotArtificialRawToHostPost();
            let handle = new HandleeHostPost(db, api, adapter)
            isRunHandle = true;
            await handle.execute();
            isRunHandle = false;
        }
    } catch (error) {
        isRunHandle = false;
        console.log(error);
    }
}
const job = new CronJob(
process.env.CRONJOB? process.env.CRONJOB?.split('_').reduce((p,v)=>p+" "+v):'0 0 * * * *', async ()=> await boot() );

const main = async ()=>{
    boot().then(async()=>{
        job.start();
    }).catch(error=>console.log(error))
}
main();