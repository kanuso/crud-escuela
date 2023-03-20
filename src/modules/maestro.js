const {DataTypes} = require ('sequelize');
const {sequelize} = require ('../database/database');

const Maestro = sequelize.define('Maestro',{
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
    materia: {
        type: DataTypes.STRING,
        allowNull: false,
      
    },
    
    estado: {
        type:DataTypes.INTEGER,
        defaultValue:1
    }


}, { timestamps: false });

 


//esto de abajo permite crear la tabla del modelo

/*(async () => {
  await sequelize.sync({ force: true });
})();*/



module.exports = {Maestro}


