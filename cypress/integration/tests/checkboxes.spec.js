/// <reference types="cypress" />

import {
  navigateToCheckboxPage,
  validatePage,
  checkAsTrue,
  uncheck,
} from "../../page_objects/checkboxpage_object";

const pageHeading = "Checkboxes";

it("verify checkboxes", () => {
  navigateToCheckboxPage();
  validatePage(pageHeading);
  checkAsTrue();
  uncheck();
});

after(function () {
  // runs once after all tests in the it block
  cy.log("Verify checkboxes TC is succesfull");
});
