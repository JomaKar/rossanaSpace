import { RossanaSpacePage } from './app.po';

describe('rossana-space App', function() {
  let page: RossanaSpacePage;

  beforeEach(() => {
    page = new RossanaSpacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
