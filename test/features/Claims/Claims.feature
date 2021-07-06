@Claims
Feature: Claims processing features

   Background: Load the Loopedin login page
   Given the looped in login page is opened
   

 @SearchForClaimJobs 
  Scenario Outline: Search for jobs as an interpreter in various  job stages
   When I login with "<username>" and "<password>"
   And I click Claims header link  
   And I enter interview date before "<before date>"
   And I select "<status>" job status
   Then I verify the job table is displayed

   
   Examples:
   | username           | password    | status                 | before date | job id  |
   | LLAdmin@looped.in  | Uranus@6    | Completed              |  13-05-2022 | 1560450 |
   