const Sequelize = require('sequelize');
let sequelize = require("./db.js");
// const sequelize = new Sequelize('postgres://postgres:12345678@localhost:5432/music');

const Groups = sequelize.define('groups', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        }
    },
    {
        //   tableName: 'my_user_table', // this will define the table's name
        timestamps: false           // this will deactivate the timestamp columns
    });

function getAll() {
    return Groups.findAll().then(function (data) {
        return data.map((node) => node.get({plain: true}));
    });
}

function create(groupName) {
    return Groups.create({name: groupName}).then(function (group) {
        return group.get({
            plain: true
        })
    })
}

function edit(group){
    return Groups.findByPk(group.id).then((data) => {
        if (data) {
            data.name = group.name;
            return data.save();
        }

        return null;
    });
}

function destroy(id){
    return Groups.destroy({
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