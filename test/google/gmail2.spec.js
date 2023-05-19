const {
  Browser,
  Builder,
  By,
  Key,
  Actions,
  until
} = require('selenium-webdriver')
const { expect, test } = require('@jest/globals')
const { urlContains } = require('selenium-webdriver/lib/until')

const driver = new Builder()
  .forBrowser(Browser.CHROME)
  .setChromeOptions(/* ... */)
  .build()

driver
  .manage()
  .window()
  .maximize()

jest.setTimeout(60000)
test('Create account in Gmail', async function () {
  await driver.get('https://www.google.com/')
  await driver
    .findElement(By.xpath('//button/div[contains(text(), "Alle akzeptieren")]'))
    .click()

  await driver
    .findElement(By.css('[aria-label="Gmail (Öffnet einen neuen Tab.)"]'))
    .click()

  //await driver.findElement(By.partialLinkText('Konto erstellen')).click()    or
  await driver
    .findElement(By.xpath('//span[contains(text(), "Konto erstellen")]'))
    .click()
  await driver
    .actions()
    .click(driver.findElement(By.css('[aria-label="Vorname"]')))
    .sendKeys('Madona')
    .sendKeys(Key.ENTER)
    .sendKeys('worldwide')
    .click(driver.findElement(By.css('[aria-label="Nutzername"]')))
    .sendKeys('Victoria')
    .sendKeys(Key.ENTER)
    .sendKeys('passwordforgmail')
    .sendKeys(Key.ENTER)
    .sendKeys('passwordforgmail')
    .perform()

  await driver
    .wait(until.elementLocated(By.xpath('//button[.="Weiter"]')))
    .click()
  const errorMessageElement = await driver.wait(
    until.elementLocated(
      By.xpath(
        '//*[.="Dieser Nutzername ist nicht zulässig. Versuchen Sie es noch einmal."]'
      )
    )
  )

  expect(errorMessageElement).toBeTruthy()
})
