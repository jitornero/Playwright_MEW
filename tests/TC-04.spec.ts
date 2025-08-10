import { test, expect } from '@playwright/test';

test.use({ headless: false })
const TC_index = "-04"


test(`TC${TC_index}-01`, async ({ browser, page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.getByLabel("username").fill("tomsmith")
  await page.getByLabel("password").fill("SuperSecretPassword!")
  await page.locator("i").click();
  await page.waitForURL(/secure/, { waitUntil: 'domcontentloaded' });
  await expect(page.getByText("You logged into a secure area!")).toBeVisible();
  await page.getByText("You logged into a secure area!").screenshot({path:`screenshots/TC${TC_index}.png`})
});


test(`TC${TC_index}-02`, async ({ browser, page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.getByLabel("username").fill("tomsmith")
  await page.getByLabel("password").fill("SuperSecretPassword!")
  await page.getByRole("button", {name: "Login"}).click();
  await page.waitForURL(/secure/, { waitUntil: 'domcontentloaded' });
  await expect(page.getByText("You logged into a secure area!")).toBeVisible();
  await page.getByText("You logged into a secure area!").screenshot({path:`screenshots/TC${TC_index}.png`})
});
