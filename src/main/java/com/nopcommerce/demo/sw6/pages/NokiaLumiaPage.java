package com.nopcommerce.demo.sw6.pages;

import com.nopcommerce.demo.sw6.utility.Utility;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class NokiaLumiaPage extends Utility {
    @CacheLookup
    @FindBy(css = "div[class='product-name'] h1")
    WebElement nokiaLumia1020;

    @CacheLookup
    @FindBy(id = "price-value-20")
    WebElement price;

    @CacheLookup
    @FindBy(id = "product_enteredQuantity_20")
    WebElement quantity;

    @CacheLookup
    @FindBy(id = "add-to-cart-button-20")
    WebElement cartBtn;

    @CacheLookup
    @FindBy(xpath = "//p[@class='content']")
    WebElement shoppingCartMessage;

    @CacheLookup
    @FindBy(css = "span[title='Close']")
    WebElement greenBtnClick;

    @CacheLookup
    @FindBy(xpath = "//span[text()='Shopping cart']")
    WebElement shoppingCart;

    @CacheLookup
    @FindBy(xpath = "//button[text()='Go to cart']")
    WebElement goToCart;

    public void verifyTextNokiaLumia1020(String expText) {

        verifyElements(nokiaLumia1020, expText, "Text not displayed");

    }

    public void verifyThePrice(String expectedPrice) {

        verifyElements(price, expectedPrice, "Price not displayed as expected");

    }

    public void changeQuantity(String qty) {

        sendTextToElement(quantity, Keys.BACK_SPACE + qty);

    }

    public void clickOnCartBtn() {

        clickOnElement(cartBtn);

    }

    public void verifyShoppingCartMessage(String expectedMessage) {

        verifyElements(shoppingCartMessage, expectedMessage, "Message is not displayed");

    }

    public void clickOnGreenBtn() {

        clickOnElement(greenBtnClick);

    }

    public void mouseHoverOnShoppingCart() {

        mouseHoverToElement(shoppingCart);

    }

    public void clickOnGoToCart() {

        clickOnElement(goToCart);

    }

}
