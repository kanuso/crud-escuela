const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dbescuela', 'root', 'kendypirata001', {
   host: '192.18.0.1',
  //localhost:3000,
    dialect: 'mysql'
  });

  module.exports = {sequelize}