Cypress.Commands.add('getElement', (id, options) => {
  return (cy.get(`[data-cy=${id}]`, {
    timeout: 5000,
    ...options,
  }) as unknown) as Cypress.Chainable<Element>;
});

export {};
