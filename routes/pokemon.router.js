const express = require("express");
const apicache = require("apicache");
const controller = require("../controllers/pokemon.controller.js");

const router = express.Router();
const cache = apicache.middleware;

router.route("/")
    .get(cache("5 minutes"), controller.getAllPokemon)
    .post(controller.createPokemon)
    .head(async(req,res) => {
        res.status(200).end("Pokemon API Service is Up, Try using it..!");
    })
    .options(async(req,res) => {
        res.header('Allow', 'GET, POST, PUT, DELETE, PATCH, HEAD, OTPIONS');
        return res.status(204).end();
    });

router.route("/:id")
    .get(controller.getPokemonById)
    .put(controller.updatePokemon)
    .patch(controller.editPokemon)
    .delete(controller.deletePokemon);

module.exports = router;
