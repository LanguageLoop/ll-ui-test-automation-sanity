
When(/^I search for campus "(.*)"$/, function(campus){
    action.enterValueAndPressReturn(accountManagementPage.searchCampusInput,campus)
    browser.pause(2000)
})

When(/^I click the first campus link from search results$/,function(){
    browser.pause(2000)
    action.clickElement(accountManagementPage.firstCampusLink)
    browser.pause(4000)
})

When(/^I search for contract title "(.*)"$/, function(contract){
    browser.pause(4000)
    action.enterValueAndPressReturn(accountManagementPage.searchContractInput,contract)
    browser.pause(2000)
})

When(/^I click the first contract link from search results$/,function(){
    browser.pause(4000)
    action.clickElement(accountManagementPage.firstContract)
    browser.pause(4000)
})