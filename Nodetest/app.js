
// 1) CALLBACK STYLE
function fetchRandomDogCallback(callback) {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then(data => callback(null, data))
    .catch(err => callback(err));
}

// 2) PROMISE STYLE
function fetchRandomDogPromise() {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    });
}

// 3) ASYNC/AWAIT STYLE
async function fetchRandomDogAsync() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}


// CALLBACK
fetchRandomDogCallback((err, data) => {
  if (err) {
    console.error('Callback Error:', err.message);
  } else {
    console.log('Callback:', data);
  }
});

// PROMISE
fetchRandomDogPromise()
  .then(data => console.log('Promise:', data))
  .catch(err => console.error('Promise Error:', err.message));

// ASYNC/AWAIT wrapped in an IIFE
(async () => {
  try {
    const data = await fetchRandomDogAsync();
    console.log('Async/Await:', data);
  } catch (err) {
    console.error('Async/Await Error:', err.message);
  }
})();