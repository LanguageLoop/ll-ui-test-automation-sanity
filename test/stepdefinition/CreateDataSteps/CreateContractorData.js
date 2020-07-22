

When(/^I create 50 contractors$/,{timeout:3600000}, function(){


    var jsonfile= require('../../data/contractors.json')
    var json= JSON.stringify(jsonfile)

    var lang=["VIETNAMESE","ARABIC","AUSLAN","BENGALI","CAMBODIAN","DARI","ENGLISH","FINNISH","MANDARIN","TURKISH"]

    for(var cc=1;cc<3;cc++)
    {
       var mob = "0"+(400000000+(Math.floor(Math.random() * 100000000) + 1)).toString()
        action.clickElement(homePage.contractorEngagementLink)
        browser.pause(2000)

    var first_name = jsonfile.Sheet1[cc]["First Name"]
    var last_name = jsonfile.Sheet1[cc]["Last Name"]
    var gender = jsonfile.Sheet1[cc].Gender
    var country = jsonfile.Sheet1[cc].Nationality
    var telphone_pin = 2321
    var telephone = jsonfile.Sheet1[cc]["Home Phone"]
    var mobile= jsonfile.Sheet1[cc].Mobile
    var email = jsonfile.Sheet1[cc].Email
    var email_pref = jsonfile.Sheet1[cc]["Contractor Accepts Email"]
    var sms_pref = jsonfile.Sheet1[cc]["Contractor Accepts SMS"]
    var dob = jsonfile.Sheet1[cc]["Contractor Date Of Birth"]
    var activation_date= jsonfile.Sheet1[cc]["Contractor Activated"]
    var regional =  jsonfile.Sheet1[cc]["Contractor Is Regional"]
    var gst_registered =  jsonfile.Sheet1[cc]["Contractor GSTRegistered"]
    var address= jsonfile.Sheet1[cc].Address
    var suburb =  jsonfile.Sheet1[cc].Suburb
    var abn = jsonfile.Sheet1[cc]["Contractor ABN"]

    // clearance
    var police_clearance_date= jsonfile.Sheet1[cc]["Contractor Police Clearance Issued"]
    var children_number = jsonfile.Sheet1[cc]["Contractor WWCCard Number"]
    var children_card_type = jsonfile.Sheet1[cc]["Wwc Card Type"]
    var children_date = jsonfile.Sheet1[cc]["Contractor WWCExpiry Date"]
    var children_state = jsonfile.Sheet1[cc]["wwc State"]
    var children_received_date = "01-07-2015"

    // language
    // language
    var from_language= new Array(4)
    var naati_level= new Array(4)
    var expiry_date= new Array(4)
    var naati_number = jsonfile.Sheet1[cc]["Contractor NAATINumber"]
     from_language[0] = jsonfile.Sheet1[cc]["I LANGUAGE 1"]
     naati_level[0] = jsonfile.Sheet1[cc]["I NAATI 1"]
     expiry_date[0] = jsonfile.Sheet1[cc]["I Revalidation Date 1"]
     
     from_language[1]= jsonfile.Sheet1[cc]["I LANGUAGE 2"]
    naati_level[1] = jsonfile.Sheet1[cc]["I NAATI 2"]
    expiry_date[1] = jsonfile.Sheet1[cc]["I Revalidation Date 2"]
    
    from_language[2]= jsonfile.Sheet1[cc]["I LANGUAGE 3"]
     naati_level[2] = jsonfile.Sheet1[cc]["I NAATI 3"]
     expiry_date[2] = jsonfile.Sheet1[cc]["I Revalidation Date 3"]
    
     from_language[3]= jsonfile.Sheet1[cc]["I LANGUAGE 4"]
     naati_level[3] = jsonfile.Sheet1[cc]["I NAATI 4"]
     expiry_date[3] = jsonfile.Sheet1[cc]["I Revalidation Date 4"]

   
    //create contractor //

   // email = email + (Math.floor(Math.random() * 1000000) + 1).toString()
    mob = "0"+(400000000+(Math.floor(Math.random() * 100000000) + 1)).toString()
      
    
    
    action.clickElement(contractorEngagementPage.addContractorLink)
browser.pause(2000)


if(gender=="Male")
{
    action.selectTextFromDropdown(contractorEngagementPage.salutationDropdown,"Mr")
    action.clickElement(contractorEngagementPage.maleRadioButton)

}
else
{
    action.selectTextFromDropdown(contractorEngagementPage.salutationDropdown,"Miss")
    action.clickElement(contractorEngagementPage.femaleRadioButton)
}

action.enterValue(contractorEngagementPage.telephonePinInput,telphone_pin)
action.enterValue(contractorEngagementPage.firstNameInput,first_name)
action.enterValue(contractorEngagementPage.lastNameInput, last_name)
action.enterValue(contractorEngagementPage.mobileInput,mobile)
action.enterValue(contractorEngagementPage.telephoneInput,telephone)
if(country!=="N/A")
{
action.selectTextFromDropdown(contractorEngagementPage.countryOfBirthDropdown,country)}
dob = dob.replace('12:00AM',"")
//console.log("PANT :::::: "+dob)
var temp_dob= new Date(dob)
var month= temp_dob.getMonth()+1
var day= temp_dob.getDate()
var year= temp_dob.getFullYear()
dob= day+'-'+month+'-'+year
//console.log("SAHA "+dob)
action.enterValueAndPressReturn(contractorEngagementPage.dateOfBirthDropdown,dob)



action.enterValue(contractorEngagementPage.emailInput,email)
action.enterLocation(contractorEngagementPage.addressInput,address)
browser.pause(2000)
browser.keys("Enter")

if(email_pref==1)
{
action.clickElement(contractorEngagementPage.emailPreferenceCheckbox)
}
if(sms_pref==1)
{
    action.clickElement(contractorEngagementPage.smsPreferenceCheckbox)
}
action.uploadFile(contractorEngagementPage.workContractFileControl,"./test/data/ContractDocument.docx")

activation_date=activation_date.replace('PM',"")
activation_date=activation_date.replace('AM',"")
activation_date=activation_date.replace(/\//g,'-')
//console.log("MONGIA :::: "+activation_date)
activation_date ="21-07-2020"
//action.clickElement(contractorEngagementPage.activationDateInput)
//browser.pause(3000)
//$('//td[@class="day selected today"]').click()
//browser.pause(1000)
action.enterValueAndPressReturn(contractorEngagementPage.activationDateInput,activation_date)
//action.enterValueAndPressReturn(contractorEngagementPage.activationDateInput," ")
//action.enterValueAndPressReturn(contractorEngagementPage.activationDateInput,"14:30:00")




if(gst_registered=="TRUE")
{
    action.clickElement(contractorEngagementPage.gstRegisteredCheckbox)
}

if(regional==1)
{
    action.clickElement(contractorEngagementPage.regionalCheckbox)
}

action.enterValue(contractorEngagementPage.contractorABNInput,abn)
browser.pause(2000)
action.clickElement(contractorEngagementPage.abnCheckButton)
browser.pause(2000)

action.clickElement(contractorEngagementPage.saveContractorButton)
browser.pause(4000)

// add clearances

if(police_clearance_date!=="N/A")
    {
        action.clickElement(contractorEngagementPage.addClearanceLink)

        browser.pause(2000)
        action.uploadFile(contractorEngagementPage.clearanceFileControl,"./test/data/ContractDocument.docx")
        action.selectTextFromDropdown(contractorEngagementPage.clearanceTypeDropdown,"Police Check")
        action.enterValueAndPressReturn(contractorEngagementPage.policeDateInput,removeTime(police_clearance_date))
        browser.pause(2000)
        action.clickElement(contractorEngagementPage.saveClearanceButton)
        browser.pause(2000)
    }

    if(children_number!=="N/A")
    {
        action.clickElement(contractorEngagementPage.addClearanceLink)

        browser.pause(2000)
        action.uploadFile(contractorEngagementPage.clearanceFileControl,"./test/data/ContractDocument.docx")
        action.selectTextFromDropdown(contractorEngagementPage.clearanceTypeDropdown,"Working With Children")
        action.selectTextFromDropdown(contractorEngagementPage.childrenCardTypeDropdown,children_card_type)
        action.enterValue(contractorEngagementPage.cardNumberInput,children_number)
        children_state=getState(children_state)
        action.selectTextFromDropdown(contractorEngagementPage.stateDropdown,children_state)
        action.enterValueAndPressReturn(contractorEngagementPage.documentReceivedDate,children_received_date)
        action.enterValueAndPressReturn(contractorEngagementPage.documentExpiryDate,removeTime(children_date))
        browser.pause(1000)
        browser.keys('Tab')
        browser.pause(2000)
        action.clickElement(contractorEngagementPage.saveClearanceButton)
        browser.pause(3000)
        
    }

    // Add languages

    for(var i=0;i<4;i++)
    {
        if(from_language[i]=="N/A" || lang.includes(from_language[i])==false)
        {
            break
        }
   
        console.log('I VALUE : '+i+"LANGUAGE : "+from_language[i])

    action.clickElement(contractorEngagementPage.addAccreditationLink)
    
    browser.pause(2000)
    action.selectTextFromDropdown(contractorEngagementPage.serviceDropdown,"Interpreter")
    action.enterValueAndPressReturn(contractorEngagementPage.fromLanguageDropdown,from_language[i])
    action.selectTextFromDropdown(contractorEngagementPage.naatiAccreditationDropdown,naati_level[i])
    if(naati_number!=="N/A")
    {
    action.enterValue(contractorEngagementPage.naatiNumberInput,naati_number)
    action.clickElement(contractorEngagementPage.checkNAATIButton)
    browser.pause(2000)
    }

    action.enterValueAndPressReturn(contractorEngagementPage.dateIssuedInput,"01-01-2018")

    if(expiry_date[i]=="N/A")
    {
        action.enterValueAndPressReturn(contractorEngagementPage.dateOfExpiryInput,"01-01-2023")

    }
    else{
    action.enterValueAndPressReturn(contractorEngagementPage.dateOfExpiryInput, removeTime(expiry_date[i]))
    }
    browser.pause(2000)
    browser.keys('Tab')
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.saveAndCloseButton)

    browser.pause(2000)
    }


    } // End of main for loop

})

When(/^I add clearances$/,function(){

    var jsonfile= require('../../data/contractors.json')

     // language
     var from_language= new Array(4)
     var naati_level= new Array(4)
     var expiry_date= new Array(4)
     var naati_number = jsonfile.Sheet1[0]["Contractor NAATINumber"]
      from_language[0] = jsonfile.Sheet1[0]["I LANGUAGE 1"]
      naati_level[0] = jsonfile.Sheet1[0]["I NAATI 1"]
      expiry_date[0] = jsonfile.Sheet1[0]["I Revalidation Date 1"]
      
      from_language[1]= jsonfile.Sheet1[0]["I LANGUAGE 2"]
     naati_level[1] = jsonfile.Sheet1[0]["I NAATI 2"]
     expiry_date[1] = jsonfile.Sheet1[0]["I Revalidation Date 2"]
     
     from_language[2]= jsonfile.Sheet1[0]["I LANGUAGE 3"]
      naati_level[2] = jsonfile.Sheet1[0]["I NAATI 3"]
      expiry_date[2] = jsonfile.Sheet1[0]["I Revalidation Date 3"]
     
      from_language[3]= jsonfile.Sheet1[0]["I LANGUAGE 4"]
      naati_level[3] = jsonfile.Sheet1[0]["I NAATI 4"]
      expiry_date[3] = jsonfile.Sheet1[0]["I Revalidation Date 4"]

    action.enterValueAndPressReturn(contractorEngagementPage.searchContractorInput, "Automation")
    browser.pause(2000)
    $$('//table[contains(@id,"Contractor")]//td')[1].click()
    browser.pause(2000)

    for(var i=0;i<4;i++)
    {
        if(from_language[i]=="N/A")
        {
            break
        }
   
        console.log('I VALUE : '+i+"LANGUAGE : "+from_language[i])

    action.clickElement(contractorEngagementPage.addAccreditationLink)
    
    browser.pause(2000)
    action.selectTextFromDropdown(contractorEngagementPage.serviceDropdown,"Interpreter")
    action.enterValueAndPressReturn(contractorEngagementPage.fromLanguageDropdown,from_language[i])
    action.selectTextFromDropdown(contractorEngagementPage.naatiAccreditationDropdown,naati_level[i])
    action.enterValue(contractorEngagementPage.naatiNumberInput,naati_number)
    action.clickElement(contractorEngagementPage.checkNAATIButton)

    action.enterValueAndPressReturn(contractorEngagementPage.dateIssuedInput,"01-01-2018")

    if(expiry_date[i]=="N/A")
    {
        action.enterValueAndPressReturn(contractorEngagementPage.dateOfExpiryInput,"01-01-2023")

    }
    else{
    action.enterValueAndPressReturn(contractorEngagementPage.dateOfExpiryInput, removeTime(expiry_date[i]))
    }
    browser.pause(2000)
    browser.keys('Tab')
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.saveAndCloseButton)

    browser.pause(2000)
    }

})



When(/^I add police check$/,function(){

    var jsonfile= require('../../data/contractors.json')

    var police_clearance_date= jsonfile.Sheet1[0]["Contractor Police Clearance Issued"]
    var children_number = jsonfile.Sheet1[0]["Contractor WWCCard Number"]
    var children_card_type = jsonfile.Sheet1[0]["Wwc Card Type"]
    var children_date = jsonfile.Sheet1[0]["Contractor WWCExpiry Date"]
    var children_state = jsonfile.Sheet1[0]["wwc State"]
    var children_received_date = "01-07-2015"

    action.enterValueAndPressReturn(contractorEngagementPage.searchContractorInput, "Automation")
    browser.pause(2000)
    $$('//table[contains(@id,"Contractor")]//td')[1].click()
    browser.pause(2000)

    if(police_clearance_date!=="N/A")
    {
        action.clickElement(contractorEngagementPage.addClearanceLink)

        browser.pause(2000)
        action.uploadFile(contractorEngagementPage.clearanceFileControl,"./test/data/ContractDocument.docx")
        action.selectTextFromDropdown(contractorEngagementPage.clearanceTypeDropdown,"Police Check")
        action.enterValueAndPressReturn(contractorEngagementPage.policeDateInput,removeTime(police_clearance_date))
        browser.pause(2000)
        action.clickElement(contractorEngagementPage.saveClearanceButton)
    }

    if(children_number!=="N/A")
    {
        action.clickElement(contractorEngagementPage.addClearanceLink)

        browser.pause(2000)
        action.uploadFile(contractorEngagementPage.clearanceFileControl,"./test/data/ContractDocument.docx")
        action.selectTextFromDropdown(contractorEngagementPage.clearanceTypeDropdown,"Working With Children")
        action.selectTextFromDropdown(contractorEngagementPage.childrenCardTypeDropdown,children_card_type)
        action.enterValue(contractorEngagementPage.cardNumberInput,children_number)
        children_state=getState(children_state)
        action.selectTextFromDropdown(contractorEngagementPage.stateDropdown,children_state)
        action.enterValueAndPressReturn(contractorEngagementPage.documentReceivedDate,children_received_date)
        action.enterValueAndPressReturn(contractorEngagementPage.documentExpiryDate,removeTime(children_date))
        browser.pause(1000)
        browser.keys('Tab')
        browser.pause(2000)
        action.clickElement(contractorEngagementPage.saveClearanceButton)
        
    }
})

When(/^I want data$/, function(){
    var jsonfile= require('../../data/contractors.json')
    var json= JSON.stringify(jsonfile)

    var lang=["VIETNAMESE","ARABIC","AUSLAN","BENGALI","CAMBODIAN","DARI","ENGLISH","FINNISH","MANDARIN","TURKISH"]

    for(var cc=0;cc<28;cc++)
    {

    var first_name = jsonfile.Sheet1[cc]["First Name"]
    var last_name = jsonfile.Sheet1[cc]["Last Name"]
    var email = jsonfile.Sheet1[cc].Email

    console.log(first_name+","+last_name+","+email)
    }
})



function removeAMDate(amdate)
{
    activation_date=amdate.replace('PM',"")
activation_date=activation_date.replace('AM',"")
activation_date=activation_date.replace(/\//g,'-')
temp_dob=new Date(dob)
    var day= temp_dob.getDate()
    var month= temp_dob.getMonth()+1
    var year = temp_dob.getFullYear()
    temp_dob= day+"-"+month+"-"+year
return temp_dob
}

function removeTime(tempdate)
{
    dob = tempdate.replace('12:00AM',"")
    dob= dob.replace('12:00:00 AM',"")
    dob = dob.replace(/\//g,'-')
    temp_dob=new Date(dob)
    var day= temp_dob.getDate()
    var month= temp_dob.getMonth()+1
    var year = temp_dob.getFullYear()
    temp_dob= day+"-"+month+"-"+year
    return temp_dob
}

function getState(state)
{
    switch(state)
    {
        case "VIC":
            return "Victoria"
        case "NSW":
            return "New South Wales"
        case "WA":
            return "Western Australia"
        case "SA":
            return "South Australia"
        case "NT":
            return "Northern Territory"
        case "ACT":
            return "Australian Capital Territory"
        case "TAS":
            return "Tasmania"
        case "QLD":
            return "Queensland"
    }
}



