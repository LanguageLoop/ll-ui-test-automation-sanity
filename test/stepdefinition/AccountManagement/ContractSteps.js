When(/^I search for contract "(.*)"$/, function(title){
    browser.pause(2000)
    action.enterValueAndPressReturn(accountManagementPage.searchContractInput, title)
    browser.pause(2000)
})

When(/^I click the first contract from search list$/, function(){
    browser.pause(2000)
    action.clickElement(accountManagementPage.firstContract)
    browser.pause(2000)
})
When(/^I click add contract link$/, function(){
    browser.pause(2000)
    action.clickElement(accountManagementPage.addContractLink)
    browser.pause(2000)
})

When(/^I enter contract title "(.*)"$/, function(name){
    //make the contract title unique by appending a random number
    name = name + (Math.floor(Math.random() * 100000) + 1).toString()
    GlobalData.CONTRACT_TITLE= name
    action.enterValue(contractManagementPage.contractTitleInput, name)
})

When(/^I enter contract payment terms "(.*)"$/, function(terms){
    action.enterValue(contractManagementPage.paymentTermsInput, terms)
})

When(/^I enter contract number "(.*)"$/, function(number){
    action.enterValue(contractManagementPage.contractNumberInput, number)
})

When(/^I enter contract commencement date "(.*)"$/, function(dateStr){
    var temp_date=dateStr
    if(dateStr=="today")
    {
    temp_date=new Date()
    temp_date=temp_date.getDate()+"-"+(temp_date.getMonth()+1)+"-"+temp_date.getFullYear()
    }
    action.enterValueAndPressReturn(contractManagementPage.contractCommencementDateInput, temp_date)
    browser.pause(2000)
})

When(/^I enter contract completion date "(.*)"$/, function(dateStr){
    action.enterValueAndPressReturn(contractManagementPage.contractCompletionDateInput, dateStr)
    browser.pause(2000)
})

When(/^I upload contract file$/, function(){
    browser.pause(2000)
    action.uploadFile(contractManagementPage.contractFileUploadControl,"./test/data/ContractDocument.docx")
    browser.pause(2000)
})

When(/^I click save contract button$/, function(){
    action.clickElement(contractManagementPage.saveContractButton)
    browser.pause(4000)
})

When(/^I click copy contract button$/, function(){
    action.clickElement(contractManagementPage.copyContractButton)
    browser.pause(2000)
})

When(/^I click add minimum naati level$/, function(){
    browser.pause(2000)
    action.clickElement(contractManagementPage.addNAATIMinimumLevelLink)
    browser.pause(2000)
})

Then(/^I verify the minimum naati is added "(.*)"$/, function(naati){
    //click on the last added item from the override naati section
    var naatiLength= contractManagementPage.naatiMinimumLevelItems.length
    action.clickElement(contractManagementPage.naatiMinimumLevelItems[naatiLength-1])
     browser.pause(3000)
    // verify if the added naati item is present
    var tlength= contractManagementPage.naatiMinimumLevelTables.length
    var temp =contractManagementPage.naatiMinimumLevelTables[tlength-1].$('//td').getText()
    chai.expect(naati.includes(temp)).to.be.true
    browser.pause(3000)
})

Then(/^I delete added miniumum naati$/, function(){
    browser.pause(2000)
    var tlength= contractManagementPage.naatiMinimumLevelTables.length
    console.log("DHAWAN :: "+tlength +" ::: "+contractManagementPage.naatiMinimumLevelTables[tlength-1].$('//tr//label').getAttribute("id"))
    action.clickElement(contractManagementPage.naatiMinimumLevelTables[tlength-1].$('//tr//td[3]'))
    browser.pause(2000)
    action.clickElement(contractManagementPage.naatiMinimumLevelTables[tlength-1].$('//*[contains(text(),"Remove")]'))
    browser.pause(2000)
   
})

Then(/^I verify contract is created$/, function(){
    chai.expect(contractManagementPage.contractHeadingText.getText().toString() == GlobalData.CONTRACT_TITLE.toString()).to.be.true
})

Then(/^I verify duplicate contract is created "(.*)"$/, function(title){
    var current_contract=GlobalData.CONTRACT_TITLE
    //get the number at the end of the title. this number is added randomly during creation to keep it unique
    var res = current_contract.replace(/\D/g, "");
    //add one to the number. because when you duplicate a contract, the title is appended by number and 1 is added to it.
    var temp_number= (parseInt(res)+1)
    chai.expect(contractManagementPage.contractHeadingText.getText().toString() == title+(parseInt(res)+1)).to.be.true
})

