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
 * Eliminado de datos de luminosidad.
 * Eliminado un dato de luminosidad en la base de datos.
 *
 * idLuminosity Integer Id del dato de luminosidad
 * returns String
 **/
module.exports.deleteLuminosity = function (req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for deleteLuminosity'
    });
};


/**
 * Devuelve todos los datos relacionados con la luminosidad.
 * Devuelve todos los datos relacionados con la luminosidad.
 *
 * date String Fecha de la recogida de la información
 * returns String
 **/
module.exports.getLuminosity = function (req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for getLuminosity'
    });
};


/**
 * Registra un nuevo dato de luminosidad.
 * Creacion de nuevos datos asociados a la luminosidad.
 *
 * luminosity Luminosity 
 * returns String
 **/
module.exports.postLuminosity = function (req, res, next) {
    //Parameters
    console.log(req.undefined.originalValue.amount);
    var query='INSERT INTO Luminosity SET ?'
    var date = new Date();
    connection.query(query, [req.undefined.originalValue.amount,date], function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send({
            message: results
        });
    });
};


/**
 * Modifica un dato de luminosidad previamente registrado
 * Modifica un dato de luminosidad previamente registrado
 *
 * luminosity Luminosity 
 * returns String
 **/
module.exports.putLuminosity = function (req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for putLuminosity'
    });
};




