import { EarthquakePage } from './app.po';

describe('earthquake App', () => {
  let page: EarthquakePage;

  beforeEach(() => {
    page = new EarthquakePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
