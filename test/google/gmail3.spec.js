const { Builder, By, Key, until } = require('selenium-webdriver')
const { expect, test } = require('@jest/globals')

const driver = new Builder().forBrowser('chrome').build()

jest.setTimeout(60000)

test('register a new Gmail account', async function () {
  await driver.get('https://www.google.com/')
  await driver
    .findElement(By.xpath('//button/div[contains(text(), "Alle akzeptieren")]'))
    .click()
  await driver.findElement(By.linkText('Anmelden')).click()

  await driver
    .wait(until.elementLocated(By.linkText('Konto erstellen')))
    .click()
  await driver
    .wait(until.elementLocated(By.linkText('Für meine private Nutzung')))
    .click()

  await driver
    .wait(until.elementLocated(By.name('firstName')))
    .sendKeys('FirstName')
  await driver.findElement(By.name('lastName')).sendKeys('LastName')
  await driver.findElement(By.name('Username')).sendKeys('username')
  await driver.findElement(By.name('Passwd')).sendKeys('password')
  await driver.findElement(By.name('ConfirmPasswd')).sendKeys('password')
  await driver.findElement(By.css('[class="VfPpkd-RLmnJb"]')).click()

  const errorMessage = await driver
    .wait(until.elementLocated(By.css('[class="dEOOab RxsGPe"]')))
    .getText()

  expect(errorMessage).toBe('')
})
