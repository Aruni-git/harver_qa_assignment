export function navigateToContextMenuPage() {
  //click on context menu
  cy.contains("a", "Context Menu").click();
}

export function validatePage(expectedText) {
  //verify page heading
  cy.get("h3").should("have.text", expectedText);
}

export function clickTheBox() {
  //Right clik on the box
  cy.get("#hot-spot").rightclick();
}

export function verifyOpenAlert(expectedAlertText) {
  //verify alert is opened up
  cy.on("window:alert", (text) => {
    expect(text).to.contains(expectedAlertText);
  });
}
