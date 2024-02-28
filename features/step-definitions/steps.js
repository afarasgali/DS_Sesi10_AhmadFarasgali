const { Given, When, Then } = require ('@wdio/cucumber-framework');


const LoginPage = require ('../pageobjects/login.page.js');
const HomePage = require ('../pageobjects/home.page.js');



Given (/^Afarasgali is on the login page$/, async () => {
    await LoginPage.open()
})

When (/^When Afarasgali login with "(.*)" credential$/, async (username) => {
    await LoginPage.open(username)
})

Then (/^Then Afarasgali must be directed to home page$/, async () => {
    await HomePage.validateHomePage()
})

Then (/^Afarasgali should see error "(.*)"$/, async (message) => {
    await LoginPage.validateLockedOutUserError(message)
})
