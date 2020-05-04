
module.exports={

    get campusPinInput(){
        return $('//input[contains(@id,"CampusPIN")]')
    },

    get requesterNameDropdown(){
        return $('//*[text()="Requester Name"]/..//input/..')
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

    get continueButton(){
        return $('//*[text()="Duplication Job Request"]/../..//input[@value="Continue"]')
    },

    get nextButton(){
        return $('//input[@value="Next"]')
    },

    get successMessage() { 
        return $('//*[@class="Feedback_Message_Success"]')
    },

    get requesterNameSearchInput(){
        return $('//*[text()="Requester Name"]/..//input')
    },

    get manualAllocationCheckBox(){
        return $('//*[contains(text(),"This Job Requires Manual Allocation")]/..//input[@type="checkbox"]')
    },

    get manualAllocationReasonInput(){
        return $('//textarea[@placeholder="Manual Allocation Reason"]')
    },

    get genderPreferenceCheckBox(){
        return $('//*[text()="Gender"]/..//*[text()="Must"]//input')
    },

    get genderDropdown(){
        return $('//*[text()="Gender"]/..//select')
    },

    get ancestryPreferenceCheckBox(){
        return $('//*[text()="Heritage / Ancestry"]/..//*[text()="Must"]//input')
    },

    get ancestryDropdown(){
        return $('//*[text()="Heritage / Ancestry"]/..//div[contains(@class,"select2-container")]')
    },

    get religionPreferenceCheckBox(){
        return $('//*[text()="Religion"]/..//*[text()="Must"]//input')
    },

    get religionDropdown()
    {
        return $('//*[text()="Religion"]/..//div[contains(@class,"select2-container")]')
    },

    get addInterpreterLink(){
        return $('//a[text()="Add Interpreter"]')
    },

    get preferredInterpreterMustCheckBox(){
        return $('//*[text()="Preferred Interpreter"]/..//input[@type="checkbox"]')
    },

    get addExcludedInterpreterLink(){
        return $('//a[text()="Add Excluded Interpreter"]')
    },

    get searchForInterpreterInput(){
        return $('//input[contains(@placeholder,"Search by Interpreter ID")]')
    },

    get addInterpretersButton(){
        return $('//input[@value="Add Interpreter(s)"]')
    },

    get interpreterSearchResultsCheckBox(){
        return $('//*[text()="Find Interpreter"]/../..//table//input')
    },

    get interpreterSearchResultsCheckBoxes(){
        return $$('//*[text()="Find Interpreter"]/../..//table//input')
    },

    get successMessageText(){
        return $('//span[@class="Feedback_Message_Text"]')
    },

    get editJobConfirmationYesButton()
    {
        return $('//input[@value="Yes" and contains(@name,"dialogModal")]')
    },

    get confirmationDate()
    {
        return $('//*[contains(@id,"confirmDate")]')
    },

    get confirmationTime()
    {
        return $('//input[contains(@id,"ConfirmationTime")]/..')
    },


}