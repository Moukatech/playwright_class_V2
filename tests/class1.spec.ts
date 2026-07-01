import { test } from '../fixtures/base.fixture';
import { expect } from '@playwright/test';

test('login test', async ({ loginPage }) => {

    await loginPage.login();
});
