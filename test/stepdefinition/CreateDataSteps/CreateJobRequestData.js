const { Given, When, Then, AfterAll } = require('cucumber');
var jobRequestPage=require('../../pages/Booking/JobRequestPage')
var homePage=require('../../pages/Home/HomePage')
var interpretingPage=require('../../pages/Interpreting/InterpretingPage')
var chai= require('chai')
var action=require('../../utils/actions')
var datetime=require('../../utils/datetime')

When(/^I create a new job request with minimal fields$/, function(){
    action.clickElement(homePage.InterpretingLink)
    action.selectTextFromDropdown(interpretingPage.filterDropdown,"Management")
    action.clickElement(interpretingPage.newJobRequestButton)
    action.enterValueAndPressReturn(jobRequestPage.campusPinInput,"33124")
    action.enterValueAndPressReturn(jobRequestPage.requesterNameDropdown,"Automation Tester")
    action.clickElement(jobRequestPage.nextButton)
    action.enterValueAndPressReturn(jobRequestPage.languageDropdown,"ARABIC")
    action.enterValueAndPressReturn(jobRequestPage.assignmentTypeDropdown,"Interview-Halfday")
    action.enterValueAndPressReturn(jobRequestPage.dateInput,datetime.getLongNoticeDate().toString())  
    browser.pause(1000)
    action.enterValue(jobRequestPage.timeInput,"09:30")
    action.enterValue(jobRequestPage.confirmEmailInput,"hh@ll.com.au")
    action.clickElement(jobRequestPage.saveAndProceedToSummaryButton)
    
    try{
        jobRequestPage.continueButton.waitForExist({timeout:3000})
        action.clickElement(jobRequestPage.continueButton)
      }
   catch(Err)
      {
      }

    browser.pause(2000)
    action.clickElement(jobRequestPage.submitButton)
    jobRequestPage.successMessageText.waitForExist({timeout:3000})
    browser.waitUntil(
        () => jobRequestPage.successMessageText.getText().includes("The Job#"), 20000, 'link not visible'
    );
    var jobNumber = jobRequestPage.successMessageText.getText().match(/\d+/g).map(Number)

    GlobalData.EDIT_BOOKING_SEARCH_JOB_ID=jobNumber

})