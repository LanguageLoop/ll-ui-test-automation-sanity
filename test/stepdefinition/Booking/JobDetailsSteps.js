const { Given, When, Then, AfterAll } = require('cucumber');
var jobDetailsPage=require('../../pages/Booking/JobDetailsPage')
var action=require('../../utils/actions')

When(/^I click on Duplicate button$/, function(){
    browser.pause(2000)
    action.clickElement(jobDetailsPage.duplicateButton)
})

When(/^I click on Edit button$/, function(){
    browser.pause(2000)
    action.clickElement(jobDetailsPage.editButton)
})

When(/^I set the contractor job status to "(.*)"$/, function(jobstatus){
    browser.pause(5000)
    browser.refresh()
    action.elementExists(jobDetailsPage.contractorListTable)
    action.clickElement(jobDetailsPage.autoNotificationLink)
    action.selectTextFromDropdown(jobDetailsPage.jobContractorStatusDropdown,jobstatus)
})

When(/^I click on accept metro service checkbox$/, function(){
    action.clickElement(jobDetailsPage.acceptMetroServiceCheckBox)
})

Then(/^I verify the assignment type "(.*)" is updated$/,function(assignmenttype){
    chai.expect(jobDetailsPage.assignmentTypeLabel.getText() == assignmenttype).to.be.true
})

Then(/^I verify the NAATI "(.*)" is updated$/,function(naati){
    chai.expect(jobDetailsPage.NAATILabel.getText() == naati).to.be.true
})

Then(/^I verify the gender preference "(.*)" is updated$/,function(gender){
    chai.expect(jobDetailsPage.genderPreferneceLabel.getText() == gender).to.be.true
})