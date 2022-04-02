const constants = require('../const.js');
const Sequelize = require('sequelize');

let sequelize;
if (constants.DATABASE_URL_HEROKU) {
    sequelize = new Sequelize(constants.DATABASE_URL_HEROKU, {
        dialect: 'postgres',
        protocol: 'postgres',
        // logging:  true, //false,
        dialectOptions: {
            ssl: {
                require: true, // This will help you. But you will see nwe error
                rejectUnauthorized: false // This line will fix new error
            }
        }
    });
} else {
    sequelize = new Sequelize(constants.DATABASE_URL_LOCAL, {
        dialect: 'postgres',
        protocol: 'postgres',
        // logging:  true, //false,
        /* dialectOptions: {
             ssl: {
                 require: true, // This will help you. But you will see nwe error
                 rejectUnauthorized: false // This line will fix new error
             }
         },*/
    });
}


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


module.exports = sequelize;