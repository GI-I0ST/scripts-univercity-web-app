const express = require('express');
const groupRoute = require('./routes/group.js');
const albumRoute = require('./routes/album.js');
const songRoute = require('./routes/song.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/group', groupRoute)
    .use('/album', albumRoute)
    .use('/song', songRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

