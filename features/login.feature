Feature: Swag Labs - Login
  Background: User on the login page
    Given Afarasgali is on the login page

  Scenario: AS a standard_user, I want to log in succesfully
    When Afarasgali login with "standard_user" credential
    Then Afarasgali must be directed to home page

  Scenario: AS a locked_out_user, I want to log in succesfully
    When Afarasgali login with "locked_out_user_user" credential
    Then Afarasgali should see error "epic sadgace: Sorry, this user has been locked out" 

  Scenario: AS a problem_user, I want to log in succesfully
    When Afarasgali login with "problem_user" credential
    Then Afarasgali must be directed to home page

  Scenario: AS a glitch_user, I want to log in succesfully
    When Afarasgali login with "glitch_user" credential
    Then Afarasgali must be directed to home page

  Scenario: AS a error_user, I want to log in succesfully
    When Afarasgali login with "error_user" credential
    Then Afarasgali must be directed to home page

  Scenario: AS a visual_user, I want to log in succesfully
    When Afarasgali login with "visual_user" credential
    Then Afarasgali must be directed to home page