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
   And I enter contract payment terms "<payment terms>"
   And I enter contract number "<contract number>"
   And I enter contract commencement date "<commencement date>"
   And I enter contract completion date "<completion date>"
   And I upload contract file
   And I click save contract button
   Then I verify contract is created

   Examples:
   | username          | password   | contract title      | contract number | payment terms     | commencement date | completion date |
   | LLAdmin@looped.in |  Uranus@6  | Automation Contract |  234234R        |  Automation terms |  today            |  20-12-2033     |

  @DuplicateContract
  Scenario Outline: Duplicate contract
   When I login with "<username>" and "<password>"
   And I click account management link 
   And I click add contract link
   And I enter contract title "<contract title>"
   And I enter contract payment terms "<payment terms>"
   And I enter contract number "<contract number>"
   And I enter contract commencement date "<commencement date>"
   And I enter contract completion date "<completion date>"
   And I upload contract file
   And I click save contract button
   Then I verify contract is created 
   And I click copy contract button
   And I verify duplicate contract is created "<contract title>"

   Examples:
   | username          | password   | contract title      | contract number | payment terms     | commencement date | completion date |
   | LLAdmin@looped.in |  Uranus@6  | Automation Contract |  234234R        |  Automation terms |  today            |  20-12-2033     |

  # @AddMinimumNAATILevel
  # Scenario Outline: Add minium naati level for contract
  # When I login with "<username>" and "<password>"
  # And I click account management link 
  
  # And I search for contract title "<contract title>"
  # And I click the first contract link from search results
  
  # And I click add minimum naati level
  # And I select service language "<language>"
  # And I select service naati level "<naati level>"
  # And I click save naati button 
  # Then I verify the minimum naati is added "<language>"
  # And I delete added miniumum naati

   # Examples: 
   #| username          | password   | contract title                      | language                     | naati level |
   #| LLAdmin@looped.in |  Uranus@6  | Victorian Government - Bill To test | AFRIKAANS - Pre-booked Video | Recognised  |