
module.exports = {
    
    get InterpretingLink()
    { return $('//a[text()="Interpreting"]')
    },

    get logoutButton()
    {
        return $('//a[@title="Logout"]')
    },

    get claimsLink(){
        return $('//a[text()="Claims"]')
    }
}
