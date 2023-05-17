package com.nopcommerce.demo.sw6.pages;

import com.nopcommerce.demo.sw6.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class SignInPage extends Utility {
    @CacheLookup
    @FindBy(xpath = ("//div[@class='page-title']//h1"))
    WebElement welcomeText;

    @CacheLookup
    @FindBy(xpath = ("//button[text()='Checkout as Guest']"))
    WebElement checkoutAsGuestBtn;

    @CacheLookup
    @FindBy(xpath = ("//button[text()='Register']"))
    WebElement registerBtn;

    public void verifyWelcomeText(String expectedMessage) {

        verifyElements(welcomeText, expectedMessage, "Welcom message is not displayed");

    }

    public void clickOnCheckoutAsGuestBtn() {

        clickOnElement(checkoutAsGuestBtn);

    }

    public void clickOnRegisterBtn() {

        clickOnElement(registerBtn);

    }

}
