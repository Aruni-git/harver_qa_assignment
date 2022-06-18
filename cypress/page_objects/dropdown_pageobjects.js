export function navigateToDropDownPage() {
  //click on drop down
  cy.get(":nth-child(11) > a").click();
}

export function validatePage(expectedText) {
  //verify page heading
  cy.get("h3").should("have.text", expectedText);
}

export function selectAnOption(selectValue, expectedValue) {
  //click on drop down and select the first option
  cy.get("#dropdown").select(selectValue);
  cy.get("#dropdown").should("have.value", expectedValue);
}
