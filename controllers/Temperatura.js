




'use strict';

var Temperatura = require('../service/TemperaturaService');

module.exports.deleteTemperature = function deleteTemperature (req, res, next) {

    Temperatura.deleteTemperature(req.swagger.params, res, next);

};

module.exports.getTemperature = function getTemperature (req, res, next) {

    Temperatura.getTemperature(req.swagger.params, res, next);

};

module.exports.postTemperature = function postTemperature (req, res, next) {

    Temperatura.postTemperature(req.swagger.params, res, next);

};

module.exports.putTemperature = function putTemperature (req, res, next) {

    Temperatura.putTemperature(req.swagger.params, res, next);

};
