describe('Repeat after lector', () => {
  beforeEach(() => {
      cy.visit("/");
  })

  it('Логин в библиотеку', () => {
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible",true);
  });

  it("Ввод пустого пароля при логине", () => {
    cy.login("bropet@mail.ru", null);
    cy.get("#pass").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
    });
  });

  it("Ввод пустого email при логине", () => {
    cy.login(null, "123");
    cy.get("#mail").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
    });
  });

  
  
  it.only("Добавление книги в библиотеку", () => {
   
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible", true);
    cy.contains("Add new").should("be.visible", true);
    //cy.contains("Add new").click();
    //cy.generateTitleAuthor(8);
    //cy.contains("Submit").click();
    let expectedLength;
    cy.definedLength(".btn-success", expectedLength);
    cy.get(".btn.btn-success").should("have.length", expectedLength); 
            
  });

    
  
})