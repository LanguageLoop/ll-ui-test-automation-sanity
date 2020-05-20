

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
  var temp_date_time = datetime.getScheduleDateTime(dateStr,timeStr)
  action.enterDateAndTime(jobRequestPage.dateInput,jobRequestPage.timeInput,temp_date_time[0],temp_date_time[1])
})

When(/^I enter confirmation date and time$/, function(){
  var temp_date=datetime.getConfirmationDate().toString()
  var temp_time=datetime.getConfirmationTime().toString()
  action.enterDateAndTime(jobRequestPage.confirmationDate,jobRequestPage.confirmationTime,temp_date,temp_time)
})

When(/^I select assignment type "(.*)"$/, function(assignmenttype){
  action.enterValueAndPressReturn(jobRequestPage.assignmentTypeDropdown,assignmenttype)
})

When(/^I select NAATI type "(.*)"$/, function(naati){
  action.selectTextFromDropdown(jobRequestPage.naatiLevelDropdown,naati)
})

When(/^I enter "(.*)" email address$/,function(email){
  jobRequestPage.confirmEmailInput.scrollIntoView()
  browser.pause(2000)
  action.enterValue(jobRequestPage.confirmEmailInput,email)
})

When(/^I click save and proceed to summary button$/,function(){
  action.clickElement(jobRequestPage.saveAndProceedToSummaryButton)
})

When(/^I click submit button$/,function(){
  browser.pause(2000)
  action.clickElement(jobRequestPage.submitButton)
})
When(/^I click next button$/,function(){
  action.clickElement(jobRequestPage.nextButton)
})

When(/^I click on manual reason checkbox$/,function(){
  action.clickElement(jobRequestPage.manualAllocationCheckBox)
})

When(/^I enter manual reason "(.*)"$/,function(manualreason){
  action.enterValue(jobRequestPage.manualAllocationReasonInput,manualreason)
})

When(/^I click gender preference must checkbox$/,function(){
  action.clickElement(jobRequestPage.genderPreferenceCheckBox)
})

When(/^I select gender "(.*)"$/,function(gender){
  action.selectTextFromDropdown(jobRequestPage.genderDropdown,gender)
})

When(/^I click ancestry preference must checkbox$/,function(){
  action.clickElement(jobRequestPage.ancestryPreferenceCheckBox)
})

When(/^I select ancestry "(.*)"$/,function(ancestry){
  browser.pause(1000)
  action.enterValueAndPressReturn(jobRequestPage.ancestryDropdown,ancestry)
  browser.pause(1000)
})

When(/^I click religion preference must checkbox$/,function(){
  action.clickElement(jobRequestPage.religionPreferenceCheckBox)
})

When(/^I select religion "(.*)"$/,function(religion){
  browser.pause(1000)
  action.enterValueAndPressReturn(jobRequestPage.religionDropdown,religion)
  browser.pause(1000)
})

When(/^I click preferred interpreter must checkbox$/,function(){
  action.clickElement(jobRequestPage.preferredInterpreterMustCheckBox)
})

When(/^I click add preferred interpreter button$/,function(){
  action.clickElement(jobRequestPage.addInterpreterLink)
  browser.pause(5000)
})

When(/^I select "(.*)" interpreters from the list$/,function(count){
  var check_boxes=jobRequestPage.interpreterSearchResultsCheckBoxes
  for(i=0;i<count;i++)
  {
    action.clickElement(check_boxes[i])
  }
})

When(/^I click add interpreters button$/,function(){
  action.clickElement(jobRequestPage.addInterpretersButton)
})

When(/^I handle duplicate job warning window$/,function(){
  
  try{
    jobRequestPage.continueButton.waitForExist({timeout:3000})
    action.clickElement(jobRequestPage.continueButton)
  }
  catch(Err)
  {
  }
})

When(/^I click yes to confirm editing job request$/, function(){
  action.clickElement(jobRequestPage.editJobConfirmationYesButton)
})

Then(/^the job created success message should appear$/, function(){
  chai.expect(action.elementExists(jobRequestPage.successMessage)).to.be.true
  jobRequestPage.successMessageText.waitForExist({timeout:3000})
  browser.waitUntil(
      () => jobRequestPage.successMessageText.getText().includes("The Job#"), 20000, 'link not visible'
  );
  var jobNumber = jobRequestPage.successMessageText.getText().match(/\d+/g).map(Number)

  GlobalData.CURRENT_JOB_ID=jobNumber
  /*browser.pause(1000)
console.log("Scenario name :"+scenarioName)
  fs.appendFile(JOB_ID_FILENAME, "Job id : "+jobNumber+" Test : "+scenarioName + "\n", (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
});*/
})

Then(/^I verify the created job id is listed$/, function(){
  browser.pause(2000)
  chai.expect(action.elementExists('//a[text()="'+GlobalData.CURRENT_JOB_ID+'"]')).to.be.true
})



