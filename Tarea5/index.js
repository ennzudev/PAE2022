const express = require('express');
require('dotenv').config();
const bodyParser = require("body-parser");
const database = require('./database');
const path = require('path');
const apiRoutes = require('./src/api');


const app = express();

const port = process.env.PORT || 3000;

app.use('/assets', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.get('', (req, res) => {
    res.send('api works!');
});



database.connect().then(client => {

  const db = client.db('memegenerator');
  database.db(db);

  app.listen(port, () => {
    console.log('App is running in port ' + port);
  });
}).catch(err => {
  console.log('Failed to connect to database');
});
    
