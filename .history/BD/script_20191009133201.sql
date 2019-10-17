CREATE DATABASE HealthyPork;
USE HealthyPork;
CREATE TABLE Ozone (
	id INT NOT NULL AUTO_INCREMENT,
    amount DECIMAL(3,2),  
    date DATE,
    PRIMARY KEY(id)
);
CREATE TABLE AirQuality (
	id INT NOT NULL AUTO_INCREMENT,
    amount DECIMAL(3,2),  
    date DATE,
	PRIMARY KEY(id)
);
CREATE TABLE Luminosity (
	id INT NOT NULL AUTO_INCREMENT,
    amount INT,  
    date DATE,
    PRIMARY KEY(id)    
);
CREATE TABLE Noise (
	id INT NOT NULL AUTO_INCREMENT,
    amount DECIMAL(3,2),  
    date DATE,
    PRIMARY KEY(id)    
);
CREATE TABLE Humidity (
	id INT NOT NULL AUTO_INCREMENT,
    amount DECIMAL(3,2),  
    date DATE,
    PRIMARY KEY(id)    
);
CREATE TABLE Temperature (
	id INT NOT NULL AUTO_INCREMENT,
    amount DECIMAL(3,2),  
    date DATE,
    PRIMARY KEY(id)    
);
CREATE TABLE NO2_CO (
	id INT NOT NULL AUTO_INCREMENT,
    amount DECIMAL(3,2),  
    date DATE,
    PRIMARY KEY(id)    
);