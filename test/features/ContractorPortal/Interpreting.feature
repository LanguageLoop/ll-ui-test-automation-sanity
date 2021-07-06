@Interpreting
Feature: Interpreter features

  Background: open loopedin login page

   Given the looped in login page is opened
  
   

 @SearchForJobs 
  Scenario Outline: Search for jobs as an interpreter in various  job stages
   When I login with "<username>" and "<password>"
   And I handle the message for interpreters dialog
   And I select "<dropdownfilter>" from the filter dropdown
   And I search for job request "<job id>"
   And I enter to date "<to date>"
   And I click on the show regional jobs checkbox
   Then I verify the job table is displayed

   
   Examples:
   | username                 | password | dropdownfilter      | to date     | job id  |
   | suzanehanna@hotmail.com  | Test1    | Available Jobs      |  13-05-2022 | 1560450 |
  