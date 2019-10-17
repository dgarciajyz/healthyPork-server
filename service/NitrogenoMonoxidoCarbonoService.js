'use strict';


/**
 * Eliminado de datos de No2Co.
 * Eliminado un dato de No2Co en la base de datos.
 *
 * idNo2Underscoreco Integer Id del dato de No2Co
 * returns String
 **/
module.exports.deleteNo2Co = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for deleteNo2Co'
    });
};


/**
 * Devuelve todos los datos relacionados con No2Co.
 * Devuelve todos los datos relacionados con No2Co.
 *
 * date String Fecha de la recogida de la información
 * returns String
 **/
module.exports.getNo2Co = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for getNo2Co'
    });
};


/**
 * Registra un nuevo dato de No2Co.
 * Creacion de nuevos datos asociados a No2Co.
 *
 * no2Co No2Co 
 * returns String
 **/
module.exports.postNo2Co = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for postNo2Co'
    });
};


/**
 * Modifica un dato de No2Co previamente registrado
 * Modifica un dato de No2Co previamente registrado
 *
 * no2Co No2Co 
 * returns String
 **/
module.exports.putNo2Co = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for putNo2Co'
    });
};




