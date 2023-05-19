const { Browser, Builder, By, Key } = require('selenium-webdriver')
const { expect, test } = require('@jest/globals')

// Feature: Tickets

// Finding tickets in december

// Scenario: Find ticket from Luxembourg to Lisbon
// Given I am on https://www.ryanair.com/lu/fr
// When I clicked on the button with text "Departe"
// And I entered "Luxembourg"
// And I clicked on the button with text "Destination"
// And I entered "Lisbonne "
// And I clicked on the button with text "Search flights"
// Then the result should be "please select travel dates" on the screen
jest.setTimeout(60000)

test('Search a flight ticlet from Dortmund to Budapest', async function () {
  let driver = await new Builder().forBrowser('chrome').build()
  await driver.get('https://www.wizzair.com/')
  await driver
    .actions()
    .pause(8000)
    .perform()
  const clickable = await driver.findElement(By.id('search-departure-station'))
  await driver
    .actions()
    .pause(800)
    .perform()

  //  clickable.sendKeys(Key.chord(Key.CONTROL, 'a'))
  clickable.sendKeys('Dortmund').click()

  // await driver  .findElement(By.id('search-arrival-station'))  .sendKeys('Porto', Key.ENTER)
  // await driver.actions().pause(800).perform()

  // await driver .findElement(By.id('search-departure-date')).sendKeys('25.11.2022')
  // await driver.findElement( By.className('flight-search-widget__start-search-container ng-tns-c81-3') ).click()
  // setTimeout(() => driver.quit(), 5000)

  //expect(true).toBeTruthy()
})
