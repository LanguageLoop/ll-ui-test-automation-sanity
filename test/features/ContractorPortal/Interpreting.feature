@Interpreting
Feature: Interpreter features

   Background: Load the Loopedin login page
   Given the looped in login page is opened
   

 @SearchForJobs 
  Scenario Outline: Search for jobs as an interpreter in various  job stages
   When I login with "<username>" and "<password>"
   And I select "<dropdownfilter>" from the filter dropdown
   And I search for job request "<job id>"
   And I enter to date "<to date>"
   And I click on the show regional jobs checkbox
   Then I verify the job table is displayed

   
   Examples:
   | username                 | password | dropdownfilter      | to date     | job id  |
   | suzanehanna@hotmail.com  | Test1    | Available Jobs      |  13-05-2022 | 1560450 |
   | suzanehanna@hotmail.com  | Test1    | Allocated Jobs      |  13-05-2022 | 1560450 |
   | suzanehanna@hotmail.com  | Test1    | Completed Jobs      |  13-05-2022 | 1544161 |
   | suzanehanna@hotmail.com  | Test1    | Rejected Jobs       |  13-05-2022 | 1560450 |
   | suzanehanna@hotmail.com  | Test1    | Cancelled           |  13-05-2022 | 1537266 |
   | suzanehanna@hotmail.com  | Test1    | Failed to Complete  |  13-05-2022 | 1537266 |

 @RejectJobs 
  Scenario Outline: Reject jobs
   When I login with "<contractor username>" and "<contractor password>"
   And I select "<dropdownfilter>" from the filter dropdown
   And I click on first job id from interpreting job list
   And I click reject job button
   And I select "Rejected Jobs" from the filter dropdown
   And I search for selected job request
   Then I verify the job is listed in search results
   
   Examples:
  | job notice length |admin username    | admin password | contractor username      | contractor password | dropdownfilter      | to date     | job id  |
  | long notice       |LLAdmin@looped.in |   Uranus@6     | suzanehanna@hotmail.com  | Test1               | Available Jobs      |  13-05-2022 | 1560450 |
  

# @AcceptJobs 
#   Scenario Outline: Accept jobs
#    When I login with "<contractor username>" and "<contractor password>"
#    And I select "<dropdownfilter>" from the filter dropdown
#    And I click on first job id from interpreting job list
#    And I click accept job button
#    And I select "Allocated Jobs" from the filter dropdown
#    And I search for selected job request
#    Then I verify the job is listed in search results
#    And I click on first job id from accepted job list
#    And I click return job button
   
#    Examples:
#   | contractor username      | contractor password | dropdownfilter      | to date     |
#   | suzanehanna@hotmail.com  | Test1               | Available Jobs      |  13-05-2022 |
#   | suzanehanna@hotmail.com  | Test1               | Rejected Jobs       |  13-05-2022 |
  
 
 @UnavailableJobs 
  Scenario Outline: Unavailable for job
   When I login with "<contractor username>" and "<contractor password>"
   And I select "<dropdownfilter>" from the filter dropdown
   And I click on first job id from interpreting job list
   And I click unavailable job button
   
   Examples:
  | job notice length |admin username    | admin password | contractor username      | contractor password | dropdownfilter      | to date     | job id  |
  | long notice       |LLAdmin@looped.in |   Uranus@6     | suzanehanna@hotmail.com  | Test1               | Available Jobs      |  13-05-2022 | 1560450 |
  