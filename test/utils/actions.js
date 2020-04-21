
module.exports={

    enterValue(elt, value)
    {

        elt.waitForExist()
        elt.waitForEnabled()
        elt.waitForClickable()
        elt.click()
        elt.setValue(value)
        browser.pause(1000)
    },

    enterValueAndPressReturn(elt, value)
    {
        elt.waitForExist()
        elt.waitForEnabled()
        elt.waitForClickable()
        elt.click()
        browser.keys(value)
        browser.pause(1000)
        browser.keys('Enter')
        browser.pause(1000)
    },

    clickElement(elt)
    {
        elt.waitForExist()
        elt.waitForClickable()
        elt.click() 
    },

    selectTextFromDropdown(elt,text)
    {
        elt.waitForExist()
        elt.waitForEnabled()
        elt.waitForClickable()
        elt.selectByVisibleText(text) 
    },

    elementExists(elt)
    {
       return elt.waitForExist()
    }


}

