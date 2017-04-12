import { Ejemp0Page } from './app.po';

describe('ejemp0 App', function() {
  let page: Ejemp0Page;

  beforeEach(() => {
    page = new Ejemp0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
