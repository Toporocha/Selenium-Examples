//     Feature: Shopping Cart Functionality on Zalando.com

//     Scenario: Add, Remove, and Update Items in the Shopping Cart
//     Given the user is on the Zalando.com homepage
//     When the user searches for a product and adds it to the shopping cart
//     Then the shopping cart should display the added product with the correct information and price
//     When the user adds another product to the shopping cart
//     Then the shopping cart should display both products with the correct information and prices
//     When the user removes a product from the shopping cart
//     Then the shopping cart should no longer display the removed product
//     And the total price should be updated accordingly
//     When the user updates the quantity of a product in the shopping cart
//     Then the shopping cart should display the updated quantity
//     And the total price should be updated accordingly

const { Browser, Builder, By, Key, until } = require('selenium-webdriver')
const { expect, test } = require('@jest/globals')
const driver = new Builder()
  .forBrowser(Browser.CHROME)
  .setChromeOptions(/* ... */)
  .build()
driver
  .manage()
  .window()
  .maximize()

jest.setTimeout(60000)

test('Shopping Cart Functionality on Zalando', async function () {
  await driver.get('https://www.zalando.com/')
  await driver
    .findElement(By.name('q'))
    .sendKeys('adidas superstar', Key.RETURN)
})
