//const { generateTitleAuth } = require("./support/util.js");

describe("Электронная библиотека", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  

  context("Логин в электронную библиотеку", () => {

      it("Логин в библиотеку", () => {
        cy.login("bropet@mail.ru", "123");
        cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible", true);
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
    })
  
  context("Добавление и удаление книг из Избранного", () => {
      let title = "";
      let author = "";

      beforeEach(() => {
        cy.login("bropet@mail.ru", "123");
        cy.contains("Добро пожаловать bropet@mail.ru").should(
          "be.visible",
          true
        );
        cy.contains("Add new").should("be.visible", true);
        //сгенерируем название и автора книги длиной от 1 до 10
        title = generateTitleAuthor(Math.floor(Math.random() * 10 + 1));
        author = generateTitleAuthor(Math.floor(Math.random() * 10 + 1));
      })
      //генератор имен определенной длины
      const generateTitleAuthor = (length) => {
        
        let name = "";
        let chars =
          "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЧЦЪЫЬЭЮЯабвгдеёжзиёклмнопрстуфхчцъыьэюя 1234567890"; //возможные символы
        let charLength = chars.length; //определяем длину
        for (let i = 0; i < length; i++) {
          //запускаем цикл для формирования строки
          name += chars.charAt(Math.floor(Math.random() * charLength));
        }
        return name;
      };

      it("Добавление книги в Избранное и сравнение кол-ва элементов, не добавленных в Избранное, до и после добавления", () => {
        //добавим книгу в библиотеку, но не в Избранное
        cy.addNewBook(title, author, false);
        //обновим страницу
        cy.reload();
        //сравним кол-во элементов, не добавленных в Избранное, до и после добавления в Избранное одной из книг
        cy.compareCollectionsLengthAfterAddingToFavorite(".btn-success");
      });

      it("Добавление книги в Избранное при создании книги", () => {
        //добавим книгу в библиотеку и в Избранное
        cy.addNewBook(title, author, true);
        //зайдем в избранное и проверим, видна ли наша добавленная книга
        cy.contains("Favorites").click();
        cy.get(".card-title").contains(title).should("be.visible", true);
        cy.get(".card-text").contains(author).should("be.visible", true);
      });

      it("Удаление книги из Избранного", () => {
        //добавим книгу в библиотеку и в Избранное, чтобы точно была в Избранном хотя бы одна книга
        cy.addNewBook(title, author, true);
        cy.contains("Favorites").click();
        cy.compareCollectionsLengthAfterRemovingFromFavorite(".btn-secondary");
      });
    })
});
