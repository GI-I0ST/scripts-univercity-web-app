const constants = require('../const.js');
const Sequelize = require('sequelize');

// Or you can simply use a connection uri
module.exports = new Sequelize(constants.DB);
/*
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

*/
