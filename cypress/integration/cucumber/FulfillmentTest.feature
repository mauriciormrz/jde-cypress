Feature: Fulfillment Process
  As a YL business,
  I want to process orders using 3PL method and API calls,
  So that I can fulfillment the orders.

  #Background:
  #  Given I am at the Login page

  Scenario Outline: JDE Fulfillment
    #Given Primera prueba
    Given I login to the JDE platform with user "v-mauramirez@youngliving.com" and password "Youngliving456"
    When I verify the creation of the order "<order>" in the branch "<plant>"
    #And I Consolidate the orders through the user interface of JDE - "R5642ASL"
    #And I hit the login button
    #Then I should be at the home page
    #And I logout

    Examples:
      | order     | plant | cust_id | env |
      | 153354190 | 1002  | 1929631 | dv  |
#| 160969892 | 1002  | 1929631 | qa  |

#| 3907 | Password1 |


#  Scenario: Loggin with invalid credentials
#    When I fill in the account email field with the value "29014961"
#    And I fill in the password field with the value "Password1"
#    And I hit the login button
#    Then the error message "Incorrect username or password" is displayed

#

