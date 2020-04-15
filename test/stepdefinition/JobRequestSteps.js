const { Given, When, Then, AfterAll } = require('cucumber');
var jobRequestPage=require('../pages/JobRequestPage')
var chai= require('chai')

When(/^I select "(.*)" from the requester name dropdown$/,   function(listitem){
 // jobRequestPage.requesterNameDropdown.waitForClickable({timeout:3000})
  jobRequestPage.requesterNameDropdown.click() 
  browser.keys(listitem)
  browser.keys('Enter')
  browser.pause(5000) 
 
})

When(/^I select language "(.*)"$/,   function(listitem){
  jobRequestPage.languageDropdown.click()
  browser.keys(listitem)
  browser.keys('Enter')
  browser.pause(5000)
})

When(/^I enter campus pin "(.*)"$/,function(campuspin){
  jobRequestPage.campusPinInput.waitForClickable({timeout:3000})
  jobRequestPage.campusPinInput.setValue(campuspin)
  browser.keys('Enter')
  browser.pause(5000) 

})

When(/^I enter "(.*)" date$/,function(date){
  var temp_date= new Date()
  switch(date)
  {
    case "future":
      temp_date.setDate(temp_date.getDate()+1)
      temp_date=temp_date.getDate()+"-"+(temp_date.getMonth()+1)+"-"+temp_date.getFullYear()
  }

  jobRequestPage.dateInput.setValue(temp_date)

  browser.keys('Enter')
  browser.pause(1000)
  
})

When(/^I enter "(.*)" time$/, function(time){
  jobRequestPage.timeInput.waitForClickable({timeout: 3000})
  jobRequestPage.timeInput.click()
  jobRequestPage.timeInput.setValue(time)
})

When(/^I select assignment type "(.*)"$/, function(assignmenttype){
  jobRequestPage.assignmentTypeDropdown.click()
  browser.keys(assignmenttype)
  browser.keys('Enter')
})

When(/^I enter "(.*)" email address$/,function(email){
  jobRequestPage.confirmEmailInput.click()
  jobRequestPage.confirmEmailInput.setValue(email)
})

When(/^I click save and proceed to summary button$/,function(){
  jobRequestPage.saveAndProceedToSummaryButton.click()
  browser.pause(5000)
})

When(/^I click submit button$/,function(){
  jobRequestPage.submitButton.click()
  browser.pause(5000)
})
When(/^I click next button$/,function(){
  jobRequestPage.nextButton.click()
  browser.pause(5000)
})

Then(/^the job created success message should appear$/, function(){
  chai.expect(jobRequestPage.successMessage.isExisting()).to.be.true
})



