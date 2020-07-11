const pokemon = require('../model/pokemons');

exports.findAllPokemons = async (ctx) => {
  try {
    ctx.body = await pokemon.find({}, { _id: 0, __v: 0 });
    console.log('inside controller findAllPokemons 🤩🤩🤩🥳🥳🥳');
  } catch (e) {
    console.log(e);
    ctx.status = 500;
  }
};

exports.findPokemon = async (ctx) => {
  try {
    ctx.body = await pokemon.find({ id: ctx.params.id }, { _id: 0, __v: 0 });
    console.log(`finding the taget Pokemon id: ${ctx.params.id} 🤩🤩🤩🥳🥳🥳`);
  } catch (e) {
    console.log(e);
    ctx.status = 500;
  }
};
