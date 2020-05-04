
module.exports={

    get browseFilesButton()
    {
        return $('//input[@value="Browse File.."]')
    },

    get fileUploadControl()
    {
        return $$('//input[@type="file"]')[1]
    },

    get nextLink()
    {
        return $('//a[text()="Next"]')
    },

    get confirmLink()
    {
        return $('//a[text()="Confirm"]')
    },

    get fileUploadConfirmationMessage(){
        return $('//*[contains(text(),"Jobs found")]')
    },

    get bookingsCreatedConfirmationMessage(){
        return $('//*[contains(text(),"new bookings were created")]')
    },

    get BulkJobListRows()
    {
        return $$('//table[contains(@id,"BulkJob")]//tbody//tr')
    },

    get jobAssignmentTypeDropdown()
    {
        return $$('//select[contains(@id,"AssignmentType")]')
    }
}