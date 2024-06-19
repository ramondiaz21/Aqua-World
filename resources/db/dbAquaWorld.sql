-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.7.17-log - MySQL Community Server (GPL)
-- SO del servidor:              Win32
-- HeidiSQL Versión:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para aqua-world
DROP DATABASE IF EXISTS `aqua-world`;
CREATE DATABASE IF NOT EXISTS `aqua-world` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;
USE `aqua-world`;


SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS cat_roles;
CREATE TABLE IF NOT EXISTS cat_roles(
  id INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  status INT(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (id)
)
COLLATE='utf8_bin'
;

INSERT INTO cat_roles(nombre,status) VALUES('administrador',1);
INSERT INTO cat_roles(nombre,status) VALUES('usuario',1);
INSERT INTO cat_roles(nombre,status) VALUES('colaborador',1);

DROP TABLE IF EXISTS clientes;
CREATE TABLE IF NOT EXISTS clientes (
  id INT(11) NOT NULL AUTO_INCREMENT,
  usuario INT(11) NOT NULL,
  clave VARCHAR(20) NOT NULL,
  usuarioName VARCHAR(255) NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  ap1 VARCHAR(255) NOT NULL,
  ap2 VARCHAR(255) NOT NULL,
  calle VARCHAR(255) NOT NULL,
  num_ext VARCHAR(255) NOT NULL,
  num_int VARCHAR(255) NOT NULL,
  colonia VARCHAR(255) NOT NULL,
  entre_uno VARCHAR(255) NOT NULL,
  entre_dos VARCHAR(255) NOT NULL,
  estado VARCHAR(100) NOT NULL,
  municipio VARCHAR(100) NOT NULL,
  telefono VARCHAR(50) NOT NULL,
  correo VARCHAR(100) NOT NULL,
  status INT(11) NOT NULL DEFAULT '1',
  creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  actualización TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
)
COLLATE='utf8_bin'
;

DROP TABLE IF EXISTS colaboradores;
CREATE TABLE IF NOT EXISTS colaboradores (
  id INT(11) NOT NULL AUTO_INCREMENT,
  usuario INT(11) NOT NULL,
  rol INT(11) NOT NULL,
  usuarioName VARCHAR(255) NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  ap1 VARCHAR(255) NOT NULL,
  ap2 VARCHAR(255) NOT NULL,
  telefono VARCHAR(50) NOT NULL,
  correo VARCHAR(100) NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  clave VARCHAR(20) NOT NULL,
  status INT(11) NOT NULL DEFAULT '1',
  creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  actualización TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
)
COLLATE='utf8_bin'
;

DROP TABLE IF EXISTS usuarios;
CREATE TABLE IF NOT EXISTS usuarios(
  id INT(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  rol INT(11) NOT NULL,
  clave VARCHAR(20) NOT NULL,
  status INT(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (id)
)
COLLATE='utf8_bin'
;

DROP TABLE IF EXISTS cat_equipos;
CREATE TABLE IF NOT EXISTS cat_equipos(
  id INT(11) NOT NULL AUTO_INCREMENT,
  usuario INT(11) NOT NULL,
  clave VARCHAR(255) NOT NULL,
  usuarioName VARCHAR(255) NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  status INT(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (id)
)
COLLATE='utf8_bin'
;

DROP TABLE IF EXISTS cat_productos;
CREATE TABLE IF NOT EXISTS cat_productos(
  id INT(11) NOT NULL AUTO_INCREMENT,
  usuario INT(11) NOT NULL,
  clave VARCHAR(255) NOT NULL,
  usuarioName VARCHAR(255) NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  status INT(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (id)
)
COLLATE='utf8_bin'
;

DROP TABLE IF EXISTS cat_servicios;
CREATE TABLE IF NOT EXISTS cat_servicios(
  id INT(11) NOT NULL AUTO_INCREMENT,
  usuario INT(11) NOT NULL,
  clave VARCHAR(255) NOT NULL,
  usuarioName VARCHAR(255) NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  status INT(11) NOT NULL DEFAULT '1',

  PRIMARY KEY (id)
)
COLLATE='utf8_bin'
;

DROP TABLE IF EXISTS cat_marca;
CREATE TABLE IF NOT EXISTS cat_marca(
  id INT(11) NOT NULL AUTO_INCREMENT,
  usuario INT(11) NOT NULL,
  clave VARCHAR(255) NOT NULL,
  usuarioName VARCHAR(255) NOT NULL,
  equipo INT(11) NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  status INT(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (id)
)
COLLATE='utf8_bin'
;

DROP TABLE IF EXISTS cat_modelo;
CREATE TABLE IF NOT EXISTS cat_modelo(
  id INT(11) NOT NULL AUTO_INCREMENT,
  usuario INT(11) NOT NULL,
  clave VARCHAR(255) NOT NULL,
  usuarioName VARCHAR(255) NOT NULL,
  marca INT(11) NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  status INT(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (id)
)
COLLATE='utf8_bin'
;

DROP TABLE IF EXISTS cat_noSerie;
CREATE TABLE IF NOT EXISTS cat_noSerie(
  id INT(11) NOT NULL AUTO_INCREMENT,
  usuario INT(11) NOT NULL,
  clave VARCHAR(255) NOT NULL,
  usuarioName VARCHAR(255) NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  status INT(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (id)
)
COLLATE='utf8_bin'
;


DROP TABLE IF EXISTS ordenes;
CREATE TABLE IF NOT EXISTS ordenes(
  id INT(11) NOT NULL AUTO_INCREMENT,
  usuario INT(11) NOT NULL,
  clave VARCHAR(255) NOT NULL,
  usuarioName VARCHAR(255) NOT NULL,
  cliente INT(11) NOT NULL,
  colaborador INT(11) NOT NULL,
  status INT(11) NOT NULL DEFAULT '1',
  creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  actualización TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
)
COLLATE='utf8_bin'
;

DROP TABLE IF EXISTS ordenes_detalles;
CREATE TABLE IF NOT EXISTS ordenes_detalles(
  id INT(11) NOT NULL AUTO_INCREMENT,
  id_orden INT(11) NOT NULL,
  equipo INT(11) NOT NULL,
  marca INT(11) NOT NULL,
  modelo INT(11) NOT NULL,
  noSerie VARCHAR(50) NOT NULL,
  servicio VARCHAR(50) NOT NULL,
  producto VARCHAR(50) NOT NULL,
  precio INT(11) NOT NULL,
  observaciones TEXT NOT NULL,
  observacionesPre TEXT NOT NULL,
  observacionesFin TEXT NOT NULL,
  creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  actualización TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
)
COLLATE='utf8_bin'
;

DROP TABLE IF EXISTS ordenes_detalles_servicios;
CREATE TABLE IF NOT EXISTS ordenes_detalles_servicios(
  id INT(11) NOT NULL AUTO_INCREMENT,
  id_orden_detalles INT(11) NOT NULL,
  servicio VARCHAR(50) NOT NULL,
  asignado INT(11) NOT NULL DEFAULT '0',
  creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  actualización TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
)
COLLATE='utf8_bin'
;

DROP TABLE IF EXISTS ordenes_detalles_productos;
CREATE TABLE IF NOT EXISTS ordenes_detalles_productos(
  id INT(11) NOT NULL AUTO_INCREMENT,
  id_orden_detalles INT(11) NOT NULL,
  producto VARCHAR(50) NOT NULL,
  precio INT(11) NOT NULL,
  asignado INT(11) NOT NULL DEFAULT '0',
  creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  actualización TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
)
COLLATE='utf8_bin'
;




SET FOREIGN_KEY_CHECKS=1;

ALTER TABLE usuarios
  ADD CONSTRAINT FK_usuario_rol FOREIGN KEY (rol) REFERENCES cat_roles (id);

ALTER TABLE clientes
  ADD CONSTRAINT FK_clientes_usuario FOREIGN KEY (usuario) REFERENCES usuarios (id);

ALTER TABLE colaboradores
  ADD CONSTRAINT FK_colaboradores_usuario FOREIGN KEY (usuario) REFERENCES usuarios (id);
  ADD CONSTRAINT FK_colaboradores_rol FOREIGN KEY (rol) REFERENCES cat_roles (id);

ALTER TABLE cat_equipos
  ADD CONSTRAINT FK_equipos_usuario FOREIGN KEY (usuario) REFERENCES usuarios (id);

ALTER TABLE cat_servicios
  ADD CONSTRAINT FK_servicios_usuario FOREIGN KEY (usuario) REFERENCES usuarios (id);

ALTER TABLE cat_productos
  ADD CONSTRAINT FK_productos_usuario FOREIGN KEY (usuario) REFERENCES usuarios (id);

ALTER TABLE cat_marca
  ADD CONSTRAINT FK_marca_usuario FOREIGN KEY (usuario) REFERENCES usuarios (id),
  ADD CONSTRAINT FK_marca_equipo FOREIGN KEY (equipo) REFERENCES cat_equipos (id);

ALTER TABLE cat_modelo
  ADD CONSTRAINT FK_modelo_usuario FOREIGN KEY (usuario) REFERENCES usuarios (id),
  ADD CONSTRAINT FK_modelo_marca FOREIGN KEY (marca) REFERENCES cat_marca (id);


ALTER TABLE ordenes_detalles
  ADD CONSTRAINT FK_orden_equipo FOREIGN KEY (equipo) REFERENCES cat_equipos (id),
  ADD CONSTRAINT FK_detalle_orden FOREIGN KEY (id_orden) REFERENCES ordenes (id);

ALTER TABLE ordenes
  ADD CONSTRAINT FK_orden_cliente FOREIGN KEY (cliente) REFERENCES clientes (id),
  ADD CONSTRAINT FK_orden_usuario FOREIGN KEY (usuario) REFERENCES usuarios (id),
  ADD CONSTRAINT FK_orden_colaborador FOREIGN KEY (colaborador) REFERENCES colaboradores (id);

ALTER TABLE ordenes_detalles_servicios
  ADD CONSTRAINT FK_ordenes_detalles FOREIGN KEY (id_orden_detalles) REFERENCES ordenes_detalles (id);

ALTER TABLE ordenes_detalles_productos
  ADD CONSTRAINT FK_ordenes_detalles_ FOREIGN KEY (id_orden_detalles) REFERENCES ordenes_detalles (id);

INSERT INTO usuarios (username,password,nombre,rol,clave,status) VALUES
            ('prueba',MD5('123'),'prueba',1,'admin', 1);