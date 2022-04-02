let express = require('express');
let router = express.Router();
let groupModel = require('../db/group-model.js');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', function (req, res) {
    let findedGroups;
    if (req.query.id) {
        findedGroups = groupModel.getById(req.query.id);
    } else {
        findedGroups = groupModel.getAll();
    }

    findedGroups.then((data) => {
        console.log('send', data);
        res.send(data);
    }).catch(err => {
        res.status(404).send('');
    });
});

router.post('/', function (req, res) {
    groupModel.create(req.body.name).then(newData => {
        res.send(newData);
    });
});

router.put('/', function (req, res) {
    groupModel.edit(req.body).then(newData => {
        res.send(newData);
    });
});

router.delete('/', function (req, res) {
    groupModel.destroy(req.body.id).then(newData => {
        console.log(newData);
        res.sendStatus(newData ? 200 : 400)
    }).catch((err) => {
        console.log(err);
    });
});

module.exports = router;