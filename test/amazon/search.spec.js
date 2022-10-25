const { Browser, Builder, By } = require('selenium-webdriver')

// Feature: Search
// Search Iphone14

// Scenario: Search iphone14 on amazon.com
// Given I am on https://www.amazon.com/
// When I click on the area (field) search box
// And I type "Iphone14"
// And I submit the button "search"
// Then the result should be a list of more than 2000 items related with "Iphone14"

;(async function example () {
  const driver = new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(/* ... */)
    .build()

  try {
    await driver.get('https://www.amazon.com/')
    await driver.findElement(By.id('twotabsearchtextbox')).sendKeys('iphone14')
    await driver.findElement(By.id('nav-search-submit-button')).click()
  } catch (e) {
  } finally {
    setTimeout(() => driver.quit(), 5000)
  }
})()
