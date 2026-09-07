import { Given , When, Then} from "@cucumber/cucumber";
import { LoginPage } from "../pages/LoginPage";
import { Commonutils } from "../Utils/Commonutils";
import { Assertutil } from "../Utils/Assertutil";
import { ProductPage } from "../pages/ProductPage";
import Config from "../../Config/config.json";

let Login!:LoginPage;
let propage!:ProductPage;
Given('user naviagte to application url', async ()=> {
  //basepage handle the navigation
});

When('user login with valid credentials', async () =>{
   Login=await new LoginPage(Commonutils.page);
         await  Login.login();
});

Then('user should navigate to products page', async () =>{
    propage=await new ProductPage(Commonutils.page);         
                  await propage.productPage();
    await Assertutil.textIsPresent(propage.Product,Config.Producttext)
});