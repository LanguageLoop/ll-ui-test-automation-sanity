var chai= require('chai')
const fetch= require('node-fetch')
const { Given, When, Then, AfterAll } = require('cucumber');

var chaihttp=require('chai-http')

chai.use(chaihttp)

Given(/^I send a request$/,  async function(){

    await fetch("http://dummy.restapiexample.com/api/v1/employees")
    .then(async function(response) {
      return await response.json();
    }).then(async function(data) {
      console.log('Created Gist:', data['data'][1].id);
    });
   
})


Given(/^I dont care$/,   function(){
  console.log("TAGSSSSSSSS ::::::::: ")

   
})