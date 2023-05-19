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

test('add airpods to cart', async function () {
  await driver.get('https://www.amazon.com/')
  await driver
    .findElement(By.id('twotabsearchtextbox'))
    .sendKeys('airpods', Key.RETURN)
  await driver.findElement(By.css("[data-index='7'] h2")).click()
  await driver.wait(until.titleContains('airpods'))

  await driver.wait(until.elementLocated(By.id('add-to-cart-button')))
  await driver.findElement(By.id('add-to-cart-button')).click()

  await driver.wait(until.elementLocated(By.id('sw-gtc')))
  const cartButton = await driver.findElement(By.id('sw-gtc'))
  const cartButtonText = await cartButton.getText()
  expect(cartButtonText).toBe('Go to Cart')
  // or :
  // const cartButtonText = await driver.findElement(By.css('[id="sw-gtc"]')).getText();
  // expect(cartButtonText).toBe('Go to Cart');
})
