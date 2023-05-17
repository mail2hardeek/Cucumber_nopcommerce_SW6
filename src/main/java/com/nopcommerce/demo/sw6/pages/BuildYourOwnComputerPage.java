package com.nopcommerce.demo.sw6.pages;

import com.nopcommerce.demo.sw6.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class BuildYourOwnComputerPage extends Utility {
    private static final Logger log = LogManager.getLogger(NokiaLumiaPage.class.getName());
    @CacheLookup
    @FindBy(xpath = "//h1[text()='Build your own computer']")
    WebElement buildYourOwnComputer;

    @CacheLookup
    @FindBy(id = "product_attribute_1")
    WebElement processor;

    @CacheLookup
    @FindBy(id = "product_attribute_2")
    WebElement ram;

    @CacheLookup
    @FindBy(id = "product_attribute_3_7")
    WebElement hdd;

    @CacheLookup
    @FindBy(id = "product_attribute_4_9")
    WebElement os;

    @CacheLookup
    @FindBy(id = "product_attribute_5_12")
    WebElement software;

    @CacheLookup
    @FindBy(id = "price-value-1")
    WebElement price;

    @CacheLookup
    @FindBy(id = "add-to-cart-button-1")
    WebElement addToCart;

    @CacheLookup
    @FindBy(xpath = "//p[text()='The product has been added to your ']")
    WebElement addToCartMsg;

    @CacheLookup
    @FindBy(xpath = ("//span[@title='Close']"))
    WebElement crossButton;

    @CacheLookup
    @FindBy(xpath = "//span[text()='Shopping cart']")
    WebElement shoppingCart;

    @CacheLookup
    @FindBy(xpath = "//button[text()='Go to cart']")
    WebElement goToCart;

    public void verifyBuildYourOwnComputerText(String expectedMessage) {
        verifyElements(buildYourOwnComputer, expectedMessage, "wrong text");
    }

    // Selecting Processor
    public void selectProcessor(String processor1) {
        selectByVisibleTextFromDropDown(processor, processor1);
    }

    // Selecting RAM
    public void selectRAM(String ram1) {
        selectByVisibleTextFromDropDown(ram, ram1);
    }

    // Selecting HDD
    public void selectHDD(String hdd1) {
        doClickOnElement(hdd, hdd1);
    }

    // Selecting Operating System
    public void selectOS(String os1) {
        doClickOnElement(os, os1);
    }

    // Selecting Software
    public void selectSoftware(String software1) {
        doClickOnElement(software, software1);
    }

    // Verifying Price
    public void verifyPrice(String expectedPrice) {
        verifyElements(price, expectedPrice, "error message not displayed");
    }

    // Clicking on Add to Cart button
    public void clickOnAddToCart() {
        clickOnElement(addToCart);
    }

    // Verifying message that product added to cart
    public void verifyAddToCartMessage(String expectedMessage) {
        verifyElements(addToCartMsg, expectedMessage, "error message is not displayed");
    }

    // Clicking on Cross button
    public void clickOnCrossButton() {
        clickOnElement(crossButton);
    }

    // Mouse hover on Shopping Cart
    public void mouseHoverOnShoppingCart() {
        mouseHoverToElementAndClick(shoppingCart);
    }

    // Clicking on Go To Cart
    public void clickOnGoToCart() {
        clickOnElement(goToCart);
    }
}

