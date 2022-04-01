const express = require('express');
const groupRoute = require('./routes/group.js');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/group', groupRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

