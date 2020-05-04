
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
        return $('//input[contains(@placeholder,"Search by Job Id")]')
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

    },

    get bulkUploadButton()
    {
        return $('//input[@value="Bulk Upload"]')
    }

}