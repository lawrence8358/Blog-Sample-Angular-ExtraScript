import { BlogSampleAngularExtraScriptPage } from './app.po';

describe('blog-sample-angular-extra-script App', () => {
  let page: BlogSampleAngularExtraScriptPage;

  beforeEach(() => {
    page = new BlogSampleAngularExtraScriptPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
