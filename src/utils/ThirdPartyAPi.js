class ThirdPartyAPi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getNews(keyword) {
    return fetch(`${this._baseUrl}/everything?q=${keyword}&pageSize=100`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`GET-NEWS ERROR: ${res.status}`);
    });
  }
}

export const thirdPartyAPi = new ThirdPartyAPi({
  baseUrl: "https://newsapi.org/v2",
  headers: {
    "X-Api-Key": "52f6a79630ec4e72805e99ae78afa694",
  },
});
