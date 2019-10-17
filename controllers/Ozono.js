




'use strict';

var Ozono = require('../service/OzonoService');

module.exports.deleteOzone = function deleteOzone (req, res, next) {

    Ozono.deleteOzone(req.swagger.params, res, next);

};

module.exports.getOzone = function getOzone (req, res, next) {

    Ozono.getOzone(req.swagger.params, res, next);

};

module.exports.postOzone = function postOzone (req, res, next) {

    Ozono.postOzone(req.swagger.params, res, next);

};

module.exports.putOzone = function putOzone (req, res, next) {

    Ozono.putOzone(req.swagger.params, res, next);

};
