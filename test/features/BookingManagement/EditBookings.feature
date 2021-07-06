@EditBooking
Feature: Edit existing booking

   Background: Load the Loopedin login page
   Given the looped in login page is opened
   

 @EditUnallocatedJobRequest @TriggerEmailFields1 @a2
  Scenario Outline: Edit a job request details fields that trigger emails 
   When I login with "<username>" and "<password>"
   And I create a new job request with minimal fields "<job notice length>"
   And I click Interpreting header link
   And I search for created job request
   And I click on job id from interpreting job search results
   And I switch to the job allocation window
   And I click on Edit button
   And I select language "<language>"
   And I select assignment type "<assignment type>"
   And I enter schedule "<date>" and "<time>"
   And I select duration "<duration>"
   And I click gender preference must checkbox
   And I select gender "<gender preference>"
   And I click add preferred interpreter button
   And I select "1" interpreters from the list
   And I click add interpreters button
   And I enter department "<department>"
   And I enter PO number "<PO Number>"
   And I click nes link
   And I enter nes first name "<nes first name>"
   And I click nes save button
   And I enter report to location "<report location>"
   And I enter report to name "<report name>"
   And I enter report to phone number "<report phone number>"
   And I click common instruction checkbox
   And I add job file
   And I select confirmation mode "<confirmation mode>"
   And I enter confirmation phone number "<confirmation phone number>"
   And I enter "<confirmation email>" email address
   And I click save and proceed to summary button
  # And I handle duplicate job warning window
   And I click yes to confirm editing job request
   And I search for created job request
   And I click on job id from interpreting job search results
   And I switch to the job allocation window
   Then I verify the assignment type "<assignment type>" is updated
   And I verify the gender preference "<gender preference>" is updated
   And The job id is added to the file
  
  Examples:
  |contractor job status | job notice length | username           | password    | dropdownfilter | campus pin | Requester Name      | language    | assignment type  | date            | time  | duration | confirmation email  | job status  | gender preference | department | reference number | PO Number | nes first name | report location | report name | report phone number | confirmation mode | confirmation phone number |
  | Allocated            | short notice      | LLAdmin@looped.in  | Uranus@6    | Management     |  33124     |  Automation Tester  |  ARABIC     | Zero min ongoing | fortnight after | 09:30 | 4 hours  | hh@bb.com.au        | Unallocated | Female            | consulting | 2314234          | 1234      |  firstname     |  New Zealand    | LL Reporter | 0399999999          |  Phone            | 0399999997                |
 