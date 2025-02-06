const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/tweets', (req, res) => {
  const mockTweets = [
    { text: 'Check out this token: 0x1234567890123456789012345678901234567890 $TOKEN' },
    { text: 'New token alert: 0x0987654321098765432109876543210987654321 $NEW' },
  ];
  res.json(mockTweets);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});