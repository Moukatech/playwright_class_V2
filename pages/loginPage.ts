import { Page } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();


export class LoginPage {
    readonly page:Page
    readonly email 
    readonly password
    readonly myAccountBTN
    readonly login_NAV_BTN
    readonly loginButton

    constructor( page: Page) {
    this.page =page
    this.email = this.page.locator('#input-email');
    this.password = this.page.locator('#input-password');
    this.loginButton = this.page.locator("//*[contains(@value,'Login')]");
    this.myAccountBTN = this.page.getByRole('button', {name:'My account'})
    this.login_NAV_BTN = this.page.getByText(' Login')
    
}

    async navigate() {
        
        await this.page.goto('');
    }

    async login(username: string, password: string) {
        await this.myAccountBTN.hover()
        await this.login_NAV_BTN.click()
        await this.email.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}



//import { Page } from '@playwright/test';

// export class LoginPage {

//     readonly username;
//     readonly password;
//     readonly loginButton;

//     constructor(private page: Page) {
//         this.username = this.page.locator('#username');
//         this.password = this.page.locator('#password');
//         this.loginButton = this.page.locator('#loginBtn');
//     }

//     async navigate() {
//         await this.page.goto('/login');
//     }

//     async login(username: string, password: string) {
//         await this.username.fill(username);
//         await this.password.fill(password);
//         await this.loginButton.click();
//     }
// }
