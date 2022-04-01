const DB_NAME = process.env.DB_NAME || 'music';
const DB_PASSWORD = process.env.DB_PASSWORD || '12345678';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || '5432';
const DB_USER = process.env.DB_USER || 'postgres';

console.log("process.env.DB_USER", process.env.DB_USER);

module.exports = {
    DB_NAME,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_USER
};