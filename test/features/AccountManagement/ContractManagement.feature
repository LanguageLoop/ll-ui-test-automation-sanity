@ContractManagement
Feature: Contract Management features

   Background: Load the Loopedin login page
   Given the looped in login page is opened

  @AddContract
  Scenario Outline: Add contract
   When I login with "<username>" and "<password>"
   And I click account management link 
   And I click add contract link
   And I enter contract title "<contract title>"
   And I enter contract number "<contract number>"
   And I enter contract commencement date "<commencement date>"
   And I enter contract completion date "<completion date>"
   And I upload contract file
   And I click save contract button
   Then I verify contract is created

   Examples:
   | username          | password   | contract title      | contract number | payment terms     | commencement date | completion date |
   | LLAdmin@looped.in |  Uranus@6  | Automation Contract |  234234R        |  Automation terms |  today            |  20-12-2033     |

  