/// <reference types="cypress" />

describe("Accomplishment Dashboard", () => {

    beforeEach(() => {
        cy.visit("/accomplishments")
    })

    it("Should showcase error message if info is missing", () => {
        cy.get("[data-cy='accomplishment-title-input']").type("My baskeball accomplishment")
        cy.get("[data-cy='accomplishment-input']").type("I made 10 three in a row") 
        cy.contains("Submit Accomplishment").click()
        cy.contains("Complete the items above to continue").should("be.visible")
    })

    it("sould display display validation component if all infomrmation is input", () => {
        cy.get("[data-cy='accomplishment-title-input']").type("My baskeball accomplishment")
        cy.get("[data-cy='accomplishment-input']").type("I made 10 three in a row") 
        cy.get("[type='checkbox']").click()
        cy.contains("Submit Accomplishment").click()
        cy.contains("This Accomplisment was Successfully Submitted").should("be.visible")
    })

    it("sould return back to accomplishment dashboard with empty inputs when go back button is clicked", () => {
        cy.get("[data-cy='accomplishment-title-input']").type("My baskeball accomplishment")
        cy.get("[data-cy='accomplishment-input']").type("I made 10 three in a row") 
        cy.get("[type='checkbox']").click()
        cy.contains("Submit Accomplishment").click()
        cy.contains("Go Back").click()
        cy.contains("h2", "Accomplishment").should("be.visible")
        cy.get("[data-cy='accomplishment-title-input']").should("have.value","")
        cy.get("[data-cy='accomplishment-input']").should("have.value","")
        cy.get("[type='checkbox']").should("not.be.checked")
    })

}) 