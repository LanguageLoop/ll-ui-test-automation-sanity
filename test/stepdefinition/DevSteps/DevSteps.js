
When(/^I navigate to dev page$/, function(){
    browser.url("https://li-uat.languageloop.com.au/DeveloperScreen/Home.aspx")
})

When(/^I set the job to "(.*)"$/, function(status){
    searchByJobId(GlobalData. CURRENT_JOB_ID)
    browser.pause(2000)
    setJobStatus(status)
    browser.pause(2000)
})


function searchByJobId(jobid)
{
   action.enterValue(devPage.jobIdInput,jobid)
}

function setJobStatus(status)
{
    switch(status)
    {

    case "Complete":
        action.clickElement(devPage.completeJobButton)
        break
    }

}