const express = require('express');

secretsRouter.route('/')
.get((req, res) => {
    console.log('secrets router started correctly');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(`
    <html>
    <body>
      poop is tasty with enough salsa
    </body>
    </html>
  `);
})

module.exports = secretsRouter;