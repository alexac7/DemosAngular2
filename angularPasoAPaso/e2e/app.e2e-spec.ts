import { AngularPasoAPasoPage } from './app.po';

describe('angular-paso-apaso App', function() {
  let page: AngularPasoAPasoPage;

  beforeEach(() => {
    page = new AngularPasoAPasoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
