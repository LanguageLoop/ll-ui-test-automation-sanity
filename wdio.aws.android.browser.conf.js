const baseConfig = require('./wdio.conf').config;
const awsAndroidStackConfig = Object.assign(baseConfig, {
 // aws configuration

/*services:[ [
    'appium',
    {
    // For options see
    // https://github.com/webdriverio/webdriverio/tree/master/packages/wdiowdio-appium-service
        args: {
        // For arguments see
        // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
        },
        command: 'appium',
    },
],
],*/
port: 4723,
baseUrl: 'http://www.google.com.au',

capabilities: [{
    // The defaults you need to have in your config
   // platformName: 'Android',
    //browserName: 'chrome',
    maxInstances: 1,
    // For W3C the appium capabilities need to have an extension prefix
    // http://appium.io/docs/en/writing-running-appium/caps/
    // This is `appium:` for all Appium Capabilities which can be found here
    //'appium:deviceName': 'Google Pixel 2',
    //'appium:platformVersion': '8.0',
    //'appium:orientation': 'PORTRAIT',
    // `automationName` will be mandatory, see
    // https://github.com/appium/appium/releases/tag/v1.13.0
    //'appium:automationName': 'UiAutomator2',
    //'appium:newCommandTimeout': 240,
    //'goog:chromeOptions': {
      //  w3c: true,
        // Add this option to prevent the annoying "Welcome"-message
        //args: ['--no-first-run'],
   // },
    
}]

});

exports.config = awsAndroidStackConfig;