
module.exports = {
    
    get contractTitleInput(){
        return $('//input[contains(@id,"Contract_Title")]')
    },

    get contractNumberInput(){
        return $('//input[contains(@id,"Contract_Number")]')
    },

    get paymentTermsInput(){
        return $('//textarea[contains(@id,"PaymentTerms")]')
    },

    get contractCommencementDateInput(){
        return $('//input[contains(@id,"Contract_CommencementDate")]')
    },

    get contractCompletionDateInput(){
        return $('//input[contains(@id,"Contract_CompletionDate")]')
    },

    get contractExtensionDateInput(){
        return $('//input[contains(@id,"Contract_ExtensionDate")]')
    },

    get paymentFrequencyDropdown(){
        return $('//select[contains(@id,"PaymentFrequency")]')
    },

    get invoiceFrequencyDropdown(){
        return $('//select[contains(@id,"Contract_InvoiceFrequency")]')
    },

    get contractFileUploadControl(){
        return $('//*[text()="Manage Contract"]/../..//*[@type="file"]')
    },

    get saveContractButton(){
        return $('//*[text()="Manage Contract"]/../..//input[@value="Save"]')
    },

    get contractHeadingText(){
        return $('//div[contains(@id,"ContractTitle")]//span')
    },

    get copyContractButton(){
        return $('//div[@title="copy contract"]')
    },

    get addNAATIMinimumLevelLink(){
        return $('//*[contains(text(),"Add minimum NAATI level")]')
    },

    get naatiMinimumLevelItems(){
        return $$('//*[text()="Minimum NAATI Levels"]/../../../..//*[contains(@class,"AccordionVertical___title")]')
    },

    get naatiMinimumLevelTables(){
        return $$('//*[contains(text(),"NAATI Levels")]/../../..//table[contains(@id,"ServiceLanguageTable")]')
    },

}