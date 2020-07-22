
module.exports ={

    get jobIdInput(){
        return $('//input[@placeholder="Search by Job ID"]')
    },

    get completeJobButton(){
        return $('//input[@value="Set Job to Complete"]')
    }
}