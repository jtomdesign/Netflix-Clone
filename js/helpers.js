//getJSON

export const getJSON = async function (url, post) {
  try {
    const res = await fetch(url, post);
    return await res.json();
  } catch (err) {
    throw err;
  }
};

export const post = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: 'joeltmb', password: '1111joel' }),
};
