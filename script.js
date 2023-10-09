//your JS code here. If required.

state: "failed",
body: () => {
  cy.get("#article").should("have.css", "flex", "3 1 0%");
  cy.get("#aside").should("have.css", "flex", "1 1 0%");
}

