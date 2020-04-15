
module.exports = {

    
    get usernameInput()
    { return $('//*[@placeholder=\'Username\']')
    },
        
    get passwordInput()
    { return $('//*[@placeholder=\'Password\']') 
    } ,

    get loginButton()
    {  return $('//*[@type="submit" and @value="Login"]') 
    }

}

