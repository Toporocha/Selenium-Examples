const { Browser, Builder, By, Key } = require('selenium-webdriver')
const assert = require('assert')
// Feature: Translate
// Translate from English to German

// Scenario: Translate the word "Sorry" from English to German
// Given I am on https://translate.google.com/ and accepted user consent
// When I clicked on the button "More source languages"
// And I type "English" then press Enter
// And I clicked on the button "More target languages"
// // And I type "German" then press Enter
// And I type "Testing" in the "Source text" text area
// Then the "Translation result" area should show "Testen"

const { Entry } = require('selenium-webdriver/lib/logging')
;(async function example () {
  const driver = new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(/* ... */)
    .build()

  await driver
    .manage()
    .window()
    .maximize()

  try {
    await driver.get('https://translate.google.com/')
    await driver.findElement(By.xpath('//button[. = "Accept all"]')).click()

    await driver
      .actions()
      .click(driver.findElement(By.css('[aria-label="More source languages"]')))
      .pause(200)
      .sendKeys('English')
      .pause(200)
      .sendKeys(Key.ENTER)
      .perform()

    await driver
      .actions()
      .click(driver.findElement(By.css('[aria-label="More target languages"]')))
      .pause(200)
      .sendKeys('German')
      .pause(200)
      .sendKeys(Key.ENTER)
      .perform()

    await driver
      .actions()
      .click(driver.findElement(By.css('[aria-label="Source text"]')))
      .sendKeys('Finding element')
      .pause(500)
      .perform()

    const parentOfResult = await driver.findElement(
      By.xpath(
        '//*[@aria-labelledby = string(//*[text() = "Translation results"]/@id)]'
      )
    )

    assert.ok(
      parentOfResult.findElement(By.xpath('//*[text() = "Element finden"]'))
    )
  } finally {
    setTimeout(() => driver.quit(), 1000)
  }
})()

// Scenario: Swap translation of the word "Testen" from German to English
// Given I am on https://translate.google.com/?sl=en&tl=de&text=Testing&op=translate
// When I clicked on the button "Swap languages"
// And I click on the button X "Clear source text"
// And I write the word "entschuldigung"
// Then the "Translation result" area should show "Testing"
