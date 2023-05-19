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

test('access todays deal', async function () {
  await driver.get('https://www.amazon.com/')
  await driver.wait(until.elementLocated(By.xpath('//*[@id="nav-xshop"]/a[1]')))

  await driver.findElement(By.xpath('//*[@id="nav-xshop"]/a[1]')).click()
  //await driver.wait(until.titleContains("Today's Deals"))
  // or:
  const pageTitle = await driver.getTitle()
  expect(pageTitle).toContain("Today's Deals")
})
