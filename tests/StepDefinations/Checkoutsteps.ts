import { Given , When, Then} from "@cucumber/cucumber";
import { LoginPage } from "../pages/LoginPage";
import { Commonutils } from "../Utils/Commonutils";
import { Page } from "@playwright/test"
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { Assertutil } from "../Utils/Assertutil";
import { CheckoutPage } from "../pages/CheckoutPage";
import Config from "../../Config/config.json";

 let Login:LoginPage;
 let propage:ProductPage;
 let cart:CartPage;
 let checkoutv:CheckoutPage;
Given('user logged into saucedemo', async ()=> {
  Login=await new LoginPage(Commonutils.page);
         await  Login.login();
});

Given('user add Backpack to cart', async ()=> {
   propage=await new ProductPage(Commonutils.page);         
              await propage.productPage();
});

Given('Product available in cart', async ()=> {
                  cart=await new CartPage(Commonutils.page);
                           await cart.cartButton();
                              await  Assertutil.verifyElementIsVisible(cart.Back_pack_incart)
                           
});

When('user enter Checkout details', async ()=> {
          checkoutv = await new CheckoutPage(Commonutils.page);
         await  checkoutv.checkout();

});

When('user enter finish button', async ()=> {
         await checkoutv.finish();
});

Then('order confirmation button should be displayed', async ()=> {
  await Assertutil.textIsPresent(checkoutv.Confirmation_msg, Config.confirmationtext);
});