class ThirdPartyAPi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getNews(keyword) {
    return fetch(`${this._baseUrl}/?q=${keyword}`,
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`GET-NEWS ERROR: ${res.status}`);
    });
  }
}

export const thirdPartyAPi = new ThirdPartyAPi({
  baseUrl: "https://project-news-explorer-backend.vercel.app/api/news",
});
