
When(/^I enter interview date after "(.*)"$/, function(interviewdate){
    action.enterValue(claimsPage.interviewDateAfter, interviewdate)
})

When(/^I enter interview date before$/, function(){
    var temp_date_time=datetime.getScheduleDateTime("long notice","9:30")
    action.enterValue(claimsPage.interviewDateBefore, temp_date_time[0])
})

When(/^I close all special search criteria$/, function(){
    var closebuttons= claimsPage.searchCriteriaCloseButtons
    for(var i=0;i<closebuttons.length;i++){
        browser.pause(2000)
        action.clickElement(closebuttons[i])
        browser.pause(2000)

    }
})

When(/^I click on first job id from claims job list$/, function(){
    browser.pause(2000)
    GlobalData.CURRENT_JOB_ID = interpretingPage.jobIdColumnFromSearchResult.getText()
    action.clickElement(interpretingPage.jobIdColumnFromSearchResult)
    browser.pause(5000)
  })

  When(/^I switch to the claims window$/, function(){
    browser.switchWindow('Claim Details *')
    browser.pause(3000)
  })

When(/^I get the campus fee for first job$/, function(){
    GlobalData.CAMPUS_FEE= claimsPage.campusFeeCell.getText()
})

When(/^I get the contractor fee for first job$/, function(){
    GlobalData.CONTRACTOR_FEE= claimsPage.contractorFeeCell.getText()
})

When(/^I click process campus button$/, function(){
    action.clickElement(claimsPage.processCampusButton)
    browser.pause(2000)
})

When(/^I click reprocess campus button$/, function(){
    action.clickElement(claimsPage.reprocessCampusButton)
    browser.pause(2000)
})

When(/^I click process contractor button$/, function(){
    action.clickElement(claimsPage.processContractorButton)
    browser.pause(2000)
})

When(/^I click reprocess contractor button$/, function(){
    action.clickElement(claimsPage.reprocessContractorButton)
    browser.pause(2000)
})

When(/^I click process campus and contractor button$/, function(){
    action.clickElement(claimsPage.processCampusAndContractorButton)
})

When(/^I click reprocess campus and contractor button$/, function(){
    action.clickElement(claimsPage.reprocessCampusAndContractorButton)
})

When(/^I handle reprocess confirmation$/, function(){
    try{
        claimsPage.reprocessConfirmYesButton.waitForExist({timeout:5000})
        claimsPage.reprocessConfirmYesButton.click()
      
      }
    catch(Err)
       {
        }
})

When(/^I handle reprocess campus and contractor confirmation$/, function(){
    try{
        claimsPage.reprocessCampusAndContractorConfirmYesButton.waitForExist({timeout:5000})
        claimsPage.reprocessCampusAndContractorConfirmYesButton.click()
      
      }
    catch(Err)
       {
        }
})

Then(/^I verify the contractor fee$/, function(){
    console.log("Ronaldo :"+claimsPage.contractorFeeInput.getAttribute("value"))
    console.log("Messi :"+GlobalData.CONTRACTOR_FEE)
    chai.expect(claimsPage.contractorFeeInput.getAttribute("value").replace(" ","")==GlobalData.CONTRACTOR_FEE).to.be.true
})

Then(/^I verify the campus fee$/, function(){
    chai.expect(claimsPage.campusFeeInput.getAttribute("value").replace(" ","")==GlobalData.CAMPUS_FEE).to.be.true
})

Then(/^I verify the job status is "(.*)"$/, function(jobstatus){
    chai.expect(claimsPage.jobStatusColumn.getText()==jobstatus).to.be.true
})