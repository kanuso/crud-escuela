const express = require('express');
const router = express.Router();
const { getMaestros, getMaestroById, createMaestro, updateMaestro, deleteMaestro } = require('../controllers/maestrocontroller');


router.get('/maestro', getMaestros);
router.get('/maestro/:id', getMaestroById);
router.post('/maestro', createMaestro);
router.put('/maestro/:id', updateMaestro);
router.delete('/maestro/:id', deleteMaestro);
module.exports = router;