import { test, expect } from '@playwright/test';

test.use({ headless: true })
const TC_index = "-02"
test(`TC${TC_index}`, async ({ browser, page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  await page.getByText("checkbox 1").screenshot({ path: `screenshots/TC${TC_index}_box_preTest.png` })

  await page.locator('input[type="checkbox"]').nth(0).screenshot({ path: `screenshots/TC${TC_index}_preChecked.png` })

  await page.locator('input[type="checkbox"]').nth(0).check()
  await expect(page.locator('input[type="checkbox"]').nth(0)).toBeChecked()
  await page.locator('input[type="checkbox"]').nth(0).screenshot({ path: `screenshots/TC${TC_index}_postCheck.png` })


  if (await page.locator('input[type="checkbox"]').nth(1).isChecked()) {
    await page.locator('input[type="checkbox"]').nth(1).uncheck()
  }

  expect(await page.locator('input[type="checkbox"]').nth(1)).toBeChecked({ checked: false })
  // .nth(0).check()

  await page.getByText("checkbox 1").screenshot({ path: `screenshots/TC${TC_index}_box_postTest.png` })
});
