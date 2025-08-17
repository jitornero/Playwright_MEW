import { test, expect } from '@playwright/test';

const filePath = __filename;
const TC_index = filePath.slice(91,94)//se visualiza como el guio + numero despues del TC. Ej: "-05"


test.use({ headless: false })
// const TC_index = "-05"


test(`TC${TC_index}-01`, async ({ browser, page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  const user = page.locator("#username");
  const password = page.locator("#password")
  const loginButton = page.getByRole("button", {name: "login"})
  const flash = page.locator("#flash")
  await user.fill("tomsmith");
  await password.fill("WrongPassword!")
  await loginButton.click();
  await expect(page).toHaveURL(/login/i);
  await expect(flash).toBeVisible()
  await expect(flash).toContainText("Your password is invalid!")
  await expect(page).not.toHaveURL(/secure/i);


  if (await flash.isVisible()){
    console.log("Flash es visible")
    await flash.screenshot({path:`screenshots/TC${TC_index}.png`})
  }
  await page.screenshot({path:`screenshots/TC${TC_index}_full.png`})
});



