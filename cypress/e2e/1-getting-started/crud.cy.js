/// <reference types="cypress" />

beforeEach(()=>{
  cy.visit('http://localhost:4200/')
})

describe("Validar crud",function(){
  it('Completar formulario', ()=>{
    cy.get('[formcontrolname="FirstName"]').type("Candy");
    cy.get('[formcontrolname="LastName"]').type("Mercedes");
    cy.get('[type="email"]').type("CandyM@gmail.com");
    cy.get('[formcontrolname="Job"]').type("SQA");
    cy.get('[type="tel"]').type(8097654423);
    cy.get('form.ng-dirty > .btn').click()
  
  })
})