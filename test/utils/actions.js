var path=require('path')
module.exports={

    enterValue(elt, value)
    {

        elt.waitForExist()
        elt.waitForEnabled()
        elt.waitForClickable()
        elt.click()
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
    },

    uploadFile(elt,filepath)
    {
        
        var abs_path=path.resolve(filepath)
        elt.addValue(abs_path)
       // elt.click()
    },

    enterDateAndTime(dateField,timeField,dateValue,timeValue)
    {
        this.clearValue(dateField)
        this.enterValueAndPressReturn(dateField,dateValue.toString())  
        browser.pause(1000)
        //browser.keys("Tab")
        this.clickElement(timeField)
        browser.pause(1000)
        this.enterValue(timeField,timeValue)
    }

}

