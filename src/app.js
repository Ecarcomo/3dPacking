//Dependences imports
const express = require('express');
//Local imports
const apiRouter = require('./routes/router');

/**
 * @description Configure Express middleware and settings
 */
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());      // Parse JSON body content
app.use('/api',apiRouter);    // Mount the API routes with express-validator




/**
 * @description Start the Express server
 */
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});




module.exports = app;