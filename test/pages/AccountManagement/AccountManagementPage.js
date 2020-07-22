
module.exports ={

    //*** CAMPUS MANAGEMENT SECTION ******///
    get searchCampusInput()
    {
        return $('//input[contains(@placeholder,"Search by Campus Name")]')
    },

    get firstCampusLink()
    {
        return $('//table[contains(@id,"CampusTable")]//td//a')
    },

    get createCampusLink()
    {
        return $('//a[contains(text(),"Create Campus")]')
    },

    get campusAddressInput()
    {
        return $('//*[text()="Campus Address"]/..//input')
    },

    get address2Input(){
        return $('//*[contains(text(),"Address 2 (Building/Floor/Apartment)")]/..//input')
    },

    get postalAddress2Input(){
        return $('//*[contains(text(),"Postal Address 2 (Building/Floor/Apartment)")]/..//input')
    },

    get postalAddressInput(){
        return $('//*[text()="Postal Address"]/..//input')
    },

    get campusNameInput(){
        return $('//*[text()="Campus Name"]/..//input')
    },

    get campusPostName1Input(){
        return $('//*[text()="Campus Post Name 1"]/..//input')
    },

    get campusPostName2Input(){
        return $('//*[text()="Campus Post Name 2"]/..//input')
    },

    get campusABNInput(){
        return $('//input[contains(@name,"wtCampusABN")]')
    },

    get abnCheckButton(){
        return $('//input[@value="Check"]')
    },

    get companyNameInput(){
        return $('//input[contains(@id,"wtCompanyName")]')
    },

    get PONumberInput(){
        return $('//*[text()="PO Number"]/..//input')
    },

    get campusStatusDropdown(){
        return $('//*[text()="Campus Status"]/..//select')
    },

    get entityTypeDropdown(){
        return $('//*[text()="Entity Type"]/..//select')
    },

    get overrideInvoiceFrequencyDropdown(){
        return $('//*[text()="Override Invoice Frequency"]/..//select')
    },

    get businessTypesDropdown(){
        return $('//*[text()="Business Types"]/..//select')
    },

    get tradingNameInput(){
        return $('//input[contains(@id,"wtTradingName")]')
    },

    get chargeGSTCheckbox(){
        return $('//*[text()="Charge GST"]/..//input')
    },

    get regionalCampusCheckbox(){
        return $('//*[text()="Campus is Regional"]/..//input')
    },

    get selectBillToLink(){
        return $('//a[contains(text(),"Select a default Bill-To")]')
    },

    get saveButton(){
        return $$('//*[contains(@id,"wtdialogCampusForm") and text()="Campus"]/../..//input[@value="Save" and @type="submit"]')[2]
    },

    get duplicateCampusSaveButton()
    {
        return $('//*[text()="Possible Duplication"]/../..//input[@value="Save"]')
    },

    get searchBillToInput(){
        return $('//input[contains(@placeholder,"Search by Bill-To Code,")]')
    },

    get firstBillToTitle(){
        return $('//table[contains(@id,"wtBillingTable")]//td')
    },

    get assignButton(){
        return $('//input[@value="Assign"]')
    },

    //*** CONTRACT MANAGEMENT SECTION ******///

    get searchContractInput(){
        return $('//input[contains(@placeholder,"Search by Contract")]')
    },

    get firstContract(){
        return $('//table[contains(@id,"ContractTable")]//td')
    },

    get addContractLink(){
        return $('//*[contains(text(),"Add contract")]')
    }



}