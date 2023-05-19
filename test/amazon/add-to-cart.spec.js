const { Browser, Builder, By, Key } = require('selenium-webdriver')
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

test('Add an item to cart', async function () {
  await driver.get('https://www.amazon.com/')
  await driver.findElement(By.id('twotabsearchtextbox')).sendKeys('airpods')
  await driver.findElement(By.id('nav-search-submit-button')).click()
  await driver.findElement(By.css('[data-asin="B0B42MQQDL"]'))

  await driver
    .actions()
    .pause(800)
    .click()
    .perform()
  expect(true).toBeTruthy()
})
