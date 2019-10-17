'use strict';


/**
 * Eliminado de datos de humedad.
 * Eliminado un dato de humedad en la base de datos.
 *
 * idHumidity Integer Id del dato de humedad
 * returns String
 **/
module.exports.deleteHumidity = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for deleteHumidity'
    });
};


/**
 * Devuelve todos los datos relacionados con la humedad.
 * Devuelve todos los datos relacionados con la humedad.
 *
 * date String Fecha de la recogida de la información
 * returns String
 **/
module.exports.getHumidity = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for getHumidity'
    });
};


/**
 * Registra un nuevo dato de humedad.
 * Creacion de nuevos datos asociados a la humedad.
 *
 * humidity Humidity 
 * returns String
 **/
module.exports.postHumidity = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for postHumidity'
    });
};


/**
 * Modifica un dato de humedad previamente registrado
 * Modifica un dato de humedad previamente registrado
 *
 * humidity Humidity 
 * returns String
 **/
module.exports.putHumidity = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for putHumidity'
    });
};




