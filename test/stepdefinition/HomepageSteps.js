const { Given, When, Then, AfterAll } = require('cucumber');
var homePage=require('../pages/HomePage')
var action=require('../utils/actions')

When(/^I click Interpreting header link$/,   function(){
   action.clickElement(homePage.InterpretingLink)
})