
const baseConfig = require('./wdio.conf').config;
const browserstackConfig = Object.assign(baseConfig, {
 // Browsersack configuration
user: 'harishr5',
key: '86h6ahPMNqeSoFHvkym5',
host: 'hub.browserstack.com',

capabilities: [{
    name: 'LoopedIn Regression',
    build:'Regression',
    'os': 'Windows',
    'os_version': '10',
    'browser': 'Chrome',
    'browser_version': '81.0',
    'resolution':'1920x1080',
    'goog:chromeOptions': {
        args: ['--start-maximized']     
       }
    
}]
});

exports.config = browserstackConfig;



