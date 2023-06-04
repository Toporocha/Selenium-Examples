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

jest.setTimeout(60000)

test('search for a video on youtube', async function () {
  await driver.get('https://www.youtube.com/')
  await driver.findElement(By.xpath('//button[. = "Accept all"]')).click()
  //const searchBar = await driver.wait(until.elementLocated(By.name('search_query')), 25000)
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
