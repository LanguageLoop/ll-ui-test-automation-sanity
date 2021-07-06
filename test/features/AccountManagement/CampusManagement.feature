@CampusManagement
Feature: Campus Management features

   Background: Load the Loopedin login page
   Given the looped in login page is opened
   

 @CreateCampus  @ViewCampus
  Scenario Outline: Create a new campus
   When I login with "<username>" and "<password>"
   And I click account management link  
   And I click add campus link
   And I select campus type "<campus type>"
   And I enter campus address "<campus address1>","<campus address2>"
   And I enter postal address "<postal address1>","<postal address2>"
   And I enter campus post name "<postname1>","<postname2>"
   And I enter new campus name "<campus name>"
   And I enter campus abn "<abn>" and check
   And I select override invoice frequency "<invoice frequency>"
   And I click charge gst checkbox
   And I enter campus company name "<entity name>"
   And I enter campus trading name "<business name>"
   And I enter campus PO number "<po number>"
   And I click default bill to link
   And I search bill to name "<bill to>"
   And I click first bill to from search results
   And I click assign button
   And I enter videoloop pin "<videoloop pin>"
   And I click save campus button
   And I handle duplicate campus dialog
   Then I verify campus name "<campus name>"
   And I click manage campus click
   And I verify manage campus fields are present
   
   Examples:
   | username           | password    | campus type  | campus address1                             | campus address2                              | postname1   | postname2    |  postal address1                   | postal address2  | abn         | campus name  | entity type | entity name  | po number | invoice frequency | business name   |  bill to                | videoloop pin |
   | LLAdmin@looped.in  | Uranus@6    | Metro        |  1 St Kilda Rd, St Kilda VIC 3182           |  1 St Kilda Rd, St Kilda VIC 3182, Australia |  first post | second post  |  1 St Kilda Rd, St Kilda VIC 3182  |  St Kilda Street | 53819971946 | Melbourne LL | Government  | ll company   | 42345     | Weekly            | ll trading name | department of transport | 1234          |
  
  #@ViewCampus  @ScheduleRates
  #Scenario Outline: View campus schedule rates
   #When I login with "<username>" and "<password>"
   #And I click account management link 
   #And I search for campus "<campus id>"
   #And I click the first campus link from search results
   #Then I verify the onsite contract section is present
   #And I verify the prebooked ti contract section is present

   #Examples:
   #| username          | password   | campus id        |
   #| LLAdmin@looped.in |  Uranus@6  |  33124           |

  #@ViewCampus  @BillToContracts
  #Scenario Outline: View campus bill to contracts
  # When I login with "<username>" and "<password>"
  # And I click account management link 
   #And I search for campus "<campus id>"
   #And I click the first campus link from search results
   #Then I verify bill to contract section is present

   #Examples:
   #| username          | password   | campus id |
   #| LLAdmin@looped.in |  Uranus@6  | 33124     |

   #@ViewCampus  @AddGenderPreference
  #Scenario Outline: View campus gender preferences.
   #When I login with "<username>" and "<password>"
   #And I click account management link 
   #And I search for campus "<campus id>"
   #And I click the first campus link from search results
   #And I delete all preferences
   #And I click add preference button
   #And I select preference type "Gender"
   #And I click save preference button
   #Then I verify gender preference section is present
   #And I verify police check preference section is present
   #And I verify working with children preference section is present
   #And I delete all preferences

   #Examples:
   #| username          | password   | campus id      |
   #| LLAdmin@looped.in |  Uranus@6  | 33124          |

  #@ViewCampus  @AddVaccination
  #Scenario Outline: View campus vaccinations
  # When I login with "<username>" and "<password>"
  # And I click account management link 
  # And I search for campus "<campus id>"
  # And I click the first campus link from search results
  # And I delete all vaccinations
  # And I click add vaccination button
  # And I select disease "<disease>"
  # And I enter valid months "<valid months>"
  # And I click save vaccination button
  # Then I verify vaccination "<disease>" is present

   #Examples:
   #| username          | password   | campus id | disease      | valid months |
   #| LLAdmin@looped.in |  Uranus@6  | 33124     |  Hepatitis B |  2           |

  