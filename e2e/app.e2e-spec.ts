import { TaskCardsPage } from './app.po';

describe('task-cards App', () => {
  let page: TaskCardsPage;

  beforeEach(() => {
    page = new TaskCardsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tc works!');
  });
});
