fetch('/tweets')
  .then(response => response.json())
  .then(data => {
    const tweetsDiv = document.getElementById('tweets');
    data.forEach(tweet => {
      const p = document.createElement('p');
      p.textContent = tweet.text;
      tweetsDiv.appendChild(p);
    });
  });