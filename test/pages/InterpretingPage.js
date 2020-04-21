
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
        return $('//input[@placeholder="Search by Job Id, campus name, and job address"]')
    },

    get jobStatusDropdown()
    {
        return $('//select[contains(@id,"JobStatus")]')
    },

    get jobIdColumnFromSearchResult()
    {
        return $('//a[@data-loopedin-columnname="JobId"]')
    },

    get jobIdsColumnFromSearchResult()
    {
        return $$('//a[@data-loopedin-columnname="JobId"]')

    }

}