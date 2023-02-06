import signupPage from "../pages/SignupPage"; //minusculo para já vir instânciada

describe("Code Leap Network Feed Post Modal", () => {
  it("New post with data", () => {
    signupPage.go();
    signupPage.login();
    cy.get("input").click().type("Novo Título");
    cy.get("textarea").click().type("Novo Conteúdo");
    cy.get(".sc-bczRLJ").click();
  });

  it("Try to create post with no data", () => {
    signupPage.go();
    signupPage.login();
    cy.get("input").click();
    cy.get("textarea").click();
    cy.get(".sc-bczRLJ").click({ force: true });
  });
});

describe("Test input fields", () => {
  it("Enter data in Title field", () => {
    signupPage.go();
    signupPage.login();
    cy.get('input[name="title"]')
      .type("Test title")
      .should("have.value", "Test title");
  });

  it("Enter data in Content field", () => {
    signupPage.go();
    signupPage.login();
    cy.get('textarea[name="content"]')
      .type("Test content")
      .should("have.value", "Test content");
  });
});

describe("Test overflow fields in feed page", () => {
  it("Verifies overflow in title field", () => {
    signupPage.go();
    signupPage.login();
    cy.get("input").should("have.css", "overflow", "visible");
  });
  it("Verifies overflow in content field", () => {
    signupPage.go();
    signupPage.login();
    cy.get("textarea").should("have.css", "overflow", "auto");
  });
});

describe("Title with more than 100 characters", function () {
  it("Displays error message when title is longer than 100 characters", function () {
    signupPage.go();
    signupPage.login();
    cy.get('input[name="title"]').type(
      "This is a very long title that exceeds the limit of 100 characters and should display an error message"
    );
    cy.get("textarea").click().type("Novo Conteúdo");
    cy.get(".sc-bczRLJ").click({ force: true });
    cy.get(".error-message")
      .should("be.visible")
      .and("contain", "Title exceeded the limit of 100 characters");
  });

  it("Displays error message when content is longer than 500 characters", function () {
    signupPage.go();
    signupPage.login();
    cy.get("textarea").type(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    );
    cy.get("input").click().type("Novo Título");
    cy.get(".sc-bczRLJ").click({ force: true });
    cy.get(".error-message")
      .should("be.visible")
      .and("contain", "Title exceeded the limit of 100 characters");
  });
});

describe("Editing a post with authorization", function () {
  it("Click in post that i created for me and edit this", function () {
    signupPage.go();
    signupPage.login();
    cy.get(":nth-child(1) > .sc-gKXOVf > div > :nth-child(2)").click();
    cy.get(".sc-jSMfEi").should("be.visible");
    cy.get(".sc-jSMfEi > :nth-child(2) > input").should("be.visible");
    cy.get(".sc-jSMfEi > :nth-child(3) > textarea").should("be.visible");
    cy.get(".sc-jSMfEi > :nth-child(2) > input")
      .clear()
      .click()
      .type("TÍTULO DE EDIÇÃO");
    cy.get(".sc-jSMfEi > :nth-child(3) > textarea")
      .clear()
      .click()
      .type("TEXTO DE EDIÇÃO");
    cy.contains("SAVE").click();
  });
});
