export function navigateToCheckboxPage() {
  //click on checkbox
  cy.contains("a", "Checkboxes").click();
}

export function validatePage(expectedText) {
  //verify page heading
  cy.get("h3").should("have.text", expectedText);
}

export function checkAsTrue() {
  //mark check box as true
 cy.contains("checkbox 1").click();
  cy.get('[checked=""]').should("be.checked");
}

export function uncheck() {
  //uncheck checkbox
  cy.contains("checkbox 1").click();
  cy.contains("checkbox 1").should("not.be.checked");
}
