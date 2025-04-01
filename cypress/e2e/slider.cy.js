describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});



describe('Galeria - Test responsywności Swiper', () => {
  const devices = [
    { name: 'desktop', width: 1280, height: 800 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'mobile', width: 375, height: 812 }
  ];

  devices.forEach((device) => {
    it(`Sprawdzenie galerii na ${device.name}`, () => {
      cy.viewport(device.width, device.height);
      cy.visit('http://localhost:3000');

      // Sprawdzenie, czy slider Swiper jest widoczny
      cy.get('.swiper').should('be.visible');
      
      // Sprawdzenie, czy obrazy w sliderze są poprawnie załadowane
      cy.get('.swiper-slide img').should('be.visible');
      
      // Sprawdzenie dostępności i klikalności przycisków nawigacji
      cy.get('.swiper-button-prev').should('be.visible').click();
      cy.get('.swiper-button-next').should('be.visible').click();

      // Sprawdzenie, czy paginacja jest widoczna
      cy.get('.swiper-pagination').should('be.visible');
    });
  });
});

