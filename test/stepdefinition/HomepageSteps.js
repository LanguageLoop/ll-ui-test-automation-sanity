const { Given, When, Then, AfterAll } = require('cucumber');
var homePage=require('../pages/HomePage')

When(/^I click Interpreting header link$/,   function(){
   homePage.InterpretingLink.click();  
})