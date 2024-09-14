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
   let title = ""; //здесь будем хранить результат
   let author = "";
   let chars =
     "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЧЦЪЫЬЭЮЯабвгдеёжзиёклмнопрстуфхчцъыьэюя 1234567890"; //возможные символы
   let charLength = chars.length; //определяем длину
   for (let i = 0; i < length; i++) {
     //запускаем цикл для формирования строки
     title += chars.charAt(Math.floor(Math.random() * charLength));
     author += chars.charAt(Math.floor(Math.random() * charLength));
   }
   cy.get("#title").type(title);
   cy.get("#authors").type(author);
 });

 

 Cypress.Commands.add("definedLength", (selector, expectedLength) => {
   //вариант 1
   //expectedLength = cy.get(selector).then((elements) => {elements.length});

   //вариант 2
   let totalCount;
   cy.get(selector).then((value, totalCount) => {
     totalCount = Cypress.$(value).length;
     expect(value).to.have.length(totalCount);
   });
   expectedLength = totalCount;
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