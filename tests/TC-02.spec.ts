import { test, expect } from '@playwright/test';

test.use({headless:true})
const TC_index = "-02"
test(`TC${TC_index}`, async ({ browser, page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  //await page.pause()

  // const quote1_selector = await page.locator('div.quote').filter({hasText:"he world as we have created"})
  // console.log("Quote1 encontrado!")
  // await expect(quote1_selector).toBeVisible()
  // await quote1_selector.screenshot({path:'screenshots/tc-01.png'});
  // await expect(quote1_selector.locator(".author")).toHaveText("Albert Einstein")
  // await quote1_selector.locator("a").count()
  // await expect(quote1_selector.locator("a").getByText("change")).toBeVisible()
  await page.locator('input[type="checkbox"]').nth(0)
  .check()
    await page.locator('input[type="checkbox"]').nth(0)
  .screenshot({path:`screenshots/TC${TC_index}.png`})
  // .nth(0).check()
  

});
