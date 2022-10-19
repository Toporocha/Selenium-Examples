const { Browser, Builder, By } = require('selenium-webdriver')

;(async function example () {
  const driver = new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(/* ... */)
    .build()

  try {
    await driver.get('https://www.amazon.com/')
    await driver.findElement(By.id('twotabsearchtextbox')).sendKeys('iphone')
    await driver.findElement(By.id('nav-search-submit-button')).click()
  } finally {
    setTimeout(() => driver.quit(), 5000)
  }
})()
