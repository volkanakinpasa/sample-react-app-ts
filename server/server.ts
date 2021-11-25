const express = require('express');
const jsonServer = require('json-server');
const app = express();
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3001;

app.use('/api', jsonServer.router('db.json'));

app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('*', (req: any, res: any) => {
  res
    .status(200)
    .sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
