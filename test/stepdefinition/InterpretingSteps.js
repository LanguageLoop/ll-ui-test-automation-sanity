const { Given, When, Then, AfterAll } = require('cucumber');
var interpretingPage=require('../pages/InterpretingPage')

When(/^I select "(.*)" from the filter dropdown$/,   function(listitem){
  interpretingPage.filterDropdown.selectByVisibleText(listitem) 
 // browser.pause(5000) 
 
})

When(/^I click on new job request button$/,function(){

    interpretingPage.newJobRequestButton.waitForClickable({ timeout: 3000 })
    interpretingPage.newJobRequestButton.click()
})

