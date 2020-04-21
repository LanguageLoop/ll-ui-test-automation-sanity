const { Given, When, Then, AfterAll } = require('cucumber');
var interpretingPage=require('../pages/InterpretingPage')
var action=require('../utils/actions')

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

