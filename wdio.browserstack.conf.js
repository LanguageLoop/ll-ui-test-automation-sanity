
const baseConfig = require('./wdio.conf').config;
const browserstackConfig = Object.assign(baseConfig, {
 // Browsersack configuration
//user: 'harishr5',
//key: '86h6ahPMNqeSoFHvkym5',
//host: 'hub.browserstack.com',
/*services: ['appium'],
       appium: {
           args:{
            
            address: '127.0.0.1'
        
           }
        },*/
    

port: 4723,
//host: 'http://0.0.0.0:4723/wd/hub',
path:  '/wd/hub',
capabilities: [{
   
    browserName: 'chrome',
    platformName:'Android',
    deviceName: 'Google Pixel 2 XL',
    platformVersion: '9',
  // automationName: 'UiAutomator2',
   
    
}]
});

exports.config = browserstackConfig;



