//const DATABASE_URL = process.env.DATABASE_URL || 'postgres://postgres:12345678@localhost:5432/music';
const DATABASE_URL_HEROKU = process.env.DATABASE_URL;
const DATABASE_URL_LOCAL = 'postgres://postgres:12345678@localhost:5432/music';

module.exports = {
    DATABASE_URL_LOCAL,
    DATABASE_URL_HEROKU
};