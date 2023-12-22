const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

jest.setTimeout(30000);

describe('Phonebook coursework test', () => {
  let driver
  let vars

  beforeEach(async () => {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Phonebook coursework test', async () => {
    // Test name: Phonebook coursework test
    // Step # | name | target | value
    // 1 | open | /phonebook | 
    await driver.get("https://victoriia-ripka.github.io/phonebook")
    // 2 | setWindowSize | 1528x1040 | 
    await driver.manage().window().setRect({ width: 1528, height: 1040 })
    // 3 | click | css=.MuiBox-root:nth-child(2) > .MuiButtonBase-root:nth-child(1) | 
    await driver.findElement(By.css(".MuiBox-root:nth-child(2) > .MuiButtonBase-root:nth-child(1)")).click()
    // 4 | click | id=outlined-name-required | 
    await driver.findElement(By.id("outlined-name-required")).click()
    // 5 | type | id=outlined-name-required | vika
    await driver.findElement(By.id("outlined-name-required")).sendKeys("vika")
    // 6 | click | id=outlined-email-required | 
    await driver.findElement(By.id("outlined-email-required")).click()
    // 7 | type | id=outlined-email-required | vikastudent@gmail.com
    await driver.findElement(By.id("outlined-email-required")).sendKeys("vikastudent@gmail.com")
    // 8 | click | id=outlined-password-input | 
    await driver.findElement(By.id("outlined-password-input")).click()
    // 9 | mouseOver | css=.MuiButton-outlined | 
    {
      const element = await driver.findElement(By.css(".MuiButton-outlined"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 10 | type | id=outlined-password-input | vikavika
    await driver.findElement(By.id("outlined-password-input")).sendKeys("vikavika")
    // 11 | click | css=.MuiButton-outlined | 
    await driver.findElement(By.css(".MuiButton-outlined")).click()
    // 12 | click | id=outlined-required | 
    await driver.findElement(By.id("outlined-required")).click()
    // 13 | type | id=outlined-required | mama
    await driver.findElement(By.id("outlined-required")).sendKeys("mama")
    // 14 | click | id=outlined-number-required | 
    await driver.findElement(By.id("outlined-number-required")).click()
    // 15 | type | id=outlined-number-required | 1234567890
    await driver.findElement(By.id("outlined-number-required")).sendKeys("1234567890")
    // 16 | mouseOver | css=.css-1rwt2y5-MuiButtonBase-root-MuiButton-root | 
    {
      const element = await driver.findElement(By.css(".css-1rwt2y5-MuiButtonBase-root-MuiButton-root"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 17 | click | css=.css-1rwt2y5-MuiButtonBase-root-MuiButton-root | 
    await driver.findElement(By.css(".css-1rwt2y5-MuiButtonBase-root-MuiButton-root")).click()
    // 18 | mouseOut | css=.MuiGrid-spacing-xs-3 .MuiButtonBase-root | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    // 19 | click | id=outlined-required | 
    await driver.findElement(By.id("outlined-required")).click()
    // 20 | type | id=outlined-required | Joe Doe
    await driver.findElement(By.id("outlined-required")).sendKeys("Joe Doe")
    // 21 | click | id=outlined-number-required | 
    await driver.findElement(By.id("outlined-number-required")).click()
    // 22 | type | id=outlined-number-required | 1234567890
    await driver.findElement(By.id("outlined-number-required")).sendKeys("1234567890")
    // 23 | mouseOver | css=.MuiGrid-spacing-xs-3 .MuiButtonBase-root | 
    {
      const element = await driver.findElement(By.css(".MuiGrid-spacing-xs-3 .MuiButtonBase-root"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 24 | click | css=.MuiGrid-spacing-xs-3 .MuiButtonBase-root | 
    await driver.findElement(By.css(".MuiGrid-spacing-xs-3 .MuiButtonBase-root")).click()
    // 25 | mouseOut | css=.MuiGrid-spacing-xs-3 .MuiButtonBase-root | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    // 26 | click | id=outlined-required | 
    await driver.findElement(By.id("outlined-required")).click()
    // 27 | type | id=outlined-required | dad
    await driver.findElement(By.id("outlined-required")).sendKeys("dad")
    // 28 | click | id=outlined-number-required | 
    await driver.findElement(By.id("outlined-number-required")).click()
    // 29 | type | id=outlined-number-required | 1234567890
    await driver.findElement(By.id("outlined-number-required")).sendKeys("1234567890")
    // 30 | click | css=.MuiGrid-spacing-xs-3 .MuiButtonBase-root | 
    await driver.findElement(By.css(".MuiGrid-spacing-xs-3 .MuiButtonBase-root")).click()
    // 31 | click | name=filter | 
    await driver.findElement(By.name("filter")).click()
    // 32 | type | name=filter | mama
    await driver.findElement(By.name("filter")).sendKeys("mama")
    // 33 | sendKeys | name=filter | ${KEY_ENTER}
    await driver.findElement(By.name("filter")).sendKeys(Key.ENTER)
    // 34 | mouseOver | css=.MuiButton-text:nth-child(1) | 
    {
      const element = await driver.findElement(By.css(".MuiButton-text:nth-child(1)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 35 | click | css=.MuiButton-text:nth-child(1) | 
    await driver.findElement(By.css(".MuiButton-text:nth-child(1)")).click()
    // 36 | mouseOut | css=.active | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    // 37 | click | css=.MuiButton-text:nth-child(2) | 
    await driver.findElement(By.css(".MuiButton-text:nth-child(2)")).click()
    // 38 | mouseOver | css=.MuiButton-text:nth-child(2) | 
    {
      const element = await driver.findElement(By.css(".MuiButton-text:nth-child(2)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 39 | mouseOut | css=.active | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    // 40 | click | name=filter | 
    await driver.findElement(By.name("filter")).click()
    // 41 | click | css=.MuiListItem-root:nth-child(2) > .MuiGrid-root > .MuiButtonBase-root | 
    await driver.findElement(By.css(".MuiListItem-root:nth-child(2) > .MuiGrid-root > .MuiButtonBase-root")).click()
    // 42 | click | css=.MuiBackdrop-root | 
    await driver.findElement(By.css(".MuiBackdrop-root")).click()
    // 43 | click | css=.MuiListItem-root:nth-child(2) > .MuiGrid-root > .MuiGrid-root > .MuiButtonBase-root:nth-child(2) | 
    await driver.findElement(By.css(".MuiListItem-root:nth-child(2) > .MuiGrid-root > .MuiGrid-root > .MuiButtonBase-root:nth-child(2)")).click()
    // 44 | click | css=section:nth-child(2) | 
    await driver.findElement(By.css("section:nth-child(2)")).click()
  })
})
