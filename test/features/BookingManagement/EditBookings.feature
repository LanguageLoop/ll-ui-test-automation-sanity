@EditBooking
Feature: Edit existing booking

   Background: Load the Loopedin login page
   Given the looped in login page is opened
   

 @EditJobRequest @MinimalFields
  Scenario Outline: Edit a job request details and verify the changes
   When I login with "<username>" and "<password>"
   And I create a new job request with minimal fields
   And I click Interpreting header link
   And I search for created job request
   And I click on job id from interpreting job search results
   And I click on Edit button
   And I select assignment type "<assignment type>"
   And I enter schedule "<date>" and "<time>"
   And I enter "<email>" email address
   And I click save and proceed to summary button
   And I handle duplicate job warning window
   And I click yes to confirm editing job request 
  
   Examples:
   | username           | password | dropdownfilter | campus pin | Requester Name      | language   | assignment type      | date            | time  | duration | email        | job status  |
   | LLAdmin@looped.in  | Uranus@6 | Management     |  33124     |  Automation Tester  |  AFRIKAANS | Zero min and ongoing | fortnight after | 09:30 | 4 hours  | hh@bb.com.au | Unallocated |
  