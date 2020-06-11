
module.exports = {
    
    get InterpretingLink()
    { return $('//a[text()="Interpreting"]')
    },

    get logoutButton()
    {
        return $('//a[@title="Logout"]')
    },

    get accountManagementLink()
    {
        return $('//a[text()="Account Management"]')
    },

    get claimsLink(){
        return $('//a[text()="Claims"]')
    }
}
