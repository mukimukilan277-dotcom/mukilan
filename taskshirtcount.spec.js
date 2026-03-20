  const { test, expect } = require('@playwright/test')

// test('minimum and maximum product price', async ({ page }) => {

//     await page.goto('https://www.myntra.com/shop/women?utm_source=gh_ht&utm_medium=ht_rev&utm_campaign=gh_ht_inf_iglftr7K&utm_source=gh_ht&utm_medium=ht_rev&utm_campaign=gh_ht_inf_iglftr7K&gad_source=1')
//     await page.hover('(//a[text()="Kids"])[1]')
//     await page.waitForTimeout(3000)
//    await page.click('//a[@data-reactid="345"]')
//     await page.waitForTimeout(3000)

//  const productNames = await page.locator('//li[@class="product-base"]//h3').allInnerTexts()
//      const prices = await page.locator('//li[@class="product-base"]//span[@class="product-discountedPrice"]').allInnerTexts()
     
//      let priceNumbers = prices.map(p => parseInt(p.replace("Rs. ", "")))
//      console.log(priceNumbers);

//      let minPrice = Math.min(...priceNumbers)
//     let minIndex = priceNumbers.indexOf(minPrice)

// console.log("Minimum Price :", minPrice)
//  console.log("Minimum Price Product Name :", productNames[minIndex])
//  const normalprice=await page.locator('//div[@class="product-price"]').allTextContents() 
//  console.log(normalprice);
   
//  }) 


test('population by country',async({page})=>{
    await page.goto('https://www.worldometers.info/world-population/population-by-country/')
    await page.hover('//table[@class="datatable w-full border border-zinc-200 datatable-table"]')
    await page.click('//descendant::tr[@id="india"]')

     const densityvalue = await page.locator('//descendant::td[text()="497"]').allTextContents()
     console.log(densityvalue);
})