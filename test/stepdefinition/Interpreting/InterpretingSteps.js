const { Given, When, Then, AfterAll } = require('cucumber');
var interpretingPage=require('../../pages/Interpreting/InterpretingPage')
var action=require('../../utils/actions')

When(/^I select "(.*)" from the filter dropdown$/,   function(listitem){
  action.selectTextFromDropdown(interpretingPage.filterDropdown,listitem)
  browser.pause(2000)
})

When(/^I click on new job request button$/,function(){
  action.clickElement(interpretingPage.newJobRequestButton)
})

When(/^I select "(.*)" job status$/,function(jobstatus){
  action.selectTextFromDropdown(interpretingPage.jobStatusDropdown,jobstatus)
})

When(/^I click on job id from interpreting job search results$/, function(){
  browser.pause(2000)
  action.clickElement(interpretingPage.jobIdColumnFromSearchResult)
  browser.pause(5000)
})

When(/^I click on first job id from interpreting job list$/, function(){
  browser.pause(2000)
  GlobalData.ACCEPT_BOOKING_JOB_ID = interpretingPage.jobIdColumnFromSearchResult.getText()
  action.clickElement(interpretingPage.jobIdLinkFromSearchResult)
  browser.pause(5000)
})

When(/^I click on first job id from accepted job list$/, function(){
  browser.pause(2000)
  action.doubleClickElement(interpretingPage.jobIdLinkFromSearchResult)
})

When(/^I switch to the job allocation window$/, function(){
  browser.switchWindow('Job Allocation *')
})


When(/^I click on bulk upload button$/, function(){
  action.clickElement(interpretingPage.bulkUploadButton)
  browser.pause(2000)
})

When(/^I search for created job request$/, function(){
  action.clickElement(interpretingPage.searchJobInput)
  action.clearValue(interpretingPage.searchJobInput)
  action.enterValueAndPressReturn(interpretingPage.searchJobInput,GlobalData.EDIT_BOOKING_SEARCH_JOB_ID.toString())
})

When(/^I search for selected job request$/, function(){
  action.clickElement(interpretingPage.searchJobInput)
  action.clearValue(interpretingPage.searchJobInput)
  action.enterValueAndPressReturn(interpretingPage.searchJobInput,GlobalData.ACCEPT_BOOKING_JOB_ID.toString())
})

When(/^I search for job request "(.*)"$/, function(jobid){
  action.clickElement(interpretingPage.searchJobInput)
  action.clearValue(interpretingPage.searchJobInput)
  action.enterValueAndPressReturn(interpretingPage.searchJobInput,jobid)
})

When(/^I enter from date "(.*)"$/, function(fromdate){
  action.clickElement(interpretingPage.fromDateInput)
  action.enterValueAndPressReturn(interpretingPage.fromDateInput,fromdate)
})

When(/^I enter to date "(.*)"$/, function(todate){
  action.clickElement(interpretingPage.toDateInput)
  action.enterValueAndPressReturn(interpretingPage.toDateInput,todate)
})

When(/^I click on the show regional jobs checkbox$/, function(){
  action.clickElement(interpretingPage.regionalJobsCheckbox)
})

When(/^I click accept job button$/, function(){
  action.clickElement(interpretingPage.acceptJobButton)
})

When(/^I click reject job button$/, function(){
  action.clickElement(interpretingPage.rejectJobButton)
})

When(/^I click unavailable job button$/, function(){
  action.clickElement(interpretingPage.unavailableJobButton)
})

When(/^I click return job button$/, function(){
  action.clickElement(interpretingPage.returnJobButton)
})

Then(/^I verify the job table is displayed$/, function(){
  chai.expect(action.elementExists(interpretingPage.jobTable)).to.be.true
})

Then(/^I verify the job is listed in search results$/, function(){
  chai.expect(action.elementExists(interpretingPage.jobIdLinkFromSearchResult)).to.be.true
})
