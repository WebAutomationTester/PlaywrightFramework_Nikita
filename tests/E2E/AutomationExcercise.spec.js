const { test, expect } = require('@playwright/test');
const { SignUpPage } = require('../../PageObject/SignUpPage');
const { NewUserPage } = require('../../PageObject/NewUserPage');



test.describe('End to end Automation ', () => {
    let signUpPage;
    const email = "ayansh@gmail.com";

    test.beforeEach(async ({ page }) => {
        signUpPage = new SignUpPage(page);
        await signUpPage.navigateTo();
        // signUpPage.gotoSignUpLogin()
        // signUpPage.signUpCredential()
        
    });


 test("Signing up with existing user and catching Error", async ({page}) => {
        await expect( signUpPage.homepagevalidation).toBeVisible();//validating home page 

        await signUpPage.gotoSignUpLogin();

        //expect(await signUpPage.signupbtn).toContainText("New User Signup!");
        expect(await signUpPage.signupbtn).toBeVisible();//validating signup page 

        await signUpPage.signUpCredential(email);
      
        expect(signUpPage.existingEmailError).toBeVisible();
        expect(signUpPage.existingEmailError).toContainText('Email Address already exist!')


       


        
        await page.pause();
    })

    //test("New")

})
