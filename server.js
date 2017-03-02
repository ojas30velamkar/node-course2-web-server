var express = require('express');

var app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('<h1>Hello express</h1>');
});

app.get('/about', (req, res) => {
  res.send('Help page');
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
