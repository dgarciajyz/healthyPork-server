




'use strict';

var CalidadDelAire = require('../service/CalidadDelAireService');

module.exports.deleteAirQuality = function deleteAirQuality (req, res, next) {

    CalidadDelAire.deleteAirQuality(req.swagger.params, res, next);

};

module.exports.getAirQuality = function getAirQuality (req, res, next) {

    CalidadDelAire.getAirQuality(req.swagger.params, res, next);

};

module.exports.postAirQuality = function postAirQuality (req, res, next) {

    CalidadDelAire.postAirQuality(req.swagger.params, res, next);

};

module.exports.putAirQuality = function putAirQuality (req, res, next) {

    CalidadDelAire.putAirQuality(req.swagger.params, res, next);

};
