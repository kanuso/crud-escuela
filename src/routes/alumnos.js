const express = require('express');
const router = express.Router();
const {getAlumnos, getAlumnoById, createAlumno, updateAlumno, deleteAlumno } = require('../controllers/alumnocontroller');

router.get('/escuela', getAlumnos);
router.get('/escuela/:id', getAlumnoById);
router.post('/escuela', createAlumno);
router.put('/escuela/:id', updateAlumno);
router.delete('/escuela/:id', deleteAlumno);

module.exports = router;