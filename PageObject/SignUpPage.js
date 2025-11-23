class SignUpPage {
    constructor(page)
     {
        this.page = page;
        this.homepagevalidation = page.locator("[src='/static/images/home/logo.png']");
        this.signupbtn = page.getByText(" Signup / Login");
        this.name = page.getByPlaceholder("Name");
        this.email =page.locator("input[data-qa='signup-email']");
        this.signupbtn= page.getByRole("button", {name:"Signup"});
        //this.submitbtn = page.locator("[data-qa='signup-button']");
       // this.existingEmailError=page.getByText("p:has-text('Email Address already exist!')");
       this.existingEmailError=page.getByRole("text",{name:'Email Address already exist!'});
    }
    async navigateTo() {
        await this.page.goto("https://automationexercise.com/"); 
    }

    async gotoSignUpLogin() 
    {
        await this.signupbtn.click();
    }

    async signUpCredential(email)
    { 
        await this.name.fill("Nikita");
        await this.email.fill(email);
        await this.signupbtn.click();
        await page.pause();

    }
}

module.exports = { SignUpPage }
