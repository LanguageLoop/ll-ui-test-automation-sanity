const { Given, When, Then, AfterAll } = require('cucumber');
var interpretingPage=require('../pages/InterpretingPage')
var action=require('../utils/actions')

When(/^I select "(.*)" from the filter dropdown$/,   function(listitem){
  action.selectTextFromDropdown(interpretingPage.filterDropdown,listitem)
})

When(/^I click on new job request button$/,function(){
  action.clickElement(interpretingPage.newJobRequestButton)
})

