@ContractorEngagement
Feature: Contractor Engagement features

   Background: Load the Loopedin login page
   Given the looped in login page is opened
   

 @CreateContractor 
  Scenario Outline: Create Contractor.
   When I login with "<username>" and "<password>"
   And I click contractor engagement link
   And I click add contractor button
   And I enter contractor details "<salutation>","<gender>","<name>","<pin>","<mobile>","<dob>","<email>","<address>"
   And I click contractor engagement link
   Then I verify contractor is created
   
   Examples: 
   | username           | password | salutation |   gender  | name                  |  pin  | mobile     | dob        | email        | address                   |
   | LLAdmin@looped.in  | Uranus@6 | Mr         |  Male     | Automation Contractor |  2323 | 0400000000 | 20-04-1982 | aa           |  St Kilda VIC, Australia  |


  