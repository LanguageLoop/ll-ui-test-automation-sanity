

When(/^I click Interpreting header link$/,   function(){
   action.clickElement(homePage.InterpretingLink)
})

When(/^I click Claims header link$/,   function(){
   action.clickElement(homePage.claimsLink)
   browser.pause(2000)
})

When(/^I click account management link$/, function(){
   action.clickElement(homePage.accountManagementLink)
   browser.pause(2000)
})

When(/^I click logout button$/, function(){
   action.clickElement(homePage.logoutButton)
})

When(/^I click contractor engagement link$/, function(){
   action.clickElement(homePage.contractorEngagementLink)
   browser.pause(2000)
})