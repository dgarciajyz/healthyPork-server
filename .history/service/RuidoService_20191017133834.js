'use strict';
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cuatroie',
    database: 'healthypork'
});
connection.connect();


/**
 * Eliminado de datos de ruido.
 * Eliminado un dato de ruido en la base de datos.
 *
 * idNoise Integer Id del dato de ruido
 * returns String
 **/
module.exports.deleteNoise = function(req, res, next) {
    //Parameters
    console.log("Mostramos peticion", req);
    var query = "DELETE FROM Noise WHERE id = " + req.idNoise.originalValue
    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send({
            message: results
        });
    });
};


/**
 * Devuelve todos los datos relacionados con el ruido.
 * Devuelve todos los datos relacionados con el ruido.
 *
 * date String Fecha de la recogida de la información
 * returns String
 **/
module.exports.getNoise = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for getNoise'
    });
};


/**
 * Registra un nuevo dato de ruido.
 * Creacion de nuevos datos asociados al ruido.
 *
 * noise Noise 
 * returns String
 **/
module.exports.postNoise = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for postNoise'
    });
};


/**
 * Modifica un dato de ruido previamente registrado
 * Modifica un dato de ruido previamente registrado
 *
 * noise Noise 
 * returns String
 **/
module.exports.putNoise = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for putNoise'
    });
};




