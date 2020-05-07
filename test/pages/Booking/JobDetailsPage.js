
module.exports = {

    get duplicateButton()
    {
        return $('//*[contains(@id,"wtbtnDuplicate")]')
    },

    get editButton()
    {
        return $('//input[@value="Edit"]')
    },

    get editConfirmationMessage()
    {
        return $('//*[contains(text(),"Job Detail was successfully saved")]')
    },

    get confirmationYesButton()
    {
        return $('//input[@value="Yes"]')
    },

    get jobIdLabel()
    {
        return $('//*[contains(text(),"Job ID #")]')
    },

    get contractorListTable()
    {
        return $('//*[@class="ContractorTable"]')
    },

    get autoNotificationLink()
    {
        return $('//a[text()="Auto Notification"]')
    },

    get jobContractorStatusDropdown()
    {
        return $('//select[contains(@id,"JobContractorStatus")]')
    },

    get assignmentTypeLabel()
    {
        return $('//label[text()="Assignment Type"]/../following-sibling::div')
    },

    get NAATILabel()
    {
        return $('//label[text()="NAATI Level"]/following-sibling::*')
    },
    
    get genderPreferneceLabel()
    {
        return $('//*[text()="Gender Preference"]/../following-sibling::*')
    },

    get acceptMetroServiceCheckBox()
    {
        return $('//*[text()="Accept Metro Service"]/..//input')
    }

}