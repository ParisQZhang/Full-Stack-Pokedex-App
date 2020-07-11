const Router = require('koa-router');
const router = new Router();

const controller = require('./controller/controller.js');

router.get('/pokemons', controller.findAllPokemons);
router.get('/pokemons/:id', controller.findPokemon);

module.exports = router;
