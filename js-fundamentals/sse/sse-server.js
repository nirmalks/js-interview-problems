const express = require('express');
const app = express();
app.get('/sse-stream', (req, res) => {
  // `Content-Type` need to be set to `text/event-stream`.
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Each message should be prefixed with data.
  const sendEvent = (data) => res.write(`data: ${data}\n\n`);
  console.log('before send event');
  sendEvent('Hello from server');

  const intervalId = setInterval(() => sendEvent(new Date().toString()), 1000);

  res.on('close', () => {
    console.log('Client closed connection');
    clearInterval(intervalId);
  });
});

app.listen(3000, () => console.log('Server started on port 3000'));
