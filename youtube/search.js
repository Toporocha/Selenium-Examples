const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

(async function example() {
  let driver = new webdriver.Builder()
    .forBrowser(webdriver.Browser.CHROME)
    .setChromeOptions(/* ... */)
    .build();

  try {
    await driver.get("https://www.youtube.com");
    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
  } finally {
    setTimeout(() => driver.quit(), 5000);
  }
})();
