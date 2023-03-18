const {DataTypes} = require ('sequelize');
const {sequelize} = require ('../database/database');

const Alumno = sequelize.define('Alumno',{
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    grado: {
        type: DataTypes.STRING,
        allowNull: false,
      
    },
    seccion: {
        type: DataTypes.STRING,
        allowNull:false
    },
    estado: {
        type:DataTypes.INTEGER,
        defaultValue:1
    }

}, { timestamps: false });

 










module.exports = {Alumno}
