	
USE cine;
SHOW DATABASES;


CREATE TABLE IF NOT EXISTS espectador (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS pelicula (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS funcion (
id INT AUTO_INCREMENT PRIMARY KEY,
horario VARCHAR (50),
pelicula_id INT,
CONSTRAINT fk_funcion_pelicula
FOREIGN KEY (pelicula_id)
REFERENCES pelicula(id)
);

CREATE TABLE IF NOT EXISTS boleto (
id INT AUTO_INCREMENT PRIMARY KEY, 
asiento VARCHAR(10),
espectador_id INT, 
funcion_id INT, 
CONSTRAINT fk_boleto_espectador
FOREIGN KEY (espectador_id)
REFERENCES espectador(id),
CONSTRAINT fk_boleto_funcion
FOREIGN KEY (funcion_id)
REFERENCES funcion(id)
);

INSERT INTO espectador (nombre) VALUES ('Ana López'), ('Carlos Pérez');
INSERT INTO pelicula (titulo) VALUES ('Inception'), ('Matrix');
INSERT INTO funcion (pelicula_id, horario) VALUES (1, '18:00'), (2, '20:30');