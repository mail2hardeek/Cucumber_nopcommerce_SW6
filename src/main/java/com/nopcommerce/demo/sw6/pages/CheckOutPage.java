package com.nopcommerce.demo.sw6.pages;

import com.nopcommerce.demo.sw6.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class CheckOutPage extends Utility {
    @CacheLookup
    @FindBy(id = "BillingNewAddress_FirstName")
    WebElement firstName;

    @CacheLookup
    @FindBy(id = "BillingNewAddress_LastName")
    WebElement lastName;

    @CacheLookup
    @FindBy(id = "BillingNewAddress_Email")
    WebElement email;

    @CacheLookup
    @FindBy(id = "BillingNewAddress_CountryId")
    WebElement country;

    @CacheLookup
    @FindBy(id = "BillingNewAddress_City")
    WebElement city;

    @CacheLookup
    @FindBy(id = "BillingNewAddress_Address1")
    WebElement addressLine1;

    @CacheLookup
    @FindBy(id = "BillingNewAddress_ZipPostalCode")
    WebElement zipCode;

    @CacheLookup
    @FindBy(id = "BillingNewAddress_PhoneNumber")
    WebElement telNumber;

    @CacheLookup
    @FindBy(xpath = "//button[@onclick='Billing.save()']")
    WebElement continueBtn;

    @CacheLookup
    @FindBy(id = "shippingoption_1")
    WebElement nextDayAirRadioBtn;

    @CacheLookup
    @FindBy(xpath = "//button[@class='button-1 shipping-method-next-step-button']")
    WebElement shippingContinueBtn;

    @CacheLookup
    @FindBy(id = "paymentmethod_1")
    WebElement creditCardOption;

    @CacheLookup
    @FindBy(xpath = "//button[@name='save' and @class='button-1 payment-method-next-step-button']")
    WebElement paymentContinueOption;

    @CacheLookup
    @FindBy(id = "CreditCardType")
    WebElement creditCardOption1;

    @CacheLookup
    @FindBy(id = "CardholderName")
    WebElement cardHolderName;

    @CacheLookup
    @FindBy(id = "CardNumber")
    WebElement cardNumber;

    @CacheLookup
    @FindBy(id = "ExpireMonth")
    WebElement expireMonth;

    @CacheLookup
    @FindBy(id = "ExpireYear")
    WebElement expireYear;

    @CacheLookup
    @FindBy(id = "CardCode")
    WebElement cCode;

    @CacheLookup
    @FindBy(xpath = "//button[@class='button-1 payment-info-next-step-button']")
    WebElement continueCardPayment;

    @CacheLookup
    @FindBy(xpath = "//li[@class='payment-method']//span[@class='value']")
    WebElement paymentMethod;

    @CacheLookup
    @FindBy(xpath = "//li[@class='shipping-method']//span[@class='value']")
    WebElement shippingMethod;

    @CacheLookup
    @FindBy(xpath = "//span[@class='value-summary']//strong")
    WebElement total;

    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Confirm')]")
    WebElement confirm;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Thank you')]")
    WebElement thankYou;

    @CacheLookup
    @FindBy(xpath = "//strong[contains(text(),'Your order has been successfully processed!')]")
    WebElement orderMessage;

    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Continue')]")
    WebElement continueClick;

    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'Welcome to our store')]")
    WebElement welcomeToStoreText;

    @CacheLookup
    @FindBy(id = "shippingoption_2")
    WebElement radioBtn2ndDayAir;

    @CacheLookup
    @FindBy(xpath = "//button[@name='save' and @class='button-1 payment-method-next-step-button']")
    WebElement visaCard;


    public void inputFirstName(String fName) {

        sendTextToElement(firstName, fName);

    }

    public void inputLastName(String lName) {

        sendTextToElement(lastName, lName);

    }

    public void inputEmail(String email1) {

        sendTextToElement(email, email1);

    }

    public void selectCountry(String country1) {

        selectByVisibleTextFromDropDown(country, country1);

    }

    public void inputCity(String city1) {

        sendTextToElement(city, city1);

    }

    public void inputAddress(String address1) {

        sendTextToElement(addressLine1, address1);

    }

    public void inputZipCode(String zipCode1) {
               sendTextToElement(zipCode, zipCode1);

    }

    public void inputTelephoneNumber(String telNum) {

        sendTextToElement(telNumber, telNum);

    }

    public void clickOnContinueBtn() {

        clickOnElement(continueBtn);

    }

    public void clickOnNextDayAirRadioBtn() {

        clickOnElement(nextDayAirRadioBtn);

    }

    public void clickOnContinueOnShipping() {

        clickOnElement(shippingContinueBtn);

    }

    public void clickOnCreditCard() {

        clickOnElement(creditCardOption);

    }

    public void clickOnPaymentContinue() {

        clickOnElement(paymentContinueOption);

    }

    public void selectCreditCard(String creditCard1) throws InterruptedException {

        Thread.sleep(2000);
        selectByVisibleTextFromDropDown(creditCardOption1, creditCard1);

    }

    public void inputCardHolderName(String cName) {

        sendTextToElement(cardHolderName, cName);

    }

    public void inputCardNumber(String cardNum) {

        sendTextToElement(cardNumber, cardNum);

    }

    public void selectExpireMonth(String expMonth) {

        selectByVisibleTextFromDropDown(expireMonth, expMonth);

    }

    public void selectExpireYear(String expYear) {

        selectByVisibleTextFromDropDown(expireYear, expYear);

    }

    public void inputCardCode(String code) {

        sendTextToElement(cCode, code);

    }

    public void clickOnContinuCardPayment() {

        clickOnElement(continueCardPayment);

    }

    public void verifyPaymentMethod(String expectedMessage) {

        verifyElements(paymentMethod, expectedMessage, "payment method not displayed");

    }

    public void verifyShippingMethod(String expectedMessage) {

        verifyElements(shippingMethod, expectedMessage, "shipping method is not correct");

    }

    public void verifyTotal(String expectedMessage) {

        verifyElements(total, expectedMessage, "Total is not correct");

    }

    public void clickOnConfirm() {

        clickOnElement(confirm);

    }

    public void verifyThankYou(String expectedMessage) {

        verifyElements(thankYou, expectedMessage, "Message not displayed");

    }

    public void verifyOrderConfirmation(String expectedMessage) {

        verifyElements(orderMessage, expectedMessage, "Order is confirm");

    }

    public void clickOnContinue() {

        clickOnElement(continueClick);

    }

    //    public void verifyTextWelcomeToOurStore(String expectedMessage){
//        verifyElements(Welcome to our store,);
    //   }
    public void clickOnRadioBtn2ndDayAir() {

        clickOnElement(radioBtn2ndDayAir);

    }

    public void inputVisaCardNumber(String vCardNumber) {

        sendTextToElement(visaCard, vCardNumber);

    }

    public void verifyNokiaCartTotal(String expectedTotal) {

        verifyElements(total, expectedTotal, "Total not displayed as expected");

    }
}