import { test, expect } from '@playwright/test';

test.use({ headless: true })
const TC_index = "-02"
test(`TC${TC_index}-01`, async ({ browser, page }) => {
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





//PARA EL 2DO TEST, lo mismo pero con mejoras:
//  ✅ Guardar los locators de los checkboxes en variables (checkbox1, checkbox2) para evitar repetir page.locator(...).nth(...) varias veces.
//  ✅ Corregir la assertion del segundo checkbox: reemplazar expect(await ...).toBeChecked({ checked: false }) por await expect(...).not.toBeChecked().
//   Mantener el orden lógico de evidencia visual: screenshot del checkbox individual → acción → screenshot post-acción.
//   N/A Ver si querés unificar screenshots del checkbox general (getByText(...)) o si preferís quedarte solo con las del input real (más precisas).
//   Asegurarte de que cada expect() asincrónico tenga su correspondiente await.

test(`TC${TC_index}-02`, async ({ browser, page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  const checkbox1 = page.locator('input[type="checkbox"]').nth(0);
  const checkbox2 = page.locator('input[type="checkbox"]').nth(1);

  await page.getByText("checkbox 1").screenshot({ path: `screenshots/TC${TC_index}_box_preTest.png` })

  await checkbox1.screenshot({ path: `screenshots/TC${TC_index}_preChecked.png` })

  await page.locator('input[type="checkbox"]').nth(0).check()
  await expect(page.locator('input[type="checkbox"]').nth(0)).toBeChecked()

  await checkbox2.screenshot({ path: `screenshots/TC${TC_index}_postCheck.png` })


  if (await checkbox2.isChecked()) {
    await checkbox2.uncheck()
  }

  await expect(await checkbox2).not.toBeChecked()
  // .nth(0).check()

  await page.getByText("checkbox 1").screenshot({ path: `screenshots/TC${TC_index}_box_postTest.png` })
});
