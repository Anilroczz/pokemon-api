const Pokemon = require("../models/pokemon.model.js");

const getAllPokemon = async function () {
  try {
    const pokemon = await Pokemon.find();
    return pokemon;
  } catch (err) {
    throw err;
  }
};

const getPokemonById = async function (id) {
  try {
    const pokemon = await Pokemon.findOne({ dex_number: id });
    if (!pokemon) {
      throw new Error(`pokemon with given dex number ${id} not found`);
    }
    return pokemon;
  } catch (err) {
    throw err;
  }
};

const getPokemon = async function (query) {
  try {
    const pokemon = await Pokemon.find(query);
    if (pokemon.length == 0) {
      throw new Error("pokemon with given filter not found");
    }
    return pokemon;
  } catch (err) {
    throw err;
  }
};

const insertPokemon = async function (pokemon) {
  try {
    const savedPokemon = await Pokemon.create(pokemon);
    return savedPokemon;
  } catch (err) {
    throw err;
  }
};

const updatePokemonImages = async function () {};

module.exports = {
  getAllPokemon,
  getPokemonById,
  getPokemon,
  insertPokemon,
};
