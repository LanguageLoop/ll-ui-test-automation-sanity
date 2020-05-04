const { Given, When, Then, AfterAll } = require('cucumber');
var interpretingPage=require('../../pages/Interpreting/InterpretingPage')
var action=require('../../utils/actions')

When(/^I select "(.*)" from the filter dropdown$/,   function(listitem){
  action.selectTextFromDropdown(interpretingPage.filterDropdown,listitem)
})

When(/^I click on new job request button$/,function(){
  action.clickElement(interpretingPage.newJobRequestButton)
})

When(/^I select "(.*)" job status$/,function(jobstatus){
  action.selectTextFromDropdown(interpretingPage.jobStatusDropdown,jobstatus)
})

When(/^I click on job id from interpreting job search results$/, function(){
  action.clickElement(interpretingPage.jobIdColumnFromSearchResult)
  browser.pause(2000)
  browser.switchWindow('Job Allocation *')
})

When(/^I click on bulk upload button$/, function(){
  action.clickElement(interpretingPage.bulkUploadButton)
  browser.pause(2000)
})

When(/^I search for created job request$/, function(){
  action.clickElement(interpretingPage.searchJobInput)
  action.enterValueAndPressReturn(interpretingPage.searchJobInput,GlobalData.EDIT_BOOKING_SEARCH_JOB_ID.toString())
})

