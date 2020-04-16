Feature: 

   Feature Description

   Background: Background name
   Given the looped in login page is opened
  

   @Booking
   Scenario Outline: Scenario name
   When I login with "<username>" and "<password>"
   And I click Interpreting header link
   And I select "<dropdownfilter>" from the filter dropdown
   And I click on new job request button
   And I enter campus pin "<campus pin>"
   And I select "<Requester Name>" from the requester name dropdown
   And I click next button
   And I select language "<language>"
   And I select assignment type "<assignment type>"
   And I enter "<date>" date
   And I enter "<time>" time
   And I enter "<email>" email address
   And I click save and proceed to summary button
   And I click submit button
   Then the job created success message should appear

   Examples:
   | username           | password | dropdownfilter | campus pin | Requester Name | language   | assignment type   | date   | time  | duration | email        |
   | LLAdmin@looped.in  | Uranus@6 | Management     |  33124     |  CBO3 Testing  |  AFRIKAANS | Interview-Halfday | future | 09:30 | 4 hours  | hh@bb.com.au |
  

