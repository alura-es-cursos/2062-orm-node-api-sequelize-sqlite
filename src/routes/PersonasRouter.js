const { Router } = require('express');
const PersonaController = require('../controllers/PersonaController.js');

const personaController = new PersonaController();
const router = Router();

router.get('/personas', (req, res) => {
  personaController.consultaTodos(req, res);
});

router.get('/personas/:id', (req, res) => {
  personaController.consultaPorId(req, res);
});

router.post('/personas', (req, res) => { 
  personaController.crearRegistro(req, res);
});

router.put('/personas/:id', (req, res) => { 
  personaController.actualizarRegistro(req, res);
});

router.delete('/personas/:id', (req, res) => {
  personaController.borrarRegistro(req, res);
});

module.exports = router;

