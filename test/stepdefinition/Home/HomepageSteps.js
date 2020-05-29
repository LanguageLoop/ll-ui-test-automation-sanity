

When(/^I click Interpreting header link$/,   function(){
   action.clickElement(homePage.InterpretingLink)
})

When(/^I click Claims header link$/,   function(){
   action.clickElement(homePage.claimsLink)
   browser.pause(2000)
})

When(/^I click logout button$/, function(){
   action.clickElement(homePage.logoutButton)
})