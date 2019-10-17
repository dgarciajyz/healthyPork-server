




'use strict';

var Luminosidad = require('../service/LuminosidadService');

module.exports.deleteLuminosity = function deleteLuminosity (req, res, next) {

    Luminosidad.deleteLuminosity(req.swagger.params, res, next);

};

module.exports.getLuminosity = function getLuminosity (req, res, next) {

    Luminosidad.getLuminosity(req.swagger.params, res, next);

};

module.exports.postLuminosity = function postLuminosity (req, res, next) {

    Luminosidad.postLuminosity(req.swagger.params, res, next);

};

module.exports.putLuminosity = function putLuminosity (req, res, next) {

    Luminosidad.putLuminosity(req.swagger.params, res, next);

};
