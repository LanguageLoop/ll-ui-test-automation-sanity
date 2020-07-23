
const baseConfig = require('./wdio.conf').config;
const GlobalData=require('./test/data/GlobalData')
GlobalData.BASE_URL="https://li-vltst.languageloop.com.au/LoopedIn_th/Login.aspx"

const vltestconfig = Object.assign(baseConfig, {

});

exports.config = vltestconfig;



