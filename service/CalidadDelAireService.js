'use strict';


/**
 * Eliminado de datos de la calidad del aire.
 * Eliminado un dato de la calidad del aire guardado en la base de datos.
 *
 * idAirQuality Integer Id de la calidad del aire
 * returns String
 **/
module.exports.deleteAirQuality = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for deleteAirQuality'
    });
};


/**
 * Devuelve todos los datos relacionados con la calidad del aire.
 * Devuelve todos los datos relacionados con la calidad del aire.
 *
 * date String Fecha de la recogida de la información
 * returns String
 **/
module.exports.getAirQuality = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for getAirQuality'
    });
};


/**
 * Registra un nuevo dato de calidad del aire.
 * Creacion de nuevos datos asociados a la calidad del aire.
 *
 * airQuality AirQuality 
 * returns String
 **/
module.exports.postAirQuality = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for postAirQuality'
    });
};


/**
 * Modifica un dato de calidad del aire previamente registrado
 * Modifica un dato de calidad del aire previamente registrado
 *
 * airQuality AirQuality 
 * returns String
 **/
module.exports.putAirQuality = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for putAirQuality'
    });
};




