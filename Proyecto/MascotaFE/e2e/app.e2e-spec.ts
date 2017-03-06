import { MascotaFEPage } from './app.po';

describe('mascota-fe App', () => {
  let page: MascotaFEPage;

  beforeEach(() => {
    page = new MascotaFEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
