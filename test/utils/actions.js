var path=require('path')
module.exports={

    enterValue(elt, value)
    {

        elt.waitForExist()
        elt.waitForEnabled()
        elt.waitForClickable()
        elt.click()
        this.clearValue(elt)
        browser.pause(1000)
        elt.setValue(value)
        browser.pause(1000)
    },

    clearValue(elt)
    {
        browser.pause(1000)
        elt.waitForExist()
        elt.waitForEnabled()
        elt.waitForClickable()
        elt.click()
        elt.clearValue()
    },

    enterValueAndPressReturn(elt, value)
    {
        elt.waitForExist()
        elt.waitForEnabled()
        elt.waitForClickable()
        elt.click()
        //this.clearValue(elt)
        browser.pause(1000)
        browser.keys(value)
        browser.pause(1000)
        browser.keys('Enter')
        browser.pause(1000)
    },

    clickElement(elt)
    {
        elt.waitForExist({timeout:5000})
        elt.waitForClickable()
        elt.click() 
    },

    doubleClickElement(elt)
    {
        elt.waitForExist({timeout:5000})
        elt.waitForClickable()
        elt.doubleClick() 
    },

    selectTextFromDropdown(elt,text)
    {
        browser.pause(1000)
        elt.waitForExist()
        elt.waitForEnabled()
        elt.waitForClickable()
        elt.selectByVisibleText(text) 
    },

    elementExists(elt)
    {
       return elt.waitForExist({timeout:6000})
    },

    uploadFile(elt,filepath)
    {
        
        var abs_path=path.resolve(filepath)
        elt.addValue(abs_path)
       // elt.click()
    },

    enterDateAndTime(dateField,timeField,dateValue,timeValue)
    {
        browser.pause(1000)
        this.clearValue(dateField)
        this.enterValueAndPressReturn(dateField,dateValue.toString())  
        browser.pause(1000)
        browser.keys("Tab")
        this.clickElement(timeField)
        browser.pause(1000)
        this.enterValue(timeField,timeValue)
    }

}

