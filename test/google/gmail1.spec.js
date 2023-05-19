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

// Feature: Gmail
// Login into Gmail via Google.com

// Scenario: Access Gmail via Google.co,
// Given I am on https://www.google.com/ and accepted user consent
// When I clicked on the button "Gmail"
// And I type "English" then press Enter
// And I clicked on the button "More target languages"
// // And I type "German" then press Enter
// And I type "Testing" in the "Source text" text area
// Then the "Translation result" area should show "Testen"

const driver = new Builder()
  .forBrowser(Browser.CHROME)
  .setChromeOptions(/* ... */)
  .build()

driver
  .manage()
  .window()
  .maximize()

jest.setTimeout(60000)
test('Login into Gmail', async function () {
  await driver.get('https://www.google.com/')
  await driver.findElement(By.xpath('//button[. = "Alle akzeptieren"]')).click()
  await driver
    .findElement(By.css('[aria-label="Suche"]'))
    .sendKeys('gmail', Key.ENTER)
  //1  what is better??
  await driver
    .findElement(
      By.partialLinkText('kostenlose, vertrauliche und sichere E-Mails')
    )
    .click()
  //   or    await driver.findElement(By.css("[class='eqAnXb'] a")).click()
  //2  what is better?
  await driver.findElement(By.xpath('//*[.="Anmelden"]')).click()

  //   or   await driver.findElement(By.partialLinkText('Anmelden')).click()
  //   or    await driver
  //   .findElement(By.css("[class='header__aside'] a.button--medium"))
  //   .click()

  // 3
  await driver
    //.findElement(By.xpath('//input[@aria-label="Email or phone"]'))
    //.findElement(By.id('identifierId'))
    .findElement(By.css('[aria-label="Email or phone"]'))
    .sendKeys('dfos.claudia', Key.ENTER)

  // //4
  // await driver
  //   .actions()
  //   .pause(800)
  //   .sendKeys('password')
  //   .sendKeys(Key.ENTER)
  //   .perform()

  await driver
    .wait(
      until.elementLocated(
        By.xpath('//span[contains(text(), "Forgot password?")]')
      )
    )
    .click()

  //5     imi da eroare  ???
  const errorMessage = await driver.wait(
    until.elementLocated(By.xpath('//span[contains(text(),"Try another way")]'))
  )

  expect(errorMessage).toBeTruthy()
  // const errorMessage = await driver
  //   .wait(until.elementLocated(By.css('[id="forgotPassword"]')))
  //   .getText()

  //expect(errorMessage).toBe('')
})
