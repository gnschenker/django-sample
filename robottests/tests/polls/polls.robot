*** Settings ***

Documentation     View Polls Page

Library    Selenium2Library

Suite Setup       Open Browser    about:blank    ${BROWSER}
Suite Teardown    Close All Browsers

*** Test Cases ***

Should Contain Angular Text
    Go To    http://127.0.0.1/polls/
    Page Should Contain    Angular Worked!!! Yay!
