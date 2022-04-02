let express = require('express');
let router = express.Router();
let songModel = require('../db/song-model.js');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route
router.get('/', function (req, res) {
    let foundSongs;
    if (req.query.id){
        foundSongs = songModel.getById(req.query.id);
    } else if (req.query.albumId) {
        foundSongs = songModel.getByAlbumId(req.query.albumId);
    } else {
        foundSongs = songModel.getAll();
    }

    foundSongs.then((data) => {
        console.log('send', data);
        res.send(data);
    }).catch(err => {
        res.status(404).send('');
    });

});

router.post('/', function (req, res) {
    songModel.create(req.body).then(newData => {
        res.send(newData);
    });
});

router.put('/', function (req, res) {
    songModel.edit(req.body).then(newData => {
        res.send(newData);
    });
});

router.delete('/', function (req, res) {
    songModel.destroy(req.body.id).then(newData => {
        console.log(newData);
        res.sendStatus(newData ? 200 : 400)
    }).catch((err) => {
        console.log(err);
    });
});

module.exports = router;