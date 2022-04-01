const Sequelize = require('sequelize');
let sequelize = require("./db.js");
// const sequelize = new Sequelize('postgres://postgres:12345678@localhost:5432/music');

const Songs = sequelize.define('songs', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        albumId: {
            type: Sequelize.INTEGER,
            references: 'albums',
            referencesKey: 'id'
        }
    },
    {
        //   tableName: 'my_user_table', // this will define the table's name
        timestamps: false           // this will deactivate the timestamp columns
    });

function getAll() {
    return Songs.findAll().then(function (data) {
        return data.map((node) => node.get({plain: true}));
    });
}

function create(song) {
    return Songs.create({
        name: song.name,
        albumId: song.albumId
    }).then(function (group) {
        return group.get({
            plain: true
        })
    });
}

function edit(song) {
    return Songs.findByPk(song.id).then((data) => {
        if (data) {
            data.name = song.name;
            data.albumId = song.albumId;
            return data.save();
        }

        return null;
    });
}

function destroy(id) {
    return Songs.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAll,
    create,
    edit,
    destroy
};