




'use strict';

var NitrogenoMonoxidoCarbono = require('../service/NitrogenoMonoxidoCarbonoService');

module.exports.deleteNo2_co = function deleteNo2_co (req, res, next) {

    NitrogenoMonoxidoCarbono.deleteNo2_co(req.swagger.params, res, next);

};

module.exports.getNo2_co = function getNo2_co (req, res, next) {

    NitrogenoMonoxidoCarbono.getNo2_co(req.swagger.params, res, next);

};

module.exports.postNo2_co = function postNo2_co (req, res, next) {

    NitrogenoMonoxidoCarbono.postNo2_co(req.swagger.params, res, next);

};

module.exports.putNo2_co = function putNo2_co (req, res, next) {

    NitrogenoMonoxidoCarbono.putNo2_co(req.swagger.params, res, next);

};
