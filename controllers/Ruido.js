




'use strict';

var Ruido = require('../service/RuidoService');

module.exports.deleteNoise = function deleteNoise (req, res, next) {

    Ruido.deleteNoise(req.swagger.params, res, next);

};

module.exports.getNoise = function getNoise (req, res, next) {

    Ruido.getNoise(req.swagger.params, res, next);

};

module.exports.postNoise = function postNoise (req, res, next) {

    Ruido.postNoise(req.swagger.params, res, next);

};

module.exports.putNoise = function putNoise (req, res, next) {

    Ruido.putNoise(req.swagger.params, res, next);

};
