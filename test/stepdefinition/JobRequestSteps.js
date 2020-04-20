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

When(/^I enter schedule "(.*)" and "(.*)"$/,function(dateStr,timeStr){
  var temp_date= new Date()
  var temp_time=timeStr
  switch(dateStr)
  {
    case "long notice":
      console.log("RAHANE :Long")
      temp_date.setDate(temp_date.getDate()+5)
      break
    case "short notice":
      console.log("RAHANE :Short")
      temp_date.setHours(temp_date.getHours() + 23)
      temp_time=temp_date.getHours()+":"+temp_date.getMinutes()
      break
  }

  temp_date=temp_date.getDate()+"-"+(temp_date.getMonth()+1)+"-"+temp_date.getFullYear()
  action.enterValueAndPressReturn(jobRequestPage.dateInput,temp_date)  
  browser.pause(1000)
  action.enterValue(jobRequestPage.timeInput,temp_time)
})

When(/^I enter "(.*)" time$/, function(timeStr){
  var temp_date= new Date()
  switch(timeStr)
  {
    case "short notice":
      console.log("RAHANE :Short time")
      temp_date.setHours(temp_date.getHours() + 23)
      break

    default:
      console.log("RAHANE :detault time")
      temp_date=timeStr  
  }

  action.enterValue(jobRequestPage.timeInput,temp_date)
  browser.pause(1000)
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
  chai.expect(action.elementExists(jobRequestPage.successMessage)).to.be.true
})



