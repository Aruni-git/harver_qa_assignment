/// <reference types="cypress" />

import {
  navigateToDropDownPage,
  validatePage,
  selectAnOption,
} from "../../page_objects/dropdown_pageobjects";

const pageHeading = "Dropdown List";
const selectValue = "Option 1";
const expectedValue = "1";

it("verify Dropdown List", () => {
  navigateToDropDownPage();
  validatePage(pageHeading);
  selectAnOption(selectValue, expectedValue);
});

after(function () {
  // runs once after all tests in the it block
  cy.log("Verify Dropdown List TC is succesfull");
});
