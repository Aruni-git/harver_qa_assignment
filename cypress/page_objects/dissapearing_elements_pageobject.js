export function navigateToDissaperingElementsPage() {
  //click on dissapearing elemnts
  cy.contains("a", "Disappearing Elements").click();
}

export function validatePage(expectedText) {
  //verify page heading
  cy.get("h3").should("have.text", expectedText);
}

export function clickHome(expectedTextHomePage) {
  //Click on home
  cy.contains("a","Home").click();
  cy.get("h1").should("have.text", "Welcome to the-internet");
}

export function clickAbout(currentURL) {
  //click on about
  cy.contains('About').click()
  cy.get("h1").should("have.text", "Not Found");

  //verify current url
  cy.url().should("eq", currentURL);
}
