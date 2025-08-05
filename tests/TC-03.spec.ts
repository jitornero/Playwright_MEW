import { test, expect } from '@playwright/test';

test.use({ headless: true })
const TC_index = "-03"


test(`TC${TC_index}-01`, async ({ browser, page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await expect.soft(page).toHaveTitle("Login Page");
  await expect(page).toHaveURL(/login/)
});
