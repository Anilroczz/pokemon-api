const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  dex_number: {
    type: Number,
    required: [true, "pokemon dex number is required"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "pokemon name is required"],
  },
  height: {
    type: Number,
    required: [true, "pokemon height is required"],
  },
  weight: {
    type: Number,
    required: [true, "pokemon weight is required"],
  },
  abilities: {
    type: [String],
    default: [],
  },
  hidden_abilities: {
    type: [String],
    default: [],
  },
  forms: {
    type: [String],
    default: [],
  },
  types: {
    type: [String],
    default: [],
  },
  moves: {
    type: [String],
    default: [],
  },
  stats: {
    type: [
      {
        name: {
          type: String,
          required: [true, "pokemon stat name is required"],
        },
        stat: {
          type: Number,
          required: [true, "pokemon stat value is required"],
        },
      },
    ],
    required: [true, "pokemon stats are required"],
  },
  images: {
    type: {
      normal: {
        type: String,
        required: [true, "pokemon normal image source url is required"],
      },
      shiny: {
        type: String,
        required: [true, "pokemon shiny image source url is required"],
      },
    },
    required: [true, "pokemon images are required"],
  },
  region: {
    type: String,
    required: [true, "pokemon region is required"],
  },
});

module.exports = mongoose.model("Pokemon", pokemonSchema, "pokemon");
