const express = require('express');
const PORT = process.env.PORT || 3000;
const URL = process.env.URL || 'mongodb+srv://admin:admin@prueba.t0nnp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

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
    console.log(`Server on PORT ${PORT}`)
});