




'use strict';

var NitrogenoMonoxidoCarbono = require('../service/NitrogenoMonoxidoCarbonoService');

module.exports.deleteNo2co = function deleteNo2co (req, res, next) {

    NitrogenoMonoxidoCarbono.deleteNo2co(req.swagger.params, res, next);

};

module.exports.getNo2co = function getNo2co (req, res, next) {

    NitrogenoMonoxidoCarbono.getNo2co(req.swagger.params, res, next);

};

module.exports.postNo2co = function postNo2co (req, res, next) {

    NitrogenoMonoxidoCarbono.postNo2co(req.swagger.params, res, next);

};

module.exports.putNo2co = function putNo2co (req, res, next) {

    NitrogenoMonoxidoCarbono.putNo2_co(req.swagger.params, res, next);

};
