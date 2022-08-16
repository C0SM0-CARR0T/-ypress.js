describe('Проверка авторизации Staya', function () {

	it('[+] Правильные логин и пароль', function () {
	cy.visit('https://staya.dog/');
	cy.get('.header-bottom__right--link').click();
	cy.get('.auth-form > form > [type="email"]').type('vir-viktorija-malinina@qa.studio');
	cy.get('.auth-form > form > [type="password"]').type('123qweASD');
	cy.get('.auth-form__submit').click();
	cy.contains('Мои заказы');
	cy.get('button.profile__nav-link').click();
	cy.get('.box__button_ok').click()
	})


	it('[-] Неравильный пароль', function () {
	cy.visit('https://staya.dog/');
	cy.get('.header-bottom__right--link').click();
	cy.get('.auth-form > form > [type="email"]').type('vir-viktorija-malinina@qa.studio');
	cy.get('.auth-form > form > [type="password"]').type('123qweASF');
	cy.get('.auth-form__submit').click();
	cy.contains('Невозможно войти с предоставленными учетными данными')
	})
})

