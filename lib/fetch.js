const fetcher = (url) =>
  fetch(url).then(async (res) => {
    if (!res.ok) {
      let error;
      if (res.status == 404) {
        error = new Error('User Not Found');
      }

      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  });

export default fetcher;
