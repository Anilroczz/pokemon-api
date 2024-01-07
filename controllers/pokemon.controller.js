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
    const dex_number = Number(req.params.id);
    const pokemon = await service.getPokemonById(dex_number);
    res.status(200).send(pokemon);
  } catch (err) {
    next(err);
  }
};

const createPokemon = async function (req, res, next) {
  try {
    const pokemon = req.body;
    const newPokemon = await service.createPokemon(pokemon);
    res.status(201).send(newPokemon);
  } catch (err) {
    next(err);
  }
};

const updatePokemon = async function(req,res,next) {
  try {
    const dex_number = Number(req.params.id);
    const pokemon = req.body;
    
    const updatedPokemon = await service.updatePokemon(dex_number, pokemon);
    res.status(200).send(updatedPokemon);
  } catch(err) {
    next(err);
  }
}

const editPokemon = async function(req,res,next) {
  try {
    const dex_number = Number(req.params.id);
    const updates = req.body;
    
    const updatedPokemon = await service.editPokemon(dex_number, updates);
    res.status(200).send(updatedPokemon);
  } catch(err) {
    next(err);
  }
}

const deletePokemon = async function(req,res,next) {
  try {
    const dex_number = Number(req.params.id);

    const deletePokemon = await service.deletePokemon(dex_number);
    res.status(200).send(deletePokemon);
  } catch(err) {
    next(err);
  }
}

module.exports = {
  getAllPokemon,
  getPokemonById,
  createPokemon,
  updatePokemon,
  editPokemon,
  deletePokemon
};
