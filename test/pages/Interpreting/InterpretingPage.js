
module.exports={
    get filterDropdown()
    {
        return $('//select[@class="BorderlessShadowlessDropdown"]');

    },

    get newJobRequestButton()
    {
        return $('//input[@value="Start New Job Request"]');
    },

    get searchJobInput()
    {
        return $('//input[contains(@placeholder,"Search by")]')
    },

    get jobStatusDropdown()
    {
        return $('//select[contains(@id,"JobStatus")]')
    },

    get jobIdColumnFromSearchResult()
    {
        return $('//*[@data-loopedin-columnname="JobId" or @data-divname="JobIdCol" or @data-columnname="JobId"]')
    },

    get jobIdsColumnFromSearchResult()
    {
        return $$('//*[@data-loopedin-columnname="JobId" or @data-divname="JobIdCol"]')

    },

    get jobIdLinkFromSearchResult()
    {
        return $('//a[text()="'+GlobalData.CURRENT_JOB_ID+'"]')
    },

    get jobSummaryLink()
    {
        return $('//a[@class="GoToSummary"]/..')
    },

    get bulkUploadButton()
    {
        return $('//input[@value="Bulk Upload"]')
    },

    get fromDateInput()
    {
        return $('//input[contains(@id,"EarliestStart")]')
    },

    get toDateInput()
    {
        return $('//input[contains(@id,"EarliestStart2")]')
    },

    get regionalJobsCheckbox()
    {
        return $('//*[contains(text(),"Show Regional Jobs")]//input')
    },

    get jobTable()
    {
        return $('//table[contains(@id,"JobTable")]')
    },

    get acceptJobButton()
    {
        return $('//a[@class="Accept"]')
    },

    get rejectJobButton()
    {
        return $('//a[@class="Reject"]')
    },

    get unavailableJobButton()
    {
        return $('//a[@class="Unavailable"]')
    },

    get returnJobButton()
    {
        return $('//*[text()="Return this job"]')
    }

}