'use strict';


/**
 * Eliminado de datos de no2_co.
 * Eliminado un dato de no2_co en la base de datos.
 *
 * idNo2Underscoreco Integer Id del dato de no2_co
 * returns String
 **/
module.exports.deleteNo2co = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for deleteNo2_co'
    });
};


/**
 * Devuelve todos los datos relacionados con no2_co.
 * Devuelve todos los datos relacionados con no2_co.
 *
 * date String Fecha de la recogida de la información
 * returns String
 **/
module.exports.getNo2co = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for getNo2_co'
    });
};


/**
 * Registra un nuevo dato de no2_co.
 * Creacion de nuevos datos asociados a no2_co.
 *
 * no2Co No2Co 
 * returns String
 **/
module.exports.postNo2co = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for postNo2_co'
    });
};


/**
 * Modifica un dato de no2_co previamente registrado
 * Modifica un dato de no2_co previamente registrado
 *
 * no2Co No2Co 
 * returns String
 **/
module.exports.putNo2co = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for putNo2_co'
    });
};




