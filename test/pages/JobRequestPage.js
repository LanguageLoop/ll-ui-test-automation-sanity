
module.exports={

    get campusPinInput(){
        return $('//input[contains(@class,"campusPin")]')
    },

    get requesterNameDropdown(){
        return $('//*[text()="Requester Name"]/../div/div')
    },
    get languageDropdown(){
        return $('//label[text()="Language"]/../div/div')
    },

    get assignmentTypeDropdown(){
        return $('//label[text()="Assigment Type"]/../div/div')
    },

    get dateInput(){
        return $('//input[@placeholder="DD-MM-YYYY"]')
    },

    get timeInput(){
        return $('//input[@placeholder="HH:mm"]')
    },

    get durationDropdown(){
        return $('//label[text()="Duration"]/..//select')
    },

    get natureOfRequestInput(){
        return $('//label[text()="Nature Of Request"]/..//input')
    },

    get naatiLevelDropdown(){
        return $('//label[text()="NAATI Level"]/..//select')
    },

    get confirmEmailInput(){
        return $('//label[text()="Confirmation Email"]/..//input')
    },

    get saveAndProceedToSummaryButton(){
        return $('//input[@value="Save & Proceed to Summary"]')
    },

    get submitButton(){
        return $('//a[text()="Submit"]')
    },

    get nextButton(){
        return $('//input[@value="Next"]')
    },

     successMessage() { 
        return browser.findElement("xpath",'//*[@class="Feedback_Message_Success"]')
    },

    get requesterNameSearchInput(){
        return $('//input[@class="select2-input" and @role="combobox"][1]')
    }
}