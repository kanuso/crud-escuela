const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dbescuela', 'root', 'kenedypirata001', {
   //host: '192.18.0.1',
   localhost:3306,
    dialect: 'mysql'
  });

  module.exports = {sequelize}