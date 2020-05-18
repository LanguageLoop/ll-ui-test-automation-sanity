@EditBooking
Feature: Edit existing booking

   Background: Load the Loopedin login page
   Given the looped in login page is opened
   

 @EditJobRequest @MinimalFields @GenderPref
  Scenario Outline: Edit a job request details and verify the changes
   When I login with "<username>" and "<password>"
   And I create a new job request with minimal fields "<job notice length>"
   And I click Interpreting header link
   And I search for created job request
   And I click on job id from interpreting job search results
   And I switch to the job allocation window
   And I click on Edit button
   And I select assignment type "<assignment type>"
   And I enter schedule "<date>" and "<time>"
   And I click gender preference must checkbox
   And I select gender "<gender preference>"
   And I enter "<email>" email address
   And I click save and proceed to summary button
   And I handle duplicate job warning window
   And I click yes to confirm editing job request
   And I search for created job request
   And I click on job id from interpreting job search results
   And I switch to the job allocation window
   Then I verify the assignment type "<assignment type>" is updated
   And I verify the gender preference "<gender preference>" is updated
  
  @shortnotice
   Examples:
   | job notice length | username           | password | dropdownfilter | campus pin | Requester Name      | language   | assignment type  | date            | time  | duration | email        | job status  | gender preference |
   | short notice      | LLAdmin@looped.in  | Uranus@6 | Management     |  33124     |  Automation Tester  |  ARABIC    | Zero min ongoing | fortnight after | 09:30 | 4 hours  | hh@bb.com.au | Unallocated | Female            |
   
   @longnotice
   Examples:
   | job notice length | username           | password | dropdownfilter | campus pin | Requester Name      | language   | assignment type  | date            | time  | duration | email        | job status  | gender preference |
   | long notice       | LLAdmin@looped.in  | Uranus@6 | Management     |  33124     |  Automation Tester  |  AFRIKAANS | Zero min ongoing | fortnight after | 09:30 | 4 hours  | hh@bb.com.au | Unallocated | Female            |
  
  @EditAllocatedJobRequest @MinimalFields 
  Scenario Outline: Edit a allocated job request details and verify the changes
   When I login with "<username>" and "<password>"
   And I create a new job request with minimal fields "<job notice length>"
   And I click Interpreting header link
   And I search for created job request
   And I click on job id from interpreting job search results
   And I switch to the job allocation window
   And I set the contractor job status to "<contractor job status>"
   And I click on Edit button
   And I select assignment type "<assignment type>"
   And I enter "<email>" email address
   And I click save and proceed to summary button
   And I handle duplicate job warning window
   And I click yes to confirm editing job request 
   And I search for created job request
   And I click on job id from interpreting job search results
   And I switch to the job allocation window
   Then I verify the assignment type "<assignment type>" is updated

   Examples:
   | job notice length | username           | password | dropdownfilter | campus pin | Requester Name      | language   | assignment type      | date            | time  | duration | email        | job status  | contractor job status |
   | short notice      | LLAdmin@looped.in  | Uranus@6 | Management     |  33124     |  Automation Tester  |  AFRIKAANS | Zero min ongoing     | fortnight after | 09:30 | 4 hours  | hh@bb.com.au | Unallocated | Allocated             |

 
 @EditAllocatedJobRequest @MinimalFields @DowngradeNAATI @AcceptMetro 
  Scenario Outline: Edit a job request details and verify the changes
   When I login with "<username>" and "<password>"
   And I create a new job request with minimal fields "<job notice length>"
   And I click Interpreting header link
   And I search for created job request
   And I click on job id from interpreting job search results
   And I switch to the job allocation window
   And I set the contractor job status to "<contractor job status>"
   And I click on accept metro service checkbox
   And I click on Edit button
   And I select NAATI type "<NAATI>"
   And I enter "<email>" email address
   And I click save and proceed to summary button
   And I handle duplicate job warning window
   And I click yes to confirm editing job request 
   And I search for created job request
   And I click on job id from interpreting job search results
   And I switch to the job allocation window
   Then I verify the NAATI "<NAATI>" is updated

   Examples:
   | job notice length | username           | password | dropdownfilter | campus pin | Requester Name      | language   | assignment type      | date            | time  | duration | email        | job status  | contractor job status | NAATI          | gender preference |
   | short notice      | LLAdmin@looped.in  | Uranus@6 | Management     |  33124     |  Automation Tester  |  AFRIKAANS | Zero min ongoing     | fortnight after | 09:30 | 4 hours  | hh@bb.com.au | Unallocated | Allocated             | Non-Accredited |  Female           |

  