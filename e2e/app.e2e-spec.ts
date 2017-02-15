import { TmFrontPage } from './app.po';

describe('tm-front App', function() {
  let page: TmFrontPage;

  beforeEach(() => {
    page = new TmFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
