/// <reference types="cypress" />

import {
  navigateToDissaperingElementsPage,
  validatePage,
  clickHome,
  clickAbout,
} from "../../page_objects/dissapearing_elements_pageobject";

const pageHeading = "Disappearing Elements";
const expectedTextHomePage = "Welcome to the-internet";
const currentURL = "https://the-internet.herokuapp.com/about/";

it("verify Disappearing elements", () => {
  navigateToDissaperingElementsPage();
  validatePage(pageHeading);
  clickHome(expectedTextHomePage);
  navigateToDissaperingElementsPage();
  clickAbout(currentURL);
});

after(function () {
  // runs once after all tests in the it block
  cy.log("Verify Disappearing Elements TC is succesfull");
});
