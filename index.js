const express = require('express');
const app = express();

const data = {
  cash: 100000.00,
  stocks: [
    { symbol: 'AAPL', quantity: 1 },
    { symbol: 'GOOG', quantity: 2 }
  ]
};

app.get('/cash', (_, res) => res.send({cash: data.cash}));

app.get('/stocks', (_, res) => res.send(data.stocks));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
