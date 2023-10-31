const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    msg:'Hello World...This is update message from shakib khan'
    });
});

app.get('/test/show', (req, res) => {
  res.json({
    msg:'Hello World...This is update message'
    });
});

app.listen(3000);
console.log('Server is listening on port 3000')
