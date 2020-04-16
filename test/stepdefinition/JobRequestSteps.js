const { Given, When, Then, AfterAll } = require('cucumber');
var jobRequestPage=require('../pages/JobRequestPage')
var chai= require('chai')
var action=require('../utils/actions')

When(/^I select "(.*)" from the requester name dropdown$/,   function(listitem){
 action.enterValueAndPressReturn(jobRequestPage.requesterNameDropdown,listitem)
})

When(/^I select language "(.*)"$/,   function(listitem){
  action.enterValueAndPressReturn(jobRequestPage.languageDropdown,listitem)
})

When(/^I enter campus pin "(.*)"$/,function(campuspin){
  action.enterValueAndPressReturn(jobRequestPage.campusPinInput,campuspin)
})

When(/^I enter "(.*)" date$/,function(date){
  var temp_date= new Date()
  switch(date)
  {
    case "future":
      temp_date.setDate(temp_date.getDate()+1)
      temp_date=temp_date.getDate()+"-"+(temp_date.getMonth()+1)+"-"+temp_date.getFullYear()
  }

  action.enterValueAndPressReturn(jobRequestPage.dateInput,temp_date)  
})

When(/^I enter "(.*)" time$/, function(time){
  action.enterValue(jobRequestPage.timeInput,time)
})

When(/^I select assignment type "(.*)"$/, function(assignmenttype){
  action.enterValueAndPressReturn(jobRequestPage.assignmentTypeDropdown,assignmenttype)
})

When(/^I enter "(.*)" email address$/,function(email){
  action.enterValue(jobRequestPage.confirmEmailInput,email)
})

When(/^I click save and proceed to summary button$/,function(){
  action.clickElement(jobRequestPage.saveAndProceedToSummaryButton)
})

When(/^I click submit button$/,function(){
  action.clickElement(jobRequestPage.submitButton)
})
When(/^I click next button$/,function(){
  action.clickElement(jobRequestPage.nextButton)
})

Then(/^the job created success message should appear$/, function(){
  chai.expect(jobRequestPage.successMessage.waitForExist({timeout:10000})).to.be.true
})



