import { test, expect } from '@playwright/test';

test('TC-01- 01 Xpath approach: menos robusto', async ({ page }) => {

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

test('TC-01- 02 css +locator approach: recomendado por PW', async ({ page }) => {

  const quote1= "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking."
  await page.goto('https://quotes.toscrape.com/');


  const quote1_selector = await page.locator('div.quote').filter({hasText:"he world as we have created"})
  console.log("Quote1 encontrado!")
  await expect(quote1_selector).toBeVisible()
  await quote1_selector.screenshot({path:'screenshots/tc-01.png'});
  await expect(quote1_selector.locator(".author")).toHaveText("Albert Einstein")
  await quote1_selector.locator("a").count()
  await expect(quote1_selector.locator("a").getByText("change")).toBeVisible()

  

});
