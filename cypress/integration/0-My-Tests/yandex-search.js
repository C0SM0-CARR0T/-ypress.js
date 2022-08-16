describe('Тестирование Яндекс поиск', function () {

	it('Поиск котят', function () {
	cy.visit('https://yandex.ru/');
	cy.get('#text').type('Котята{enter}');
	cy.get('.Composite > :nth-child(1) > .UniSearchHeader > .Link > .UniSearchHeader-Title-Text')
	})

})