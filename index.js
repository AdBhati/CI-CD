const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    msg:'Hello World this is done by divyanshu'
    });
});

app.listen(3000);
console.log('Server is listening on port 3000 updated code....')