# ll-ui-test-automation

## Pre requisites:

1) Nodejs 12.x.x
2) Webdriverio
3) Chrome
4) Firefox
5) Cucumber
6) Visual Studio Code (IDE)

## Setup steps:

### Nodejs Setup :

1) download and install Nodejs 12.x.x from this url https://nodejs.org/en/download/ 
2) Open a terminal/command window and type "node -v" to confirm node has been installed correctly

### Framework Setup:

1) clone the repository from github (master branch)
2) open the project in Visual Studio Code
3) in the terminal (from the root folder of the project) type "npm install"
4) all the dependencies will be automatically installed.

### Browser installation:
1) Ensure chrome browser is installed in your computer

## Test Execution

Use the following command to run all the tests :

npm run test

Use the following command to run tests with certain tags :

npm run test tags=@Booking,@AllocateJobs

