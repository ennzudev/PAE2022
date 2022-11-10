const express = require('express');
require('dotenv').config();
const database = require('./database');
const path = require('path');
const bodyParser = require("body-parser");
const apiRoutes = require('./src/api');

const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger.json');
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


const port = process.env.PORT || 3000;

app.use('/assets', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use('/api', apiRoutes);
/**
 * @swagger
 * /users:
 *  get:
 *    description: get all users endpoint
 *    parameters:
 *      - in: body|query|path
 *        name: param name
 *        description: param description
 *        schema:
 *          type: string|number|boolean|object
 *    responses:
 *      200:
 *        description: list of all users
 */
app.get('', (req, res) => {
    res.send('api works!');
});



database.connect().then(client => {

  const db = client.db('memegenerator');
  database.db(db);

  app.listen(port, () => {
    console.log('app is running in port ' + port);
  });
}).catch(err => {
  console.log('Failed to connect to database');
});
    
