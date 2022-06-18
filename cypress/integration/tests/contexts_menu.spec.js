/// <reference types="cypress" />

import {
  navigateToContextMenuPage,
  validatePage,
  clickTheBox,
  verifyOpenAlert,
} from "../../page_objects/context_menu_pageobject";

const pageHeading = "Context Menu";
const expectedAlertText = "You selected a context menu"

it("verify context menu", () => {
  navigateToContextMenuPage();
  validatePage(pageHeading);
  clickTheBox();
  verifyOpenAlert(expectedAlertText)
});

after(function () {
  // runs once after all tests in the it block
  cy.log("Verify context menu TC is succesfull")
})