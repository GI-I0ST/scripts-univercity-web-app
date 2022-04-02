let express = require('express');
let router = express.Router();
let albumModel = require('../db/album-model.js');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route
router.get('/', function (req, res) {
    let foundAlbums;
    if (req.query.id) {
        foundAlbums = albumModel.getById(req.query.id);
    } else if (req.query.groupId) {
        foundAlbums = albumModel.getByGroupId(req.query.groupId);
    } else {
        foundAlbums = albumModel.getAll();
    }

    foundAlbums.then((data) => {
        console.log('send', data);
        res.send(data);
    }).catch(err => {
        res.status(404).send('');
    });

});

router.post('/', function (req, res) {
    albumModel.create(req.body).then(newData => {
        res.send(newData);
    });
});

router.put('/', function (req, res) {
    albumModel.edit(req.body).then(newData => {
        res.send(newData);
    });
});

router.delete('/', function (req, res) {
    albumModel.destroy(req.body.id).then(newData => {
        console.log(newData);
        res.sendStatus(newData ? 200 : 400)
    }).catch((err) => {
        console.log(err);
    });
});

module.exports = router;