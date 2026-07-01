
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import {RandomHelper} from '../helpers/utils'
import {dataStore} from '../helpers/utils'
import users from '../data_factory/users.json'

import dotenv from 'dotenv';

dotenv.config();

const password = process.env.PASSWORD;
if (!password) throw new Error('PASSWORD environment variable is required');

test('successful login', async ({ page }) => {
    const currentDate = RandomHelper.getCurrentDate();
    const email = RandomHelper.generateEmail();
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(users[0].username, password);
    

    console.log("Current Date: ", currentDate);
    console.log("Email: ", email);
    await expect(page.locator('#welcomeMessage')).toHaveText(`Welcome, admin! Today's date is ${currentDate}.`);
});


users.forEach(user => {
    test(`Login test for ${user.username}`, async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login(user.username, user.password);
        await expect(page.locator("#welcomeMessage")).toHaveText(user.expected);
        
        // Add assertions here to verify successful login, e.g., checking for a welcome message or user dashboard
    });
});


test('attache file', async ({ page }) => {

    page.goto('https://demoqa.com/automation-practice-form');
    const filePath = 'photo.pdf'; // Replace with the actual file path
    await page.setInputFiles('input[type="file"]', filePath);
    await page.waitForTimeout(5000); 
    // Add assertions here to verify successful file upload, e.g., checking for a success message or uploaded file list
})
