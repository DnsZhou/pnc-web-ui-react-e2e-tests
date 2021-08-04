// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

context('When page is opened', () => {
  beforeEach(() => {
    cy.fixture('env').then(function (env) {
      this.env = env;
      cy.visit(this.env.rootUrl);
    });
  });

  it('should have 11 section tabs', function () {
    cy.get('.pf-c-nav__list li').should('have.length', 11);
  });

  it('should access dashboard page', function () {
    cy.get('a').contains('Dashboard').click();
    cy.get('h1').contains('DashboardPage');
  });

  it('should access Products page', function () {
    cy.get('a').contains('Products').click();
    cy.get('h1').contains('ProductsPage');
  });

  it('should access Projects page', function () {
    cy.get('a').contains('Projects').click();
    cy.get('h1').contains('ProjectsPage Title');
  });

  it('should access BuildConfigs page', function () {
    cy.get('button').contains('Configs').click();
    cy.get('a').contains('Build Configs').click();
    cy.get('h1').contains('BuildConfigsPage');
  });

  it('should access GroupConfigs page', function () {
    cy.get('button').contains('Configs').click();
    cy.get('a').contains('Group Configs').click();
    cy.get('h1').contains('GroupConfigsPage');
  });

  it('should access Builds page', function () {
    cy.get('button').contains('Builds').click();
    cy.get('a').contains('Builds').click();
    cy.get('h1').contains('BuildsPage');
  });

  it('should access Group Builds page', function () {
    cy.get('button').contains('Builds').click();
    cy.get('a').contains('Group Builds').click();
    cy.get('h1').contains('GroupBuildsPage');
  });

  it('should access Artifacts page', function () {
    cy.get('a').contains('Artifacts').click();
    cy.get('h1').contains('ArtifactsPage');
  });

  it('should access SCM Repositories page', function () {
    cy.get('a').contains('SCM Repositories').click();
    cy.get('h1').contains('ScmRepositoriesPage');
  });
});
