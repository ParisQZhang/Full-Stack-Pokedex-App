const mongoose = require('./index');

const pokemonSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  url: String,
  name: String,
  image: String,
});

const pokemon = mongoose.model('pokemon', pokemonSchema, 'testPokemon');
module.exports = pokemon;
