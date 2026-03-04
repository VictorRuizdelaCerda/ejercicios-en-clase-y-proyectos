CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE autor (
autordID INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100) NOT NULL
);

CREATE TABLE libro (
libroID INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(150) NOT NULL,
autorID INT,
FOREIGN KEY (autorID) REFERENCES autor(autorID)
);

CREATE TABLE usuario (
usuarioID INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(150) NOT NULL,
autorID INT,
direccion VARCHAR(200)
);

CREATE TABLE reseña (
reseñaID INT AUTO_INCREMENT PRIMARY KEY,
usuarioID INT,
libroID INT,
comentario VARCHAR(250),
FOREIGN KEY (usuarioID) REFERENCES usuario (usuarioID),
FOREIGN KEY (libroID) REFERENCES libro (libroID)
);

CREATE TABLE prestamo (
prestamoID INT AUTO_INCREMENT PRIMARY KEY,
usuarioID INT,
libroID INT,
fecha_inicio DATE,
fecha_final DATE,
FOREIGN KEY (usuarioID) REFERENCES usuario (usuarioID),
FOREIGN KEY (libroID) REFERENCES libro(libroID)
);