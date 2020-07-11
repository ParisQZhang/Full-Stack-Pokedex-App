const pokemon = require('./pokemon');
const fetch = require('node-fetch');

const pokemonsURL = 'http://pokeapi.salestock.net/api/v2/pokemon/?limit=50';

fetch(pokemonsURL)
  .then((reponse) => reponse.json())
  .then(async (parsed) => {
    for (let i = 0; i < parsed.results.length; i++) {
      const result = {
        id: i + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          i + 1
        }.png`,
        ...parsed.results[i],
      };
      pokemon.create(result, (err) => {
        if (err) return;
      });
    }
  });

module.exports = pokemon;
