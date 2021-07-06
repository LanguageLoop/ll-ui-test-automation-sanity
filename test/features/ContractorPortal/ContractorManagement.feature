@ContractorManagement
Feature: Contractor Management features

   Background: Load the Loopedin login page
   Given the looped in login page is opened
   

 @ResetPassword 
  Scenario Outline: Reset password for contractor.
   When I login with "<username>" and "<password>"
   And I handle contractor message
   And I click "<contractor name>" user link
   And I click reset password button
   Then I verify the reset password email confirmation message

   Examples:
   | username                 | password | dropdownfilter      |  contractor name  |
   | suzanehanna@hotmail.com  | Test1    | Available Jobs      |  Suzane HANNA     |

   