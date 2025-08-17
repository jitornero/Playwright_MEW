import { test, expect } from '@playwright/test';

const filePath = __filename;
const TC_index = filePath.slice(91,94)//se visualiza como el guio + numero despues del TC. Ej: "-05"


test.use({ headless: false })
// const TC_index = "-05"


test(`TC${TC_index}-01`, async ({ browser, page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
//console.log(filePath);
  await page.getByLabel("username").fill("invalidUser")
  await page.getByLabel("password").fill("invalidPass")
  await page.getByRole('button', {name:"login"}).click();
  const errorMsg = page.getByText(" Your username is invalid!")
  await expect(errorMsg).toBeVisible()
  
  if (await errorMsg.isVisible()){
    console.log("esto es true!")
    await errorMsg.screenshot({path:`screenshots/TC${TC_index}.png`})
  }
  
});



test(`TC${TC_index}-02`, async ({ browser, page }) => {


  await page.goto('https://the-internet.herokuapp.com/login');
  //console.log(filePath);
  
  const user = page.getByLabel("username");
  const pass = page.getByLabel("password");

  await user.fill("invalidUser");
  await pass.fill("invalidPass");
  await page.getByRole('button', {name:"login"}).click();
  await expect(page).toHaveURL("https://the-internet.herokuapp.com/login");

  const errorMsg = page.locator("#flash");
  await expect(errorMsg).toBeVisible();
  await expect(errorMsg).toContainText(" Your username is invalid!")
  
  if (await errorMsg.isVisible()){
    console.log("esto es true!")
    await errorMsg.screenshot({path:`screenshots/TC${TC_index}.png`})
    await page.screenshot({path:`screenshots/TC${TC_index}_full.png`})
  }
  
});
