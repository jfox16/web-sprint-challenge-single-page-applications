describe('Pizza Ordering Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza');
  });

  it('obeys the laws of the universe', () => {
    expect(1 + 1).to.equal(2)
    expect(1 + 1).not.to.equal(3);
  });

  const nameInput = () => cy.get('input[name=name]');
  const specialInstrInput = () => cy.get('textarea[name=specialInstructions]');

  it('can have text added', () => {
    nameInput().should('exist')
    .clear()
    .type('Testathan Tox');
    specialInstrInput().should('exist')
    .clear()
    .type('I want it burnt');
  });


});