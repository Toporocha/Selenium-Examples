const { Browser, Builder, By, Key } = require('selenium-webdriver')

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

;(async function () {
  let driver = await new Builder().forBrowser('chrome').build()
  await driver.get('https://www.ryanair.com/')
  await driver
    .findElement(By.className('cookie-popup-with-overlay__button'))
    .click()
  //await driver.findElement(By.id('input-button__departure')).sendKeys('Luxembourg')
  const clickable = driver
    .findElement(By.id('input-button__departure'))
    .sendKeys(Key.RETURN)
  const actions = driver.actions({ async: true })
  await actions
    .doubleClick(clickable)
    .pause(200)
    .sendKeys('Dortmund')
    .perform()

  // await driver.findElement(By.id('input-button__destination')).click()
  // await driver
  //.actions()
  // .sendKeys('Milan-Bergame')
  // .pause(800)
  // .sendKeys(Key.ENTER)
  // .perform()
  // await driver .findElement(  By.className('flight-search-widget__start-search-container ng-tns-c81-3') )  .click()
})()
