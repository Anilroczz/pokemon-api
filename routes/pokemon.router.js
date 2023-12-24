const express = require("express");
const apicache = require("apicache");
const controller = require("../controllers/pokemon.controller.js");

const router = express.Router();
const cache = apicache.middleware;

router.get("/", cache("5 minutes"), controller.getAllPokemon);
router.get("/:id", controller.getPokemonById);
router.post("/", controller.getPokemon);

module.exports = router;
