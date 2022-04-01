const Sequelize = require('sequelize');
let sequelize = require("./db.js");
// const sequelize = new Sequelize('postgres://postgres:12345678@localhost:5432/music');

const Albums = sequelize.define('albums', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        year: {
            type: Sequelize.SMALLINT
        },
        mark: {
            type: Sequelize.SMALLINT
        },
        groupId: {
            type: Sequelize.INTEGER,
            references: 'groups',
            referencesKey: 'id'
        }
    },
    {
        //   tableName: 'my_user_table', // this will define the table's name
        timestamps: false           // this will deactivate the timestamp columns
    });

function getAll() {
    return Albums.findAll().then(function (data) {
        return data.map((node) => node.get({plain: true}));
    });
}

function create(album) {
    return Albums.create({
        name: album.name,
        year: album.year,
        mark: album.mark,
        groupId: album.groupId
    }).then(function (group) {
        return group.get({
            plain: true
        })
    });
}

function edit(album) {
    return Albums.findByPk(album.id).then((data) => {
        if (data) {
            data.name = album.name;
            data.year = album.year;
            data.mark = album.mark;
            data.groupId = album.groupId;
            return data.save();
        }

        return null;
    });
}

function destroy(id) {
    return Albums.destroy({
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