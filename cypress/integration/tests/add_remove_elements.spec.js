/// <reference types="cypress" />

import {
  navigateToCheckboxPage,
  validatePage,
  addAnElement,
  addSecondElement,
  removeAnElement,
  navigateToAddRemoveElementsPage,
} from "../../page_objects/add_remove_elementspageobject";

const pageHeading = "Add/Remove Elements";

it("verify add/remove elements", () => {
  navigateToAddRemoveElementsPage();
  validatePage(pageHeading);
  addAnElement();
  addSecondElement();
  removeAnElement();
});

after(function () {
  // runs once after all tests in the it block
  cy.log("Verify add/remove elements TC is succesfull");
});
