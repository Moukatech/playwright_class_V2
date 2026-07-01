import{test, expect} from '@playwright/test';
import{RegisterPage} from '../pages/registration';
import {generateCustomerData} from '../data_factory/customerData';
import {dataStore} from '../helpers/utils'
import {LoginPage}  from '../pages/loginPage';

test.describe.serial('User Registration and Login', () => {

test('Register new user', async ({ page }) => {

    const customerInfo = await generateCustomerData()

    

    const registerPage = new RegisterPage(page);

    await registerPage.navigate();

    await expect(page).toHaveTitle('Register Account');
    
    await registerPage.register(
        customerInfo.first_name,
        customerInfo.last_name,
        customerInfo.email,
        customerInfo.phone_number,
        customerInfo.password,
        customerInfo.confirm_password
    );

    dataStore.set('email', customerInfo.email);
    dataStore.set('password', customerInfo.password);
// We must validate the response body
    await expect(page).toHaveTitle(' Your Account Has Been Created!');


});

test('successful login', async ({ page }) => {
    const password = dataStore.get('password');
    const email = dataStore.get('email');
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(email, password);
    

    // await expect(page.locator('#welcomeMessage')).toHaveText(`Welcome, admin! Today's date is ${currentDate}.`);
});
})
