class NewUserPage {
    constructor(page) {
        this.page = page;
        this.radiobtn = page.locator("[for='id_gender2']");
        this. name = page.getByPlaceholder("Name");
        this.email = page.locator("#email");
        //const email= this.page.locator("input[data-qa='signup-email']");
        this.password =page.locator("#password");
        this.day = page.locator("#days");
        this.month = page.locator("#months");
        this.year = page.locator("#years");
        this.checkboxOption1 = page.locator("[for='newsletter']");
        this.checkboxOption2 = page.locator("[for='optin']");
        this.addressfirstname = page.locator("#first_name");
        this.addresslastname = page.locator("#last_name");
        this.company = page.locator("#company");
        this.address =page.locator("#address1");
        this.country = page.locator("#country");
        this.state = page.locator("#state");
        this.city = page.locator("#city");
        this.zipcode = page.locator("#zipcode");
        this.mobileno = page.locator("#mobile_number");
        this.createAccbtn =page.getByRole("button", { name: "Create Accoun" });

    }
    async getNewUser(email) {

        await this.radiobtn.click();
        const editable = this.email.isEditable();
        console.log(editable);
        expect(editable).toContain(email);
        await this.password.fill("Nikita@1234");
        await this.day.selectOption("28");
        await this.month.selectOption("February");
        await this.year.selectOption("1998");


        const checkboxes = [
            checkboxOption1,
            checkboxOption2
        ];
        for (const checkbox of checkboxes) {
            await checkbox.check();
        }

        //address
        await this.addressfirstname.fill("Nikita");
        await this.addresslastname.fill("Jadhav");
        await this.company.fill("Virtusa");
        await this.address.fill("Shivneri nagar sangvi nanded-431604");
        await this.country.selectOption("India");
        await this.state.fill("Maharastra");
        await this.city.fill("Nanded");
        await this.zipcode.fill("431605");
        await this.mobileno.fill("7768064335");
        await this.createAccbtn.click();


    }

}
module.exports = { NewUserPage }