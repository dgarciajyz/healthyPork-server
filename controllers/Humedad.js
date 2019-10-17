




'use strict';

var Humedad = require('../service/HumedadService');

module.exports.deleteHumidity = function deleteHumidity (req, res, next) {

    Humedad.deleteHumidity(req.swagger.params, res, next);

};

module.exports.getHumidity = function getHumidity (req, res, next) {

    Humedad.getHumidity(req.swagger.params, res, next);

};

module.exports.postHumidity = function postHumidity (req, res, next) {

    Humedad.postHumidity(req.swagger.params, res, next);

};

module.exports.putHumidity = function putHumidity (req, res, next) {

    Humedad.putHumidity(req.swagger.params, res, next);

};
