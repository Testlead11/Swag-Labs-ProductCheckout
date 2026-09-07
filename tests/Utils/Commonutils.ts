import { Browser, chromium, firefox, Locator, Page } from "@playwright/test";
import  config  from "../../Config/config.json";
import { Assertutil } from "./Assertutil";

 
 export class Commonutils{
  static browser:Browser;
  static page:Page;
    static async startBrowser():Promise<void>{
            let browser: string= await config.browser;
            try{
                switch(browser){
         case "firefox": this.browser= await firefox.launch({headless:false});
         break;
        case "chrome":this.browser=await chromium.launch();
         break;
        }
         this.page=await this.browser.newPage();
        await this.page.goto(config.url);
            }
             catch(error:any){
                  await Assertutil.assertFail(error);
             }         
    }

    static async closeBrowser():Promise<void>{
          await this.browser.close();
    }
  static async findElement(selector:string):Promise<Locator>{
    let element:Locator = null as any;
      try{
             element =await this.page.locator(selector);
      }
      catch(error:any){
   await Assertutil.assertFail(error);
      }
      return element;
  }
 // enter value
  static async entervalue(element:Locator,value:string):Promise<void>{
    try{

    
             await element.fill(value);
    }
    catch(error:any){
           await Assertutil.assertFail(error);
    }
  }
  //click on element
  static async clickOnElement(element:Locator):Promise<void>{
          await element.click();
  }
 }
 