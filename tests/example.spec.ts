import { test, expect } from '@playwright/test';

test('verify page has title', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');

  await expect(page.getByRole('button', { name: ' Shop by Category' })).toHaveText("Shop by Category");



  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});

test('test dropdown', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/select-dropdown-demo/');

  // Click the get started link.
  await page.selectOption("#select-demo", "mocha")
});



test('test popups', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');

  // Click the get started link.
  await page.locator('//*[@id="__next"]/div/main/section[2]/div/div/div/div[1]/p/button').first().click()

page.on('dialog', async dialog => {
    await dialog.accept();
  });
  // await page.click('#alertButton');
});
""

test('test iframe', async ({ page }) => {
  await page.goto('https://vinothqaacademy.com/iframe/');

  // await page.frameLocator('//*[@id="main"]/div[2]/div[1]/div/div/div/div/div/div/iframe[1]').locator('#nameInput').fill("lewis")


  // await page.goto('https://selectorshub.com/iframe-scenario/');
  // await page.frameLocator('//*[@id="pact1"]').locator('#inp_val').fill("Eve")

  // await page.frameLocator('//*[@id="__next"]/div/div/main/div/div/div/div[2]/div[2]/div/div/div/div[2]/iframe').locator('/html/body/div[1]/div/div/div[1]/div[2]/a').click()
  
  
  // // Click the get started link.
  const iframe =  page.frameLocator('//*[@id="main"]/div[2]/div[1]/div/div/div/div/div/div/iframe[1]')
  await iframe.locator("#nameInput").fill("lewis")
  await iframe.locator("#roleInput").fill("admin")
  await iframe.locator("#addBtn").click()
});