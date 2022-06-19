export function navigateToAddRemoveElementsPage() {
  //click on add/remove elements
 cy.contains("a", "Add/Remove Elements").click();
}

export function validatePage(expectedText) {
  //verify page heading
  cy.get("h3").should("have.text", expectedText);
}

export function addAnElement() {
  //add an element
  cy.get('[onclick="addElement()"]').click();
  cy.get(".added-manually").should("be.visible");
}

export function addSecondElement() {
  //add second element
  cy.get('[onclick="addElement()"]').click();
  cy.get(".added-manually").should("be.visible");
}

export function removeAnElement() {
  //remove an elemnt
  cy.get("#elements > :nth-child(1)").click();
}
