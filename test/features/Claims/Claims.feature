@Claims
Feature: Claims processing features

   Background: Load the Loopedin login page
   Given the looped in login page is opened
   

 @SearchForClaimJobs 
  Scenario Outline: Search for jobs as an interpreter in various  job stages
   When I login with "<username>" and "<password>"
   And I click Claims header link  
   And I enter interview date before
   And I select "<status>" job status
   Then I verify the job table is displayed

   
   Examples:
   | username           | password    | status                 | to date     | job id  |
   | LLAdmin@looped.in  | Uranus@6    | Completed              |  13-05-2022 | 1560450 |
   | LLAdmin@looped.in  | Uranus@6    | Signed off             |  13-05-2022 | 1560450 |
   | LLAdmin@looped.in  | Uranus@6    | All                    |  13-05-2022 | 1544161 |
   | LLAdmin@looped.in  | Uranus@6    |  Processed             |  13-05-2022 | 1560450 |
   | LLAdmin@looped.in  | Uranus@6    | Cancelled & Processed  |  13-05-2022 | 1537266 |
   | LLAdmin@looped.in  | Uranus@6    | Cancelled & Signed off |  13-05-2022 | 1537266 |

  @ProcessClaims @ProcessCampus @ProcessContractor
  Scenario Outline: Process claims
   When I login with "<username>" and "<password>"
   And I click Claims header link  
   And I close all special search criteria
   And I select "<status>" job status
   And I get the campus fee for first job
   And I get the contractor fee for first job
   And I click on first job id from claims job list
   And I switch to the claims window
   Then I verify the contractor fee
   And I verify the campus fee
   And I click process campus button
   And I click process contractor button
   And I click Claims header link
   And I close all special search criteria
   And I search for selected job request
   And I select "Signed off" job status
   Then I verify the job status is "<claim status>"
   
   Examples:
   | username           | password    | status      | to date     | job id  | claim status |
   | LLAdmin@looped.in  | Uranus@6    | Completed   |  13-05-2022 | 1560450 | Signed off   |

  @ProcessClaims @ProcessCampusAndContractor
  Scenario Outline: Process claims
   When I login with "<username>" and "<password>"
   And I click Claims header link  
   And I close all special search criteria
   And I select "<status>" job status
   And I get the campus fee for first job
   And I get the contractor fee for first job
   And I click on first job id from claims job list
   And I switch to the claims window
   Then I verify the contractor fee
   And I verify the campus fee
   And I click process campus and contractor button
   And I click Claims header link
   And I close all special search criteria
   And I search for selected job request
   And I select "Signed off" job status
   Then I verify the job status is "<claim status>"
   
   Examples:
   | username           | password    | status      | to date     | job id  | claim status |
   | LLAdmin@looped.in  | Uranus@6    | Completed   |  13-05-2022 | 1560450 | Signed off   |

  @ProcessClaims @ProcessCampusOnly
  Scenario Outline: Process claims
   When I login with "<username>" and "<password>"
   And I click Claims header link  
   And I close all special search criteria
   And I select "<status>" job status
   And I get the campus fee for first job
   And I get the contractor fee for first job
   And I click on first job id from claims job list
   And I switch to the claims window
   Then I verify the contractor fee
   And I verify the campus fee
   And I click process campus button
   And I click Claims header link
   And I close all special search criteria
   And I search for selected job request
   And I select "Processed" job status
   Then I verify the job status is "<claim status>"
   
   Examples:
   | username           | password    | status      | to date     | job id  | claim status |
   | LLAdmin@looped.in  | Uranus@6    | Completed   |  13-05-2022 | 1560450 | Processed    |

  @ProcessClaims @ReprocessCampusOnly
  Scenario Outline: Process claims
   When I login with "<username>" and "<password>"
   And I click Claims header link  
   And I close all special search criteria
   And I select "<status>" job status
   And I get the campus fee for first job
   And I get the contractor fee for first job
   And I click on first job id from claims job list
   And I switch to the claims window
   Then I verify the contractor fee
   And I verify the campus fee
   And I click reprocess campus button
   And I handle reprocess confirmation
   And I click process campus button
   And I click Claims header link
   And I close all special search criteria
   And I search for selected job request
   And I select "Signed off" job status
   Then I verify the job status is "<claim status>"
   
   Examples:
   | username           | password    | status      | to date     | job id  | claim status |
   | LLAdmin@looped.in  | Uranus@6    | Signed off  |  13-05-2022 | 1560450 | Signed off   |

  @ProcessClaims @ReprocessContractorOnly
  Scenario Outline: Process claims
   When I login with "<username>" and "<password>"
   And I click Claims header link  
   And I close all special search criteria
   And I select "<status>" job status
   And I get the campus fee for first job
   And I get the contractor fee for first job
   And I click on first job id from claims job list
   And I switch to the claims window
   Then I verify the contractor fee
   And I verify the campus fee
   And I click reprocess contractor button
   And I handle reprocess confirmation
   And I click process contractor button
   And I click Claims header link
   And I close all special search criteria
   And I search for selected job request
   And I select "Signed off" job status
   Then I verify the job status is "<claim status>"
   
   Examples:
   | username           | password    | status      | to date     | job id  | claim status |
   | LLAdmin@looped.in  | Uranus@6    | Signed off  |  13-05-2022 | 1560450 | Signed off   |

  @ProcessClaims @ReprocessCampusAndContractor
  Scenario Outline: Process claims
   When I login with "<username>" and "<password>"
   And I click Claims header link  
   And I close all special search criteria
   And I select "<status>" job status
   And I get the campus fee for first job
   And I get the contractor fee for first job
   And I click on first job id from claims job list
   And I switch to the claims window
   Then I verify the contractor fee
   And I verify the campus fee
   And I click reprocess campus and contractor button
   And I handle reprocess campus and contractor confirmation
   And I click process campus and contractor button
   And I click Claims header link
   And I close all special search criteria
   And I search for selected job request
   And I select "Signed off" job status
   Then I verify the job status is "<claim status>"
   
   Examples:
   | username           | password    | status      | to date     | job id  | claim status |
   | LLAdmin@looped.in  | Uranus@6    | Signed off  |  13-05-2022 | 1560450 | Signed off   |