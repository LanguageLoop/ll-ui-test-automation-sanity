
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
    }

}