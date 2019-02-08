$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/ui/Process.feature");
formatter.feature({
  "name": "Mortgage Calculator Test",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Navigate to calculator page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iNavigateToCalculatorPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "UI- Test calculator with valid inputs -1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "I am on Calculator page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.iAmOnCalculatorPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I give payment type as purchase price",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.iGiveValidPaymentType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I give price amount as 250000",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iGivePriceAmountAs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input downpayment amount as 12500",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iInputDownpaymentAmountAs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input interest rate as 2",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iInputInterestRateAs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on calculate button",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iClickOnCalculateButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the result",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iShouldSeeTheResult(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});