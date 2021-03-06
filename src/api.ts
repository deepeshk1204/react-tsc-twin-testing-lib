const fetchJokes = (url: string, callback: Function) => {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      callback(res);
    });
};

export { fetchJokes };
