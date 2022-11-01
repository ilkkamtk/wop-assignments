'use strict';
const express = require('express');
const catRoute = require('./routes/catRoute');
const app = express();
const port = 3000;

app.use('/cat', catRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
