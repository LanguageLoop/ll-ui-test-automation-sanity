
When(/^I search for campus "(.*)"$/, function(campus){
    action.enterValueAndPressReturn(accountManagementPage.searchCampusInput,campus)
    browser.pause(2000)
})

When(/^I click the first campus link from search results$/,function(){
    browser.pause(2000)
    action.clickElement(accountManagementPage.firstCampusLink)
    browser.pause(4000)
})