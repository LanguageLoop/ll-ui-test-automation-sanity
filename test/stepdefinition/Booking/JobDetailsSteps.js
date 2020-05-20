
When(/^I click on Duplicate button$/, function(){
    browser.pause(2000)
    action.clickElement(jobDetailsPage.duplicateButton)
})

When(/^I click on Edit button$/, function(){
    browser.pause(2000)
    action.clickElement(jobDetailsPage.editButton)
})

When(/^I click on Cancel button$/, function(){
    browser.pause(2000)
    browser.refresh()
    action.clickElement(jobDetailsPage.cancelButton)
})

When(/^I click confirm cancel yes button$/, function(){
    action.clickElement(jobDetailsPage.confirmCancelYesButton)
})

When(/^I select "(.*)" cancel reason$/, function(reason){
    browser.pause(2000)
    action.selectTextFromDropdown(jobDetailsPage.cancelReasonDropdown, reason)
})

When(/^I select "(.*)" on behalf$/, function(onbehalf){
    browser.pause(2000)
    action.selectTextFromDropdown(jobDetailsPage.cancelOnBehalfDropdown, onbehalf)
})

When(/^I submit cancel job confirmation$/, function(){
    action.clickElement(jobDetailsPage.cancelSubmitButton)
})

When(/^I confirm yes to cancellation fee$/, function(){
    action.clickElement(jobDetailsPage.jobCancellationFeeConfirmYesButton)
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

Then(/^I confirm the job is cancelled without fee$/,function(){
    chai.expect(action.elementExists(jobDetailsPage.jobCancelledWithoutFeeMessage)).to.be.true
})

Then(/^I confirm the job is cancelled with fee$/,function(){
    chai.expect(action.elementExists(jobDetailsPage.jobCancelledWithFeeMessage)).to.be.true
})