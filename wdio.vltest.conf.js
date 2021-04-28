
const baseConfig = require('./wdio.conf').config;
const GlobalData=require('./test/data/GlobalData')
GlobalData.BASE_URL="https://loopedin.languageloop.com.au/LoopedIn_th/Login.aspx"
GlobalData.DEV_URL="https://loopedin.languageloop.com.au/DeveloperScreen/Home.aspx"


const vltestconfig = Object.assign(baseConfig, {

});

exports.config = vltestconfig;



