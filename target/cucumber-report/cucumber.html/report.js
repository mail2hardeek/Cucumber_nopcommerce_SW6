$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "As a user I should able to arrange products in Alphabetical order in Computer page\r\nand can add product to shopping cart successfully",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 38412840300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": ": I am on homepage",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 8,
  "name": "Verify products are arranged in Alphabetical order on Computers page",
  "description": "",
  "id": "computer-test;verify-products-are-arranged-in-alphabetical-order-on-computers-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on \"Computers\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on Desktop",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select \"Name: Z to A\" from Sort By dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify Products are displayed in Descending order",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: Z to A",
      "offset": 10
    }
  ],
  "location": "ComputerTest.iSelectFromSortByDropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerTest.iVerifyProductsAreDisplayedInDescendingOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3336282400,
  "status": "passed"
});
formatter.uri("ElectronicsTest.feature");
formatter.feature({
  "line": 2,
  "name": "Electronics Test",
  "description": "\r\nAs a user I should able to navigate to Cell Phone page successfully\r\nand can verify that product added successfully and place the order successfully",
  "id": "electronics-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 8375896200,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 9,
  "name": "Verify navigate to Cell Phone successfully",
  "description": "",
  "id": "electronics-test;verify-navigate-to-cell-phone-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I mouse hover on \"Electronics\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I mouse hover on \"Cell phone\" phone and click",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I verify the text \"Cell phones\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 18
    }
  ],
  "location": "ElectronicTest.iMouseHoverOn(String)"
});
formatter.result({
  "duration": 771038200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phone",
      "offset": 18
    }
  ],
  "location": "ElectronicTest.iMouseHoverOnPhoneAndClick(String)"
});
formatter.result({
  "duration": 2001712400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 19
    }
  ],
  "location": "ElectronicTest.iVerifyTheText(String)"
});
formatter.result({
  "duration": 135341900,
  "error_message": "java.lang.AssertionError: Error text not displayed expected [text] but found [Cell phones]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat com.nopcommerce.demo.sw6.utility.Utility.verifyElements(Utility.java:364)\r\n\tat com.nopcommerce.demo.sw6.pages.CellPhonesPage.verifyTextCellPhone(CellPhonesPage.java:23)\r\n\tat com.nopcommerce.demo.sw6.steps.ElectronicTest.iVerifyTheText(ElectronicTest.java:23)\r\n\tat ✽.Then I verify the text \"Cell phones\"(ElectronicsTest.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4832354100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": ": Verify product added successfully and place order successfully",
  "description": "",
  "id": "electronics-test;:-verify-product-added-successfully-and-place-order-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I mouse hover on \"Electronics\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I mouse hover on \"Cell phone\" and click",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I verify the text \"Cell phones\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on list tab",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Nokia Lumia",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I verify text nokia lumia \"Nokia Lumia 1020\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify  price \"$349.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I change quantity \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on add to cart tab",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify shopping cart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on green button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I mouse hover on shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on go to cart",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify shopping cart title \"Shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify the quantity",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify the total \"$698.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on terms of service checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify text \"Register\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I input first name \"\u003cFirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I input last name \"\u003cLastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I input email address",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I input Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I input confirm password \"\u003cConfirm Password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on register",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I verify register text message \"Your registration completed\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I verify Shopping Cart title \"Shopping cart\"",
  "keyword": "And "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "electronics-test;:-verify-product-added-successfully-and-place-order-successfully;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Password",
        "Confirm Password"
      ],
      "line": 47,
      "id": "electronics-test;:-verify-product-added-successfully-and-place-order-successfully;;1"
    },
    {
      "cells": [
        "James",
        "Simon",
        "password123",
        "password123"
      ],
      "line": 48,
      "id": "electronics-test;:-verify-product-added-successfully-and-place-order-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8509560600,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 48,
  "name": ": Verify product added successfully and place order successfully",
  "description": "",
  "id": "electronics-test;:-verify-product-added-successfully-and-place-order-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I mouse hover on \"Electronics\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I mouse hover on \"Cell phone\" and click",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I verify the text \"Cell phones\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on list tab",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Nokia Lumia",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I verify text nokia lumia \"Nokia Lumia 1020\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify  price \"$349.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I change quantity \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on add to cart tab",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify shopping cart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on green button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I mouse hover on shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on go to cart",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify shopping cart title \"Shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify the quantity",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify the total \"$698.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on terms of service checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify text \"Register\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I input first name \"James\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I input last name \"Simon\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I input email address",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I input Password \"password123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I input confirm password \"password123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on register",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I verify register text message \"Your registration completed\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I verify Shopping Cart title \"Shopping cart\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 18
    }
  ],
  "location": "ElectronicTest.iMouseHoverOn(String)"
});
formatter.result({
  "duration": 5288877600,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 19
    }
  ],
  "location": "ElectronicTest.iVerifyTheText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicTest.iClickOnListTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicTest.iClickOnNokiaLumia()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia Lumia 1020",
      "offset": 27
    }
  ],
  "location": "ElectronicTest.iVerifyTextNokiaLumia(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$349.00",
      "offset": 17
    }
  ],
  "location": "ElectronicTest.iVerifyPrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "ElectronicTest.iChangeQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicTest.iClickOnAddToCartTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 32
    }
  ],
  "location": "ElectronicTest.iVerifyShoppingCartMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicTest.iClickOnGreenButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicTest.iMouseHoverOnShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicTest.iClickOnGoToCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 30
    }
  ],
  "location": "ElectronicTest.iVerifyShoppingCartTitle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicTest.iVerifyTheQuantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$698.00",
      "offset": 20
    }
  ],
  "location": "ElectronicTest.iVerifyTheTotal(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicTest.iClickOnTermsOfServiceCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicTest.iClickOnCheckoutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicTest.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 15
    }
  ],
  "location": "ElectronicTest.iVerifyText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "James",
      "offset": 20
    }
  ],
  "location": "ElectronicTest.iInputFirstName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Simon",
      "offset": 19
    }
  ],
  "location": "ElectronicTest.iInputLastName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicTest.iInputEmailAddress()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 18
    }
  ],
  "location": "ElectronicTest.iInputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 26
    }
  ],
  "location": "ElectronicTest.iInputConfirmPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicTest.iClickOnRegister()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 32
    }
  ],
  "location": "ElectronicTest.iVerifyRegisterTextMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicTest.iClickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 5494876400,
  "status": "passed"
});
formatter.uri("TopMenu.feature");
formatter.feature({
  "line": 2,
  "name": "Top Menu Test",
  "description": "As a user I want to navigate to all top menu pages",
  "id": "top-menu-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should navigate to all top menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on \"\u003cTop Menu Option\u003e\" from Top Menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I navigate to relevant page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify \"\u003cTitle\u003e\" of the page",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;",
  "rows": [
    {
      "cells": [
        "Top Menu Option",
        "Title"
      ],
      "line": 10,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;1"
    },
    {
      "cells": [
        "Computers",
        "Computers"
      ],
      "line": 11,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;2"
    },
    {
      "cells": [
        "Electronics",
        "Electronics"
      ],
      "line": 12,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;3"
    },
    {
      "cells": [
        "Apparel",
        "Apparel"
      ],
      "line": 13,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;4"
    },
    {
      "cells": [
        "Digital Downloads",
        "Digital downloads"
      ],
      "line": 14,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;5"
    },
    {
      "cells": [
        "Books",
        "Books"
      ],
      "line": 15,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;6"
    },
    {
      "cells": [
        "Jewelry",
        "Jewelry"
      ],
      "line": 16,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;7"
    },
    {
      "cells": [
        "Gift Cards",
        "Gift Cards"
      ],
      "line": 17,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6253761400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should navigate to all top menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on \"Computers\" from Top Menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I navigate to relevant page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify \"Computers\" of the page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 88700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 12
    }
  ],
  "location": "TopMenuStep.iClickOnFromTopMenu(String)"
});
formatter.result({
  "duration": 3965583900,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuStep.iNavigateToRelevantPageSuccessfully()"
});
formatter.result({
  "duration": 155300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 10
    }
  ],
  "location": "TopMenuStep.iVerifyOfThePage(String)"
});
formatter.result({
  "duration": 169918300,
  "status": "passed"
});
formatter.after({
  "duration": 1991144300,
  "status": "passed"
});
formatter.before({
  "duration": 10112045600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should navigate to all top menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on \"Electronics\" from Top Menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I navigate to relevant page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify \"Electronics\" of the page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 41000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 12
    }
  ],
  "location": "TopMenuStep.iClickOnFromTopMenu(String)"
});
formatter.result({
  "duration": 2561524900,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuStep.iNavigateToRelevantPageSuccessfully()"
});
formatter.result({
  "duration": 30000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 10
    }
  ],
  "location": "TopMenuStep.iVerifyOfThePage(String)"
});
formatter.result({
  "duration": 139760400,
  "status": "passed"
});
formatter.after({
  "duration": 1158111100,
  "status": "passed"
});
formatter.before({
  "duration": 7663588400,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: failed to change window state to \u0027maximized\u0027, current state is \u0027minimized\u0027\n  (Session info: chrome\u003d113.0.5672.93)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c80a2f50c782faacd130b3aedba247e7, maximizeCurrentWindow {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:59321}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59321/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: c80a2f50c782faacd130b3aedba247e7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:598)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:953)\r\n\tat com.nopcommerce.demo.sw6.browserfactory.ManageBrowser.selectBrowser(ManageBrowser.java:32)\r\n\tat com.nopcommerce.demo.sw6.Hooks.setUp(Hooks.java:15)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(Examplformatter.result({
  "duration": 4219284200,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuStep.iNavigateToRelevantPageSuccessfully()"
});
formatter.result({
  "duration": 22300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 10
    }
  ],
  "location": "TopMenuStep.iVerifyOfThePage(String)"
});
formatter.result({
  "duration": 162530600,
  "status": "passed"
});
formatter.after({
  "duration": 1241789900,
  "status": "passed"
});
formatter.before({
  "duration": 8117880100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should navigate to all top menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on \"Jewelry\" from Top Menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I navigate to relevant page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify \"Jewelry\" of the page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 39200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 12
    }
  ],
  "location": "TopMenuStep.iClickOnFromTopMenu(String)"
});
formatter.result({
  "duration": 111282800,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d113.0.5672.93)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [2e33ea8652877096cdabfda8e503f4a0, findElements {using\u003dxpath, value\u003d//ul[@class\u003d\u0027top-menu notmobile\u0027]//li//a}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:59357}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59357/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 2e33ea8652877096cdabfda8e503f4a0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElements(ElementLocation.java:179)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElements(ElementLocation.java:102)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:367)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:359)\r\n\tat com.nopcommerce.demo.sw6.pages.HomePage.selectMenu(HomePage.java:65)\r\n\tat com.nopcommerce.demo.sw6.steps.TopMenuStep.iClickOnFromTopMenu(TopMenuStep.java:16)\r\n\tat ✽.When I click on \"Jewelry\" from Top Menu(TopMenu.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TopMenuStep.iNavigateToRelevantPageSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 10
    }
  ],
  "location": "TopMenuStep.iVerifyOfThePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 39966000,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d113.0.5672.93)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [2e33ea8652877096cdabfda8e503f4a0, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:59357}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59357/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 2e33ea8652877096cdabfda8e503f4a0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:598)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:318)\r\n\tat com.nopcommerce.demo.sw6.utility.Utility.getScreenshot(Utility.java:333)\r\n\tat com.nopcommerce.demo.sw6.Hooks.tearDown(Hooks.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:570)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:717)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:601)\r\n\tat org.testng.TestRunner.run(TestRunner.java:502)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:151)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:197)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:93)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:456)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:169)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:595)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:581)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 13309431700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should navigate to all top menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on \"Gift Cards\" from Top Menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I navigate to relevant page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify \"Gift Cards\" of the page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 38400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 12
    }
  ],
  "location": "TopMenuStep.iClickOnFromTopMenu(String)"
});
formatter.result({
  "duration": 2336638700,
  "error_message": "org.openqa.selenium.WebDriverException: target frame detached\n  (failed to check if window was closed: disconnected: Unable to receive message from renderer)\n  (Session info: chrome\u003d113.0.5672.93)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c8dd247b5dd7d93392db27698ca3b080, clickElement {id\u003d8E1CFC2837750306366B5EF89F1A1462_element_36}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:59385}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59385/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (c8dd247b5dd7d93392db27698ca3b080)] -\u003e xpath: //ul[@class\u003d\u0027top-menu notmobile\u0027]//li//a]\nSession ID: c8dd247b5dd7d93392db27698ca3b080\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:78)\r\n\tat com.nopcommerce.demo.sw6.pages.HomePage.selectMenu(HomePage.java:68)\r\n\tat com.nopcommerce.demo.sw6.steps.TopMenuStep.iClickOnFromTopMenu(TopMenuStep.java:16)\r\n\tat ✽.When I click on \"Gift Cards\" from Top Menu(TopMenu.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TopMenuStep.iNavigateToRelevantPageSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 10
    }
  ],
  "location": "TopMenuStep.iVerifyOfThePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 11980800,
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: not connected to DevTools\n  (failed to check if window was closed: disconnected: not connected to DevTools)\n  (Session info: chrome\u003d113.0.5672.93)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c8dd247b5dd7d93392db27698ca3b080, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:59385}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59385/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: c8dd247b5dd7d93392db27698ca3b080\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(formatter.after({
  "duration": 13357349500,
  "status": "passed"
});
formatter.before({
  "duration": 6156341600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should navigate to all top menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on \"Jewelry\" from Top Menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I navigate to relevant page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify \"Jewelry\" of the page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 50200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 12
    }
  ],
  "location": "TopMenuStep.iClickOnFromTopMenu(String)"
});
formatter.result({
  "duration": 452488600,
  "error_message": "org.openqa.selenium.WebDriverException: target frame detached\n  (failed to check if window was closed: disconnected: Unable to receive message from renderer)\n  (Session info: chrome\u003d113.0.5672.93)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c8c0776c5d3003484f1609829db1b0a6, findElements {using\u003dxpath, value\u003d//ul[@class\u003d\u0027top-menu notmobile\u0027]//li//a}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:59410}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59410/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: c8c0776c5d3003484f1609829db1b0a6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElements(ElementLocation.java:179)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElements(ElementLocation.java:102)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:367)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:359)\r\n\tat com.nopcommerce.demo.sw6.pages.HomePage.selectMenu(HomePage.java:65)\r\n\tat com.nopcommerce.demo.sw6.steps.TopMenuStep.iClickOnFromTopMenu(TopMenuStep.java:16)\r\n\tat ✽.When I click on \"Jewelry\" from Top Menu(TopMenu.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TopMenuStep.iNavigateToRelevantPageSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 10
    }
  ],
  "location": "TopMenuStep.iVerifyOfThePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 60748600,
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: not connected to DevTools\n  (failed to check if window was closed: disconnected: not connected to DevTools)\n  (Session info: chrome\u003d113.0.5672.93)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c8c0776c5d3003484f1609829db1b0a6, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:59410}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59410/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: c8c0776c5d3003484f1609829db1b0a6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:598)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:318)\r\n\tat com.nopcommerce.demo.sw6.utility.Utility.getScreenshot(Utility.java:333)\r\n\tat com.nopcommerce.demo.sw6.Hooks.tearDown(Hooks.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:570)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:717)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:601)\r\n\tat org.testng.TestRunner.run(TestRunner.java:502)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:151)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:197)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:93)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:456)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:169)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:595)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:581)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 6859115200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should navigate to all top menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on \"Gift Cards\" from Top Menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I navigate to relevant page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify \"Gift Cards\" of the page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 72300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 12
    }
  ],
  "location": "TopMenuStep.iClickOnFromTopMenu(String)"
});
formatter.result({
  "duration": 2712495200,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuStep.iNavigateToRelevantPageSuccessfully()"
});
formatter.result({
  "duration": 32000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 10
    }
  ],
  "location": "TopMenuStep.iVerifyOfThePage(String)"
});
formatter.result({
  "duration": 71917300,
  "status": "passed"
});
formatter.after({
  "duration": 1058475900,
  "status": "passed"
});
});