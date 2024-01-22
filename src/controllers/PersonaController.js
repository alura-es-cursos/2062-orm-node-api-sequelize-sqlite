const Controller = require('./Controller.js');
const PersonaServices = require('../services/PersonaServices.js');

const personaServices = new PersonaServices();

class PersonaController extends Controller {
  constructor(){
    super(personaServices);
  }
}

module.exports = PersonaController;