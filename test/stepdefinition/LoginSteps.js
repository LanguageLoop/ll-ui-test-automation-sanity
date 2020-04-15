var Login = require( '../pages/Login')
const { Given, When, Then, AfterAll } = require('cucumber');


Given(/^the looped in login page is opened$/,  async function(){

   browser.url("https://li-test.languageloop.com.au/LoopedIn_th/Login.aspx")
   browser.maximizeWindow()
   
})


 Then(/^login is successful$/,   function(){

    
 })

 When(/^I login with "(.*)" and "(.*)"$/,   function(username,password){
    Login.usernameInput.setValue(username)
    Login.passwordInput.setValue(password)
    Login.loginButton.click()     
})