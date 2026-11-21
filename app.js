const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from my CI/CD app - version 4');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;

// Start the server only when run directly (not when imported by tests)
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`App listening on port ${port}`));
}