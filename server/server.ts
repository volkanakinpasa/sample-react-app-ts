import express from 'express';
const app = express();
var cors = require('cors');
const port = process.env.PORT || 3001;

app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

app.get('/search', (req, res) => {
  res.send([
    { id: 1, name: 'item 1' },
    { id: 2, name: 'item 2' },
    { id: 3, name: 'item 3' },
  ]);
});
