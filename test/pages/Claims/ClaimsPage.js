
module.exports ={
    
    get interviewDateAfter(){
        return $$('//*[contains(@id,"SearchValue") and @placeholder="DD-MM-YYYY"]')[0]
    },

    get interviewDateBefore(){
        return $$('//*[contains(@id,"SearchValue") and @placeholder="DD-MM-YYYY"]')[1]
    },

    get searchJobInput(){
        return (interpretingPage.searchJobInput)
    },

    get campusFeeCell(){
        return $('//*[@data-columnname="CampusFee"]')
    },

    get contractorFeeCell(){
        return $('//*[@data-columnname="ContractorFee"]')
    },

    get searchCriteriaCloseButtons(){
        return $$('//span[contains(@class,"close")]')
    },

    get campusFeeInput(){
        return $('//label[text()="Campus Fee"]/..//input')
    },

    get contractorFeeInput(){
        return $('//label[text()="Contractor Payment"]/..//input')
    },

    get processCampusButton(){
        return $('//input[@value="Process Campus"]')
    },

    get reprocessCampusButton(){
        return $('//input[@value="Reprocess Campus"]')
    },

    get processContractorButton(){
        return $('//input[@value="Process Contractor"]')
    },

    get reprocessContractorButton(){
        return $('//input[@value="Reprocess Contractor"]')
    },

    get processCampusAndContractorButton(){
        return $('//input[@value="Process Campus and Contractor"]')
    },

    get reprocessCampusAndContractorButton(){
        return $('//input[@value="Reprocess Campus and Contractor"]')
    },

    get jobStatusColumn(){
        return $('//*[@data-columnname="JobStatus"]')
    },

    get reprocessConfirmYesButton(){
        return $('//*[text()="Reprocess Campus and Contractor"]/../..//input[@value="Yes"]')
    },

    get reprocessCampusAndContractorConfirmYesButton(){
        return $('//*[text()="Reprocess Campus"]/../..//input[@value="Yes"]')
    }




}