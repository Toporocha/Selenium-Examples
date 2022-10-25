const webdriver = require('selenium-webdriver')

;(async function example () {
  const driver = new webdriver.Builder()
    .forBrowser(webdriver.Browser.CHROME)
    .setChromeOptions(/* ... */)
    .build()

  try {
    await driver.get('https://www.youtube.com')
    await driver
      .findElement(webdriver.By.name('q'))
      .sendKeys('webdriver', webdriver.Key.RETURN)
    await driver.wait(
      webdriver.until.titleIs('webdriver - Google Search'),
      1000
    )
  } finally {
    setTimeout(() => driver.quit(), 5000)
  }
})()
