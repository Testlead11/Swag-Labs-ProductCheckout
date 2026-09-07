import { Given, Then, When } from "@cucumber/cucumber";
import { LoginPage } from "../pages/LoginPage";
import { Commonutils } from "../Utils/Commonutils";
import { Page } from "@playwright/test"
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { Assertutil } from "../Utils/Assertutil";


 let Login:LoginPage;
 let propage:ProductPage;
 let cart:CartPage;
Given('user logged in saucedemo', async ()=> {
     Login=await new LoginPage(Commonutils.page);
       await  Login.login();
});

When('user adds Backpack to cart', async ()=> {
             propage=await new ProductPage(Commonutils.page);         
            await propage.productPage();
});

When('user open cart', async ()=>{
            cart=await new CartPage(Commonutils.page);
          await cart.cartButton();
} )
  


Then('Backpack should be added in cart', async ()=> {
   await  Assertutil.verifyElementIsVisible(cart.Back_pack_incart)
});