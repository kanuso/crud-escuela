const {where}= require('sequelize');
const { Maestro } = require('../modules/maestro');

const getMaestros = async (req, res)=>{
    const maestros = await Maestro.findAll({
        where: {
            estado: 0
        }
    });
    res.json(maestros);
}

async function getMaestroById(req, res){
    const maestro = await Maestro.findByPk(req.params.id);
    if (maestro){
        res.json(maestro);
    }else {
        res.status(404).json({message: 'Maestro no encontrado '});
    }
}
async function createMaestro (req, res){
    const maestro = await Maestro.create(req.body);
    res.json (maestro);
}

async function updateMaestro(req, res){
    const maestro = await Maestro.findByPk(req,params.id);
    if (maestro){
        await maestro.update(req.body);
        res.json(maestro);
    }else {
        res.status(404).json({message: 'Maestro no encontrdo'});      
    }
}
async function deleteMaestro(req,res){
    try {
        const {id}=req.params
        //el estado 0 es solo para actualizar no eliminar
        await Maestro.update({
            estado: 0
        },{
            where:{
                id:id
            }
        });
        res.json({message: 'El maestro fue eliminado'});
    }catch{
        res.status(404).json({message:'maestro no encontrado'})
    }
}
module.exports={
    getMaestros,
    getMaestroById,
    createMaestro,
    updateMaestro,
    deleteMaestro
};

