package com.nopcommerce.demo.sw6.pages;

import com.nopcommerce.demo.sw6.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class RegisterPage extends Utility {
    @CacheLookup
    @FindBy(xpath = "//h1[text()='Register']")
    WebElement registerText;

    @CacheLookup
    @FindBy(id = "FirstName")
    WebElement firstName;
    @CacheLookup

    @FindBy(id = "LastName")
    WebElement lastName;

    @CacheLookup
    @FindBy(id = "Email")
    WebElement email;

    @CacheLookup
    @FindBy(id = "Password")
    WebElement password;

    @CacheLookup
    @FindBy(id = "ConfirmPassword")
    WebElement confirmPassword;

    @CacheLookup
    @FindBy(id = "register-button")
    WebElement register;

    @CacheLookup
    @FindBy(xpath = "//div[@class='result']")
    WebElement registerMessage;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Continue')]")
    WebElement continueBtn;

    public void verifyTextRegister(String expectedText) {

        verifyElements(registerText, expectedText, "Text is not Displayed");

    }

    public void inputFirstNameField(String name) {

        sendTextToElement(firstName, name);

    }

    public void lastNameField(String lName) {

        sendTextToElement(lastName, lName);

    }

    public void emailField(String email1) {

        sendTextToElement(email, email1);

    }

    public void passwordField(String password1) {

        sendTextToElement(password, password1);

    }

    public void confirmPasswordField(String confirmPass) {

        sendTextToElement(confirmPassword, confirmPass);

    }

    public void clickOnRegister() {

        clickOnElement(register);

    }

    public void verifyRegisterTextMessage(String expextedMessage) {

        verifyElements(registerMessage, expextedMessage, "Message is not displayed");

    }

    public void clickOnContinueBtn() {

        clickOnElement(continueBtn);

    }

}
