package com.utilities.webDriver;

import lombok.extern.slf4j.Slf4j;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

@Slf4j
public class SelectDriver {

    static  String browser;

    static{
        browser = getBrowser();

    }

    public static String getBrowser()
    {
        String browser = null;

        if(browser == null)
        {
            browser = "firefox";
        }
        return browser;
    }

    public static WebDriver getDriver()
    {
        WebDriver driver = null;

        if ("chrome".equals(browser.toLowerCase())) {
            return null;
        } else if ("safari".equals(browser.toLowerCase())) {
            return null;
        }
        return getFirefoxDriver();
    }

    public static WebDriver getFirefoxDriver()
    {
//        File resourcesDirectory = new File("src/test/resources");
//        resourcesDirectory.getAbsolutePath();
//        String path = resourcesDirectory.getAbsolutePath() + "\\drivers\\geckodriver.exe";
    //setting relative path
//        System.setProperty("webdriver.gecko.driver",path);

        System.setProperty("webdriver.gecko.driver","/Users/vishnupatlolla/IdeaProjects/geckodriver");
        WebDriver driver = new FirefoxDriver();

        return driver;
    }

}
