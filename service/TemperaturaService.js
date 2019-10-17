'use strict';


/**
 * Eliminado de datos de temperatura.
 * Eliminado un dato de temperatura en la base de datos.
 *
 * idTemperature Integer Id del dato de temperatura
 * returns String
 **/
module.exports.deleteTemperature = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for deleteTemperature'
    });
};


/**
 * Devuelve todos los datos relacionados con la temperatura.
 * Devuelve todos los datos relacionados con la temperatura.
 *
 * date String Fecha de la recogida de la información
 * returns String
 **/
module.exports.getTemperature = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for getTemperature'
    });
};


/**
 * Registra un nuevo dato de temperatura.
 * Creacion de nuevos datos asociados a la temperatura.
 *
 * temperature Temperature 
 * returns String
 **/
module.exports.postTemperature = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for postTemperature'
    });
};


/**
 * Modifica un dato de temperatura previamente registrado
 * Modifica un dato de temperatura previamente registrado
 *
 * temperature Temperature 
 * returns String
 **/
module.exports.putTemperature = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for putTemperature'
    });
};




