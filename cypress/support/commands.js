// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { 
    cy.contains("Log in").click();
    if (email) 
        cy.get("#mail").type(email);
    if (password)
        cy.get("#pass").type(password);
    cy.contains("Submit").click();
})

Cypress.Commands.add("generateTitleAuthor", (length) => {
    let name = "";
    let chars =
     "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЧЦЪЫЬЭЮЯабвгдеёжзиёклмнопрстуфхчцъыьэюя 1234567890"; //возможные символы
    let charLength = chars.length; //определяем длину
    for (let i = 0; i < length; i++) {
      //запускаем цикл для формирования строки
      name += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return name;
 });


  Cypress.Commands.add("addNewBook", (title, author, addToFavorite) => {
   
   cy.contains("Add new").click();
   cy.get("#title").type(title);
   cy.get("#authors").type(author);
   if (addToFavorite) {
        cy.get("#favorite").click();
   };
   cy.contains("Submit").click();
 });

 Cypress.Commands.add("compareCollectionsLengthAfterAddingToFavorite", (selector) => {
    cy.get(selector).then((value) => {
        let totalCount = Cypress.$(value).length;
        cy.get(selector).first().click();
        cy.get(selector).should("have.length", totalCount - 1); 
   });
 });
 
 Cypress.Commands.add("compareCollectionsLengthAfterRemovingFromFavorite", (selector) => {
    cy.get(selector).then((value) => {
        let totalCount = Cypress.$(value).length;
        cy.get(selector).first().click();
        cy.get(selector).should("have.length", totalCount - 1); 
   });
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })