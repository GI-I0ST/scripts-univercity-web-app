const DATABASE_URL = process.env.DATABASE_URL || 'postgres://postgres:12345678@localhost:5432/music';

console.log("process.env.DB_USER", process.env.DB_USER);

module.exports = {
    DATABASE_URL
};