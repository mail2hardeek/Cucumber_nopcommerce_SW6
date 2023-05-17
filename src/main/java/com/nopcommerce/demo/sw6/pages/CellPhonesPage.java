package com.nopcommerce.demo.sw6.pages;

import com.nopcommerce.demo.sw6.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class CellPhonesPage extends Utility {
    @CacheLookup
    @FindBy(xpath = "//h1[text()='Cell phones']")
    WebElement cellphones;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'List')]")
    WebElement listView;

    @CacheLookup
    @FindBy(css = "div:nth-of-type(3) > .product-item h2 > a")
    WebElement productNokiaLumia1020;

    public void verifyTextCellPhone(String expText) {

        verifyElements(cellphones, expText, "Error text not displayed");

    }

    public void clickOnListTab() {

        clickOnElement(listView);

    }

    public void clickOnNokiaLumia1020() {

        clickOnElement(productNokiaLumia1020);

    }
}
