const { $, expect } = require('@wdio/globals')
const Page = require('./page');


class LoginPage extends Page {
    //Elemet Collection
    get fieldUsername () {
        return $('#user-name');
    }

    get fieldPassword () {
        return $('#password');
    }

    get buttonLogin () {
        return $('#login-button');
    }
    errorLockedOutUser=(dynamicMessage) => {
         return $('//h3[text()="${dynamicMessage}"]') 
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username) {
        await this.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.buttonLogin.click();
    }

    async validateLockedOutUserError (message) {
        await this.errorLockedOutUser(message).waitForDisplayed({ timeout: 2500 });
        await expect(this.errorLockedOutUser).toBeDisplayed()
    }


    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();
