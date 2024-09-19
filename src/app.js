//Dependences imports
const express = require('express');
const cors = require('cors');
//Local imports
const apiRouter = require('./routes/router');

/**
 * @description Configure Express middleware and settings
 */
const app = express();
app.use(cors({
  origin: 'http://127.0.0.1:4173', // Your frontend's origin
}));
const port = process.env.PORT || 5501;
app.use(express.json());      // Parse JSON body content
app.use('/api',apiRouter);    // Mount the API routes with express-validator





/**
 * @description Start the Express server
 */
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});




module.exports = app;