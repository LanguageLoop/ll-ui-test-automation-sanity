

When(/^I create a new job request with minimal fields "(.*)"$/,  function(notice){
    var temp_date_time=datetime.getScheduleDateTime(notice,"9:30")
  
    
    action.clickElement(homePage.InterpretingLink)
    action.selectTextFromDropdown(interpretingPage.filterDropdown,"Management")
    action.clickElement(interpretingPage.newJobRequestButton)
    action.enterValueAndPressReturn(jobRequestPage.campusPinInput,"33124")
    action.enterValueAndPressReturn(jobRequestPage.requesterNameDropdown,"Automation Tester")
    action.clickElement(jobRequestPage.nextButton)
    action.enterValueAndPressReturn(jobRequestPage.languageDropdown,"ARABIC")
    action.enterValueAndPressReturn(jobRequestPage.assignmentTypeDropdown,"Halfday")
    action.selectTextFromDropdown(jobRequestPage.naatiLevelDropdown, "Certified Interpreter")
    action.enterDateAndTime(jobRequestPage.dateInput,jobRequestPage.timeInput, temp_date_time[0],temp_date_time[1] )
   // var temp_date1=datetime.getConfirmationDate().toString()
     //var temp_time1=datetime.getConfirmationTime().toString()
     //action.enterDateAndTime(jobRequestPage.confirmationDate,jobRequestPage.confirmationTime,temp_date1,temp_time1)
    browser.pause(2000)
    browser.keys('Tab')
    browser.pause(2000)
    action.enterValue(jobRequestPage.confirmEmailInput,"hh@ll.com.au")

    action.clickElement(jobRequestPage.saveAndProceedToSummaryButton)
    browser.pause(2000)

    try{
      jobRequestPage.continueButton.waitForExist({timeout:5000})
      console.log("ROHIT :::::")
jobRequestPage.continueButton.click()
        console.log("SHARMA :::::")

    
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

    GlobalData.CURRENT_JOB_ID=jobNumber

})