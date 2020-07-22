


Given(/^the looped in login page is opened$/,  function(){
   browser.reloadSession()
   browser.url("https://li-vltst.languageloop.com.au/LoopedIn_th/Login.aspx")
})


 Then(/^login is successful$/,   function(){

    
 })

 When(/^I login with "(.*)" and "(.*)"$/,   function(username,password){
    action.enterValue(Login.usernameInput,username)
    action.enterValue(Login.passwordInput,password)
    action.clickElement(Login.loginButton)     
})