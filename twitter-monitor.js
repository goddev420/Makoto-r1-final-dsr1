const { TwitterApi } = require('twitter-api-v2');
require('dotenv').config();

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

const monitorTweets = async () => {
  try {
    const stream = await client.v2.stream('tweets/search/stream', {
      expansions: ['author_id'],
    });

    stream.on('data', (tweet) => {
      console.log(`New tweet: ${tweet.text}`);
      processTweet(tweet);
    });

    stream.on('error', (err) => {
      console.error('Error in Twitter stream:', err);
      setTimeout(monitorTweets, 5000); // Reconnect after 5 seconds
    });

    stream.on('end', () => {
      console.warn('Twitter stream ended. Attempting to reconnect...');
      setTimeout(monitorTweets, 5000); // Reconnect after 5 seconds
    });
  } catch (error) {
    console.error('Failed to start Twitter stream:', error);
    setTimeout(monitorTweets, 5000); // Reconnect after 5 seconds
  }
};

const processTweet = (tweet) => {
  const parsedData = parseTokenDetails(tweet.text);
  if (parsedData) {
    console.log('Detected token:', parsedData);
    snipeToken(parsedData);
  }
};

const parseTokenDetails = (text) => {
  const regex = /(0x[a-fA-F0-9]{40})|(\$[A-Z]{2,10})/g;
  const matches = text.match(regex);
  return matches ? { contractAddress: matches[0], ticker: matches[1] } : null;
};

monitorTweets();