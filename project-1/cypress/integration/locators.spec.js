/// <reference types="cypress" />

describe("Locators", () => {

    beforeEach(() => {
        cy.visit("/elements")
    });

    ////////////////////////////////
    // SELECTING ELEMENTS
    ////////////////////////////////

    it("locating elements with get", () => {

        // GET ELEMENTS BY TAG NAME
        cy.get("button")

        //GET ALL BY CLASSNAME
        cy.get(".btn-with-class")

        //GET ALL ELEMENTS WITH SPECIFIC CLASSNAMES
        cy.get("[class='Elements-btn btn-with-class']")
        cy.get("[class='Elements-btn btn-with-class more-btn-classes']")

        //GET ALL ELEMENTS BY ID
        cy.get("#btn-with-id")

        //GET ALL ELEMENTS WITH SPECIFIC ATTRIBUTE
        cy.get("[type='submit']")

        //GET ALL ELEMENTS BY TAG NAME AND CLASSNAME
        cy.get("button.Elements-btn")

        //GET ALL ELEMENTS BY TAG AND CLASSNAME and ID
        cy.get("button.Elements-btn#btn-with-id")

        //GET ALL ELEMEMENT BY TAG AND CLASSNAME AND TYPE ATTRIBUTE
        cy.get("button.Elements-btn[type='submit']")

        //GET ALL ELEMENTS WITH SPECIFIC DATA TEST ID
        cy.get("[data-cy='btn-id-1']")
        cy.getByTestId("btn-id-1")

    })

    it("Locating elements with contains", () => {
        //GET ELEMENT BY TEXT
        cy.contains("Unique Text")

        //GET ELEMENTS BY TEXT(return the fisrt element that matches)
        cy.contains("Not Unique Text")

        //WITH SELECTOR
        cy.contains("[type='submit']", "Unique Text")
        cy.contains("form", "Not Unique Text")

        cy.get("[type='submit']").contains("Unique Text")
    })

    it("Locating elements find", () => {
        cy.get("#form-1").find(".btn-1")
        cy.get("#form-1").find(".btn-2")
    })
    ////////////////////////////////
    ////////////////////////////////


    
})