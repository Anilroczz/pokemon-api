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
      throw new Error("pokemon with given dex number not found");
    }
    return pokemon;
  } catch (err) {
    throw err;
  }
};

const getPokemon = async function (query, pagination) {
  try {
    const { pageStart, pageSize } = pagination;
    if (pageSize == -1) {
      const pokemon = await Pokemon.find(query.filter);
      return pokemon;
    } else {
      const pokemon = await Pokemon.find(query.filter)
        .skip((pageStart - 1) * pageSize)
        .limit(pageSize);
      return pokemon;
    }
  } catch (err) {
    throw err;
  }
};

const getPokemonByName = async function (name) {
  try {
    const pokemon = await Pokemon.findOne({ name: name });
    if (!pokemon) {
      throw new Error("pokemon with given name not found");
    }
    return pokemon;
  } catch (err) {
    throw err;
  }
};

const getPokemonByRegion = async function (region) {
  try {
    const pokemon = await Pokemon.find({ region: region });
    if (!pokemon) {
      throw new Error("pokemon with given region not found");
    }
    return pokemon;
  } catch (err) {
    throw err;
  }
};

const getPokemonByType = async function (type) {
  try {
    const pokemon = await Pokemon.find({ types: type });
    if (!pokemon) {
      throw new Error("pokemon with given type not found");
    }
    return pokemon;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllPokemon,
  getPokemonById,
  getPokemon,
  getPokemonByName,
  getPokemonByType,
  getPokemonByRegion,
};
