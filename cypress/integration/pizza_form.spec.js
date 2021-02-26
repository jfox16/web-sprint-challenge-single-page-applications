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

  const checkBoxes = () => cy.get('input[type=checkbox]');

  it('can have multiple toppings selected', () => {
    checkBoxes().should('exist')
    .check();
  });

  const submitBtn = () => cy.get('button');

  it('can be submitted and errors work', () => {
    submitBtn().should('exist').click();
    cy.contains('No name provided.');

    nameInput().type('Jonathan Fox');
    submitBtn().click();
    cy.contains('Must choose at least 4 toppings.');

    checkBoxes().check();
    submitBtn().click();
  });


});