const express = require('express');
const secrets = require('./routes/secretsRouter');

const port = parseInt(process.env.PORT, 10) || 3000;

const app = express();

app.get('/', (req, res) => {
  console.log(req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <html>
    <body>
      hello worldly humans
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}/`);
});

/* forked from https://codesandbox.io/s/r1rqpr9zqq */