const { Browser, Builder, By, Key } = require('selenium-webdriver')
const { expect, test } = require('@jest/globals')

// Feature: Search
// Search Iphone14

// Scenario: Search iphone14 on amazon.com
// Given I am on https://www.amazon.com/
// When I click on the area (field) search box
// And I type "Iphone14"
// And I submit the button "search"
// Then the result should be a list of items.
const driver = new Builder()
  .forBrowser(Browser.CHROME)
  .setChromeOptions(/* ... */)
  .build()
driver
  .manage()
  .window()
  .maximize()

jest.setTimeout(60000)

test('Search an iphone on amazon', async function () {
  await driver.get('https://www.amazon.com/')
  await driver
    .findElement(By.id('twotabsearchtextbox'))
    .sendKeys('iphone14', Key.RETURN)
  await driver.findElement(By.id('nav-search-submit-button')).click()

  expect(true).toBeTruthy()
})
