




'use strict';

var NitrogenoMonoxidoCarbono = require('../service/NitrogenoMonoxidoCarbonoService');

module.exports.deleteNo2Co = function deleteNo2Co (req, res, next) {

    NitrogenoMonoxidoCarbono.deleteNo2Co(req.swagger.params, res, next);

};

module.exports.getNo2Co = function getNo2Co (req, res, next) {

    NitrogenoMonoxidoCarbono.getNo2Co(req.swagger.params, res, next);

};

module.exports.postNo2Co = function postNo2Co (req, res, next) {

    NitrogenoMonoxidoCarbono.postNo2Co(req.swagger.params, res, next);

};

module.exports.putNo2Co = function putNo2Co (req, res, next) {

    NitrogenoMonoxidoCarbono.putNo2Co(req.swagger.params, res, next);

};
