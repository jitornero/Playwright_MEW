import { test, expect } from '@playwright/test';

const filePath = __filename;
const TC_index = filePath.slice(91,94)//se visualiza como el guio + numero despues del TC. Ej: "-05"


test.use({ headless: false })
// const TC_index = "-05"



  const tags = require("../fixtures/data/tags.json")

  tags.forEach((element, index) => {
    console.log("element", element)
    console.log("index", index)

    test(`TC${TC_index}-01_${element}`, async ({ browser, page }) => {
    await page.goto(`https://quotes.toscrape.com/tag/${element}`);
    const countQuote = await page.locator(".quote").count();
      await expect(page.getByRole("heading", {level: 3})).toContainText(element);
      await expect (countQuote).toBeGreaterThanOrEqual(1)
    let quotesQuantity = {tags:0};
    if (index==0){
      quotesQuantity.tags = countQuote;
      console.log(quotesQuantity)
    }



    });

  });


// test(`TC${TC_index}-01`, async ({ browser, page }) => {
//   const tags = require("../fixtures/data/tags.json")
//   await page.goto('https://quotes.toscrape.com/');
// });

