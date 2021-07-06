@CreateBooking
Feature: Create new booking for Interpreters

   Background: Load Loopedin login page
   Given the looped in login page is opened
  

   @CreateJobRequest1
   Scenario Outline: Create Booking with minimal required field values
   When I login with "<username>" and "<password>"
   And I click Interpreting header link
   And I select "<dropdownfilter>" from the filter dropdown
   And I click on new job request button
   And I enter campus pin "<campus pin>"
   And I select "<Requester Name>" from the requester name dropdown
   And I click next button
   And I select language "<language>"
   And I select assignment type "<assignment type>"
   And I enter schedule "<date>" and "<time>"
   And I enter "<email>" email address
   And I enter confirmation date and time "<date>" and "<time>"
   And I click save and proceed to summary button
   And I handle duplicate job warning window
   And I click submit button
   Then the job created success message should appear
   And I search for created job request
   And I verify the job is listed in search results
   And The job id is added to the file

   Examples:
   | username           | password  | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date         | time  | duration | email        |
   | LLAdmin@looped.in  | Uranus@6  | Management     |  33124     |  Automation Tester  |  ARABIC    |   Halfday         | short notice | 09:30 | 4 hours  | hh@bb.com.au |
  