import { NewAppAngular2Page } from './app.po';

describe('new-app-angular2 App', function() {
  let page: NewAppAngular2Page;

  beforeEach(() => {
    page = new NewAppAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
