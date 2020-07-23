
const baseConfig = require('./wdio.conf').config;
const GlobalData = require("../../data/GlobalData")

const jenkinsconfig = Object.assign(baseConfig, {

    beforeSession: function (config, capabilities, specs) {
       
       GlobalData.BASE_URL="https://li-vltest.languageloop.com.au/LoopedIn_th/Login.aspx"
    }
});

exports.config = jenkinsconfig;



