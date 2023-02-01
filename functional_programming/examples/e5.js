import { MayBe } from '../functors/MayBe.js';

(async () => {
  const BASE_URL = 'https://www.reddit.com';

  const searchRedditApi = async (searchQuery) => {
    try {
      const response = await fetch(`${BASE_URL}/search.json?q=${encodeURIComponent(searchQuery)}`);
      return response.json();
    } catch (error) {
      return { message: 'api failed', error };
    }
  };

  const getComments = async (link) => {
    try {
      const response = await fetch(`${BASE_URL}${link}.json`);
      return response.json();
    } catch (error) {
      return { message: 'api failed', error };
    }
  };

  const mergeViaMayBe = async (searchQuery) => {
    const redditMayBe = MayBe.of(await searchRedditApi(searchQuery));
    return redditMayBe
      .map(({ data }) => data)
      .map(({ children }) => children)
      .map((children) =>
        children.map(({ _kind, data: { title, permalink } }) => {
          return { title, permalink };
        }),
      )
      .map(async (arr) => {
        return arr.map(({ title, permalink }) => {
          return {
            title,
            comments: MayBe.of(getComments(permalink)).join(),
          };
        });
      });
  };

  console.log(await (await mergeViaMayBe('functional programming')).chain(async (x) => x));
})();
