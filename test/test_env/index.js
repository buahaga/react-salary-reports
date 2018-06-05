const express = require('express');

const app = express();
const port = 3001;
app.use('/', express.static('build'));

module.exports = () => {
  app.listen(port);
};
