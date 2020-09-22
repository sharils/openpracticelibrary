describe("Test All Mobius Loop Filters Work as Expected", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-testid="site-logo"]').should("be.visible");
  });
  it("Verifies the Foundation Tag link", () => {
    cy.get('[data-testid="foundation-button"]').click();
    cy.url().should("include", "/tags/foundation");
  });
  it("Verifies the Discovery Tag link", () => {
    cy.get('[data-testid="discovery-button"]').click();
    cy.url().should("include", "/tags/discovery");
  });
  it("Verifies the Options Tag link", () => {
    cy.get('[data-testid="options-button"]').click();
    cy.url().should("include", "/tags/options");
  });
  it("Verifies the Delivery Tag link", () => {
    cy.get('[data-testid="delivery-button"]').click();
    cy.url().should("include", "/tags/delivery");
  });
});
