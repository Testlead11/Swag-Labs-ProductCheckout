import { AfterAll, Before, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber";
import { Commonutils } from "../Utils/Commonutils";

setDefaultTimeout(60000);
Before(async ()=>{
    await Commonutils.startBrowser();
})
