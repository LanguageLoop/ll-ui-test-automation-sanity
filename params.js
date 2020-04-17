// This file is used to process the commandline parameter and assign them to variables.

module.exports =
{
   tags:gettags()  //extracting the tag parameter from the commandline
}

function gettags()
{
    var temp_tags=process.argv.slice();
    if(temp_tags.length>2)
    {
        return temp_tags[3].split("=")[1]
    }
    
}