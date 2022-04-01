const constants = require('../const.js');
const Sequelize = require('sequelize');

// Or you can simply use a connection uri
//module.exports = new Sequelize(constants.DB);
module.exports = new Sequelize({
    database: constants.DB_NAME,
    username: constants.DB_USER,
    password: constants.DB_PASSWORD,
    host: constants.DB_HOST,
    port: constants.DB_PORT,
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true, // This will help you. But you will see nwe error
            rejectUnauthorized: false // This line will fix new error
        }
    },
});
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
