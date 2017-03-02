var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('<h1>Hello express</h1>');
});

app.get('/about', (req, res) => {
  res.send('Help page');
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});
