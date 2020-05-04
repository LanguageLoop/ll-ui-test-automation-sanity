const { Given, When, Then, AfterAll } = require('cucumber');
var bulkUploadPage=require('../../pages/Booking/BulkUploadPage')
var action=require('../../utils/actions')
var chai= require('chai')

When(/^I upload bulk booking file$/, function(){
    action.uploadFile(bulkUploadPage.fileUploadControl,"./test/data/Bulk_Upload_Bookings.xlsx")
})

When(/^I click on next link$/, function(){
    action.clickElement(bulkUploadPage.nextLink)
})

When(/^I click on confirm link$/, function(){
    action.clickElement(bulkUploadPage.confirmLink)
})

When(/^Job upload confirmation message is displayed$/, function(){
    action.elementExists(bulkUploadPage.fileUploadConfirmationMessage)
})

When(/^I enter assignment type "(.*)" for the bulk jobs$/, function(assignmenttype){
    var assignment_types=bulkUploadPage.jobAssignmentTypeDropdown
    for(assignment_type of assignment_types)
    {
        browser.pause(1000)
        action.selectTextFromDropdown(assignment_type,assignmenttype)
    }

    browser.pause(5000)
})

Then(/^Bookings created confirmation message is displayed$/, function(){
   chai.expect(action.elementExists(bulkUploadPage.bookingsCreatedConfirmationMessage)).to.be.true
})