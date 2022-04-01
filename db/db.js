const constants = require('../const.js');
const Sequelize = require('sequelize');

console.log("env log", process.env.DB_USER);
console.log("constants log", constants.DB_USER);

sequelize = new Sequelize(constants.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    // logging:  true, //false,
    dialectOptions: {
        ssl: {
            require: true, // This will help you. But you will see nwe error
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