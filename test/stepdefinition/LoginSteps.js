var Login = require( '../pages/Login')
const { Given, When, Then, AfterAll } = require('cucumber');
var action=require('../utils/actions')


Given(/^the looped in login page is opened$/,  function(){
   browser.maximizeWindow()
   browser.url("https://li-test.languageloop.com.au/LoopedIn_th/Login.aspx")
   
})


 Then(/^login is successful$/,   function(){

    
 })

 When(/^I login with "(.*)" and "(.*)"$/,   function(username,password){
    action.enterValue(Login.usernameInput,username)
    action.enterValue(Login.passwordInput,password)
    action.clickElement(Login.loginButton)     
})