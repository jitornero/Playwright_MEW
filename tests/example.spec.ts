import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

  const quote1= "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking."
  await page.goto('https://quotes.toscrape.com/');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
  //await page.pause()

  const quote1_selector = await page.getByText(quote1)
  console.log("Quote1 encontrado!")
  await expect(quote1_selector).toBeVisible()
  const parent = await quote1_selector.locator("//ancestor::div[1]").locator('.author');
  console.log(parent)
  expect(parent).toHaveText("Albert Einstein")
  //expect(await parent.getByText("Albert Einstein", {exact:true})).toBeVisible()
  

});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
