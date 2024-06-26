describe("Options Component", () => {
  it("Should open AboutUs page when ActionSheet option is selected", () => {
    cy.visit("http://localhost:8081");
    cy.visit("/main");
    cy.get('[data-testid="options-menu"]').should("be.visible");
    cy.get('[data-testid="options-menu"]').click();
    cy.get("body").contains("Logout").should("be.visible");
    cy.get("body").contains("About Us").should("be.visible");
    cy.get("body").contains("About Us").click();
    cy.url().should("include", "/aboutUs");
  });
  it("should make the GitHub link clickable and navigate correctly", () => {
    cy.visit("http://localhost:8081/aboutUs");
    cy.get('[data-testid="github-link"]').should("be.visible");
    cy.get('[data-testid="github-link"]').click();
    cy.window().then((win) => {
      cy.stub(win, "open").as("open");
    });
    cy.get('[data-testid="github-link"]').click();
    cy.get("@open").should(
      "be.calledWith",
      "https://github.com/gabrielalustosa/carinfo.git"
    );
  });
});
