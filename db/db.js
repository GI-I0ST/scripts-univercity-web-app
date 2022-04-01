const constants = require('../const.js');
const Sequelize = require('sequelize');

console.log("env log", process.env.DB_USER);
console.log("constants log", constants.DB_USER);
// Or you can simply use a connection uri
//module.exports = new Sequelize(constants.DB);
/*
module.exports = new Sequelize({
    database: constants.DB_NAME,
    username: constants.DB_USER,
    password: constants.DB_PASSWORD,
    host: constants.DB_HOST,
    port: constants.DB_PORT,
    dialect: "postgres",
    ssl: true,
    dialectOptions: {
        ssl: {
            require: true, // This will help you. But you will see nwe error
            rejectUnauthorized: false // This line will fix new error
        }
    },
});
*/

sequelize = new Sequelize(constants.DATABASE_URL + '?sslmode=require', {
    dialect:  'postgres',
    protocol: 'postgres',
    logging:  true, //false,
    dialectOptions: {
        ssl: {
            // require: true, // This will help you. But you will see nwe error
            rejectUnauthorized: false // This line will fix new error
        }
    },
});


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


module.exports = sequelize;