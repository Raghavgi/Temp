package com.runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty"},
        glue = "com.steps",
        features = "src/test/resources/ui/",
        tags = "@test",
        format = {"html:target/cucumber","json:target/cucumber-reports/Cucumber.json"},
        monochrome = true
)
public class TestRunnerNew {

}
