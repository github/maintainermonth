Feature: Schedule page

    I want check the schedule page loads the data correctly

    Scenario: Navigating to the schedule page
        Given I open "home" page
        When I click on "schedule" in section ".header"
        Then I should see "schedule" in the url
        Then I see "Jun 2" text in section ".events-list"
        Then I see "Jun 3" text in section ".events-list"

    Scenario: Opening the schedule page directly
        Given I open "/schedule" page
        Then I see "Jun 2" text in section ".events-list"

    Scenario: Check data is loaded correctly
        Given I open "schedule" page
        Then I see "Maintainer Twitter Space" text in section ".events-list"
