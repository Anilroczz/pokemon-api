const Pokemon = require("../models/pokemon.model.js");

const getAllPokemon = async function() {
  try {
    const pokemon = await Pokemon.find();
    return pokemon;
  } catch(err) {
    throw err;
  }
};

const getPokemonById = async function(dex_number) {
  try {
    const pokemon = await Pokemon.findOne({ dex_number });
    if (!pokemon) {
      throw new Error(`pokemon with given dex number ${dex_number} not found`);
    }
    return pokemon;
  } catch(err) {
    throw err;
  }
};

const createPokemon = async function(pokemon) {
  try {
    const createdPokemon = await Pokemon.create(pokemon);
    return createdPokemon;
  } catch(err) {
    throw err;
  }
};

const updatePokemon = async function(dex_number, pokemon) {
  try {
    if(dex_number !== pokemon.dex_number) {
      throw new Error(`pokemon dex number should be same in given id and new data`);
    }

    const updatedPokemon = await Pokemon.findOneAndReplace({ dex_number }, pokemon, {new:true, runValidators: true});
    if(!updatedPokemon) {
        throw new Error(`pokemon with given dex number ${dex_number} not found`);
    }
    return updatedPokemon;
} catch(err) {
    throw err;
}
}

const editPokemon = async function(dex_number, updates) {
    try {
        if(updates.dex_number && dex_number !== updates.dex_number) {
            throw new Error(`pokemon dex number should be same in given id and new data`);
        }
        
        const updatedPokemon = await Pokemon.findOneAndUpdate({ dex_number }, {$set: updates}, {new: true, runValidators:true})
        if(!updatedPokemon) {
            throw new Error(`pokemon with given dex number ${dex_number} not found`);
        }
        return updatedPokemon;
    } catch(err) {
        throw err;
    }
}

const deletePokemon = async function(dex_number) {
  try {
    const deletedPokemon = await Pokemon.findOneAndDelete({ dex_number });
    if(!deletedPokemon) {
      throw new Error(`pokemon with given dex number ${dex_number} not found`);
    }
    return deletedPokemon;
  } catch(err) {
    throw err;
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
