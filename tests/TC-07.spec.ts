import { test, expect } from '@playwright/test';

const filePath = __filename;
const TC_index = filePath.slice(91,94)//se visualiza como el guio + numero despues del TC. Ej: "-05"


test.use({ headless: false })
// const TC_index = "-05"



  const tags = require("../fixtures/data/tags.json")

  tags.forEach(element => {
    console.log(element)

    test(`TC${TC_index}-01_${element}`, async ({ browser, page }) => {
    await page.goto(`https://quotes.toscrape.com/tag/${element}`);

      await expect(page.getByRole("heading", {level: 3})).toContainText(element)
    });
  });




// test(`TC${TC_index}-01`, async ({ browser, page }) => {
//   const tags = require("../fixtures/data/tags.json")
//   await page.goto('https://quotes.toscrape.com/');


// });



