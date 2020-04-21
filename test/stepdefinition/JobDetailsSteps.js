const { Given, When, Then, AfterAll } = require('cucumber');
var jobDetailsPage=require('../pages/JobDetailsPage')
var action=require('../utils/actions')

When(/^I click on Duplicate button$/,function(){
    browser.pause(2000)
    action.clickElement(jobDetailsPage.duplicateButton)
})