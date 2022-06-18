export function navigateToDissaperingElementsPage() {
  //click on dissapearing elemnts
  cy.get(":nth-child(9) > a").click();
}

export function validatePage(expectedText) {
  //verify page heading
  cy.get("h3").should("have.text", expectedText);
}

export function clickHome(expectedTextHomePage) {
  //Click on home
  cy.get(":nth-child(1) > a").click();
  cy.get("h1").should("have.text", "Welcome to the-internet");
}

export function clickAbout(currentURL) {
  //click on about
  cy.get(":nth-child(4) > :nth-child(2) > a").click();
  cy.get("h1").should("have.text", "Not Found");

  //verify current url
  cy.url().should("eq", currentURL);
}
