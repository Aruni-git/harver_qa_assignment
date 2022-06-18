export function navigateToCheckboxPage() {
  //click on checkbox
  cy.get("#content > ul > li:nth-child(6) > a").click();
}

export function validatePage(expectedText) {
  //verify page heading
  cy.get("h3").should("have.text", expectedText);
}

export function checkAsTrue() {
  //mark check box as true
  cy.get("#checkboxes > :nth-child(1)").click();
  cy.get('[checked=""]').should("be.checked");
}

export function uncheck() {
  //uncheck checkbox
  cy.get("#checkboxes > :nth-child(1)").click();
  cy.get("#checkboxes > :nth-child(1)").should("not.be.checked");
}
