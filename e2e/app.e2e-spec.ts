import { Movies2Page } from './app.po';

describe('movies2 App', () => {
  let page: Movies2Page;

  beforeEach(() => {
    page = new Movies2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
