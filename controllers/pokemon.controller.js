const service = require("../services/pokemon.service.js");

const getAllPokemon = async function (req, res, next) {
  try {
    const pokemon = await service.getAllPokemon();
    return res.status(200).send(pokemon);
  } catch (err) {
    next(err);
  }
};

const getPokemonById = async function (req, res, next) {
  try {
    const id = Number(req.params.id);
    const pokemon = await service.getPokemonById(id);
    res.status(200).send(pokemon);
  } catch (err) {
    next(err);
  }
};

const getPokemon = async function (req, res, next) {
  try {
    const query = req.body;
    const pokemon = await service.getPokemon(query);
    res.status(200).send(pokemon);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllPokemon,
  getPokemonById,
  getPokemon,
};
