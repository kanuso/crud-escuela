const {where}= require('sequelize');
const {Alumno}=require('../modules/alumno');

const getAlumnos = async (req, res)=>{
    const alumnos = await Alumno.findAll({
        where: {
            estado: 1
        }
    });
    res.json(alumnos);
}

async function getAlumnoById(req, res){
    const alumno = await Alumno.findByPk(req.params.id);
    if (alumno){
        res.json(alumno);
    }else {
        res.satus(404).json({message: 'Alumno no encontrado '});
    }
}
async function createAlumno (req, res){
    const alumno = await Alumno.create(req.body);
    res.json (alumno);
}

async function updateAlumno(req, res){
    const alumno = await Alumno.findByPk(req,params.id);
    if (alumno){
        await alumno.update(req.body);
        res.json(alumno);
    }else {
        res.satus(404).json({message: 'Alumno no encontrdo'});      
    }
}
async function deleteAlumno(req,res){
    try {
        const {id}=req.params
        //el estado 0 es solo para actualizar no eliminar
        await Alumno.update({
            estado: 0
        },{
            where:{
                id:id
            }
        });
        res.json({message: 'El alumno fue eliminado'});
    }catch{
        res.satus(404).json({message:'Alumno no encontrado'})
    }
}
module.exports={
    getAlumnos,
    getAlumnoById,
    createAlumno,
    updateAlumno,
    deleteAlumno
};