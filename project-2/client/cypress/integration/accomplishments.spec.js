/// <reference types="cypress" />

describe("Accomplisments dashboard", () => {
    beforeEach(() => {
        cy.visit("/accomplishments")
    })

    // it("Should display inappropriate content when text includes giraffe", () => {
    //     cy.get("[placeholder='Title']").type("This is my accomplishment");
    //     cy.get("[placeholder='My accomplishment...']").type("TI pet a giraffe");    
    //     cy.get("[type='checkbox']").click()
    //     cy.get("button").click()
    //     cy.contains("Your content is not appropriate").should("be.visible")     
    // })

    it("Should display inappropriate content when text includes giraffe with a Mock", () => {

        cy.intercept("POST", "http://localhost:4000/",(req) => {
            req.reply((res) => {
                res.send({
                    msg:"Your content is not appropriate"
                })
            })
        });

        cy.get("[placeholder='Title']").type("This is my accomplishment");
        cy.get("[placeholder='My accomplishment...']").type("I pet a giraffe");    
        cy.get("[type='checkbox']").click()
        cy.get("button").click()
        cy.contains("Your content is not appropriate").should("be.visible")     
    })
})