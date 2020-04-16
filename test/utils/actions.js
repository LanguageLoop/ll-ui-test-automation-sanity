
module.exports={

    enterValue(elt, value)
    {
        elt.waitForExist({timeout:3000})
        elt.waitForEnabled({timeout:3000})
        elt.waitForClickable({timeout:3000})
        elt.click()
        elt.setValue(value)
        browser.pause(1000)
    },

    enterValueAndPressReturn(elt, value)
    {
        elt.waitForExist({timeout:3000})
        elt.waitForEnabled({timeout:3000})
        elt.waitForClickable({timeout:3000})
        elt.click()
        browser.keys(value)
        browser.keys('Enter')
        browser.pause(1000)
    },

    clickElement(elt)
    {
        elt.waitForExist({timeout:3000})
        elt.waitForClickable({timeout:3000})
        elt.click()
    },

    selectTextFromDropdown(elt,text)
    {
        elt.waitForExist({timeout:3000})
        elt.waitForEnabled({timeout:3000})
        elt.waitForClickable({timeout:3000})
        elt.selectByVisibleText(text)
    }
}