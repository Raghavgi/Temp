package com.steps;

import com.utilities.webDriver.DriverFactory;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PicoHooks extends DriverFactory {

    Logger logger = LoggerFactory.getLogger(PicoHooks.class);

    @Before
    public void before(Scenario scenario)
    {
        logger.info("Scenario Started"+scenario.getName());
    }

    @After
    public void after(Scenario scenario)
    {
        logger.info("scenario ended"+scenario.getName());
        driver.quit();
        driver = null;
//        driver.close();
    }

}
