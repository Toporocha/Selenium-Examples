const { Browser, Builder, By, Key, until } = require('selenium-webdriver')
const { expect, test } = require('@jest/globals')

const driver = new Builder()
  .forBrowser(Browser.CHROME)
  .setChromeOptions(/* ... */)
  .build()

driver
  .manage()
  .window()
  .maximize()

jest.setTimeout(100000)
test('search for a video on youtube', async function () {
  await driver.get('https://www.youtube.com/')
  await driver.findElement(By.xpath('//button[. = "Accept all"]')).click()
  //const searchBar =
  await driver.wait(until.elementLocated(By.name('search_query')), 25000)
  //await searchBar.sendKeys('video name', Key.RETURN)

  await driver
    .findElement(By.name('search_query'))
    .sendKeys('selenium', Key.RETURN)

  await driver.wait(
    until.elementLocated(By.css('ytd-video-renderer:nth-child(5) h3'))
  )
  const secondResult = await driver.findElement(
    By.css('ytd-video-renderer:nth-child(5) h3')
  )
  await secondResult.click()

  //the below is for video results
  // const searchResult = await driver.wait(
  //   until.elementLocated(By.css('#video-title')))
  expect(secondResult).toBeDefined()
})

// test('Search a song on Youtube', async function example () {
//   await driver.get('https://www.youtube.com')
//   await driver.findElement(By.xpath('//button[. = "Accept all"]')).click()
//   await driver.wait(until.elementLocated(By.name('search_query')))

//   await driver
//     .findElement(By.name('search_query'))
//     .sendKeys('selenium', Key.RETURN)

//await driver.findElement(By.id('search'))
// await driver.findElement(By.id('button')).click()

// await driver
// .actions()
// .pause(200)
// .click(driver.findElement(By.xpath("//input[@id='search']")))
// .pause(200)
//.sendKeys('selenium')
// .pause(200)
// .sendKeys(Key.ENTER)
//.perform()

//await driver.findElement(By.id('search-input')).sendKeys('selenium webdriver')
//await driver
//.findElement(By.xpath("//input[@id='search']"))
//.sendKeys('selenium webdriver')
// await driver
//  .findElement(webdriver.By.name('q'))
// .sendKeys('webdriver', webdriver.Key.RETURN)
//await driver.wait(webdriver.until.titleIs('webdriver - Google Search'), 1000)

//expect(true).toBeTruthy()
