Feature: Maintainer Month homepage

    I want check the homepage loads

    Scenario: Opening the homepage
        Given I open "home" page
        Then I see "June 2022" text in section ".hero"
