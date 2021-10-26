const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const URL = process.env.URL;

// Connection file
const db = require('./db');

// Project routes
const router = require('./network/routes');

// Database connection
db(URL);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// create necessary routes
router(app);

app.listen(PORT, () => {
  console.log(`Server on PORT ${PORT}`);
});
