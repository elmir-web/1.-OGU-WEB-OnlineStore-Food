const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
    process.env.DB_NAME, // название BD
    process.env.DB_USER, // пользователь BD
    process.env.DB_PASS, // пароль пользователя
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
);