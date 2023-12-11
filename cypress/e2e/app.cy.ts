describe(`some test context`, () => {
    it('home page', () => {
        cy.visit('/')
        cy.contains('test value')
    })
})

export {}
