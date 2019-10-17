'use strict';


/**
 * Eliminado de datos de ozono
 * Eliminado un dato de ozono guardado en la base de datos.
 *
 * idOzone Integer Id del coste
 * returns String
 **/
module.exports.deleteOzone = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for deleteOzone'
    });
};


/**
 * Devuelve todos los datos relacionados con el ozono.
 * Devuelve todos los datos relacionados con el ozono.
 *
 * returns String
 **/
module.exports.getOzone = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for getOzone'
    });
};


/**
 * Registra un nuevo dato de ozono
 * Creacion de nuevos datos asociados al ozono recogido.
 *
 * ozone Ozone 
 * returns String
 **/
module.exports.postOzone = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for postOzone'
    });
};


/**
 * Modifica un dato de ozono previamente registrado
 * Modifica un dato de ozono previamente registrado
 *
 * ozone Ozone 
 * returns String
 **/
module.exports.putOzone = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for putOzone'
    });
};




