
Feature('CriaProposta');

Scenario('test something', (I) => {
    I.amOnPage('/');
    I.see('Bem-vindo');
    I.fillField('//label[contains(text(),"Usuário")]/../../input[@id="md-input-0"]', 'rtulio');
    I.fillField('//label[contains(text(),"Senha")]/../../input[@id="md-input-1"]', 'trocar123');
    I.click('//div[@fxhide.xs="true"]//button');
    I.wait(5);
});
