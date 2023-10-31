const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  res.json({
    msg:'Hello World...This is test end point'
    });
});

app.get('/test/show', (req, res) => {
  res.json({
    msg:'Hello World...This is show endpoint'
    });
});

app.listen(3000);
console.log('Server is listening on port 3000')
