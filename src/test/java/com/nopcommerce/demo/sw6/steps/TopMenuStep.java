package com.nopcommerce.demo.sw6.steps;

import com.nopcommerce.demo.sw6.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TopMenuStep {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on \"([^\"]*)\" from Top Menu$")
    public void iClickOnFromTopMenu(String option)  {
        new HomePage().selectMenu(option);

    }

    @And("^I navigate to relevant page successfully$")
    public void iNavigateToRelevantPageSuccessfully() {
    }

    @Then("^I verify \"([^\"]*)\" of the page$")
    public void iVerifyOfThePage(String title)  {
        new HomePage().verifyPageTitle(title);

    }
}

