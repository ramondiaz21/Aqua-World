-- --------------------------------------------------------
-- Host: 127.0.0.1
-- Versión del servidor: 5.7.17-log - MySQL Community Server (GPL)
-- SO del servidor: Win32
-- HeidiSQL Versión: 9.5.0.5196
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
  creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  actualización TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
)COLLATE='utf8_bin';

INSERT INTO cat_roles(nombre,status) VALUES('administrador',1);
INSERT INTO cat_roles(nombre,status) VALUES('usuario',1);
INSERT INTO cat_roles(nombre,status) VALUES('adulto',1);
INSERT INTO cat_roles(nombre,status) VALUES('nino',1);

DROP TABLE IF EXISTS usuarios;
CREATE TABLE IF NOT EXISTS usuarios(
  id INT(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  rol_id INT(11) NOT NULL,
  status INT(11) NOT NULL DEFAULT '1',
  creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  CONSTRAINT FK_usuario_rol FOREIGN KEY (rol_id) REFERENCES cat_roles(id)
) COLLATE='utf8_bin';

DROP TABLE IF EXISTS adulto;
CREATE TABLE IF NOT EXISTS adulto (
  id INT(11) NOT NULL AUTO_INCREMENT,
  usuario_id INT(11) NOT NULL,  -- Referencia al usuario
  edad INT(11) NOT NULL,
  telefono VARCHAR(15) NOT NULL,
  nacionalidad VARCHAR(255) NOT NULL,
  fechaDeNacimiento DATE NOT NULL,
  domicilio VARCHAR(255) NOT NULL,
  alergiaOtrosRequerimientos VARCHAR(510) NOT NULL,
  nombreTelefonoEmergencia VARCHAR(510) NOT NULL,
  antecedentesMedicos VARCHAR(510) NOT NULL,
  grupoSanguineo VARCHAR(255) NOT NULL,
  enfermedadCardiologica TINYINT(1) NOT NULL DEFAULT 0,
  cualEnfermedadCardiologica VARCHAR(255),
  medicoPrivadoPublico TINYINT(1) NOT NULL DEFAULT 0,
  cualMedicoPrivadoPublico VARCHAR(255),
  otraActividadDeportiva TINYINT(1) NOT NULL DEFAULT 0,
  cualOtraActividadDeportiva VARCHAR(255),
  autorizacionFotos TINYINT(1) NOT NULL DEFAULT 0,
  recibirClasesEnAgua TINYINT(1) NOT NULL DEFAULT 0,
  cualrecibirClasesEnAgua VARCHAR(255),
  experienciaDesagradableConAgua TINYINT(1) NOT NULL DEFAULT 0,
  cualexperienciaDesagradableConAgua VARCHAR(255),
  temorAguaNadar TINYINT(1) NOT NULL DEFAULT 0,
  cualtemorAguaNadar VARCHAR(255),
  experienciaAcuatica TINYINT(2) NOT NULL DEFAULT 0,
  aceptaAguaCara TINYINT(1) NOT NULL DEFAULT 0,
  temorAgua TINYINT(1) NOT NULL DEFAULT 0,
  practicaNadando TINYINT(4) NOT NULL DEFAULT 0,
  tipoServicioAdquirido VARCHAR(510) NOT NULL,
  firmaUsuario VARCHAR(255),
  selloAquaWorld VARCHAR(255),
  status INT(11) NOT NULL DEFAULT '1',
  creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  CONSTRAINT FK_adulto_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
) COLLATE='utf8_bin';

DROP TABLE IF EXISTS nino;
CREATE TABLE IF NOT EXISTS nino (
    id INT(11) NOT NULL AUTO_INCREMENT,
    usuario_id INT(11) NOT NULL,
    edad INT(11) NOT NULL,
    telefono VARCHAR(15) NOT NULL,
    nacionalidad VARCHAR(255) NOT NULL,
    fechaDeNacimiento DATE NOT NULL,
    domicilio VARCHAR(255) NOT NULL,
    escuelaProcedencia VARCHAR(255),
    escolaridad VARCHAR(255),
    grado INT(11),
    tipoSangre VARCHAR(10),
    alergiasOtrosRequerimientos VARCHAR(510),
    recomendacionesEspeciales VARCHAR(510),
    antecedentesMedicos VARCHAR(510),
    grupoSanguineo VARCHAR(255),
    enfermedadCardiologica TINYINT(1) NOT NULL DEFAULT 0,
    cualEnfermedadCardiologica VARCHAR(255),
    tratamientoMedico TINYINT(1) NOT NULL DEFAULT 0,
    descripcionTratamientoMedico VARCHAR(255),
    servicioMedico TINYINT(1) NOT NULL DEFAULT 0,
    cualServicioMedico VARCHAR(255),
    altaActividadDeportiva TINYINT(1) NOT NULL DEFAULT 0,
    cualActividadDeportiva VARCHAR(255),
    autorizacionFotos TINYINT(1) NOT NULL DEFAULT 0,
    tipoProgramaInicio VARCHAR(255),
    experienciaClasesAgua TINYINT(1) NOT NULL DEFAULT 0,
    tiempoExperienciaClasesAgua VARCHAR(255),
    experienciaDesagradableAgua TINYINT(1) NOT NULL DEFAULT 0,
    motivoExperienciaDesagradableAgua VARCHAR(255),
    temorAguaNadar TINYINT(1) NOT NULL DEFAULT 0,
    motivoTemorAguaNadar VARCHAR(255),
    nivelPracticaNadando INT(11) NOT NULL DEFAULT 0,
    aceptaAguaCara TINYINT(1) NOT NULL DEFAULT 0,
    temorAgua TINYINT(1) NOT NULL DEFAULT 0,
    actitudEnAgua INT(11),
    tipoServicioAdquirido VARCHAR(510),
    firmaAutorizacionCliente VARCHAR(255),
    selloAquaWorld VARCHAR(255),
    nombrePapa VARCHAR(255) NOT NULL,
    nacionalidadPapa VARCHAR(255) NOT NULL,
    telefonoPapa VARCHAR(15) NOT NULL,
    emailPapa VARCHAR(255) NOT NULL,
    nombreMama VARCHAR(255) NOT NULL,
    nacionalidadMama VARCHAR(255) NOT NULL,
    telefonoMama VARCHAR(15) NOT NULL,
    emailMama VARCHAR(255) NOT NULL,
    nombreTelefonoEmergencia VARCHAR(510) NOT NULL,
    personasAutorizadasRecoger TEXT,
    tieneHermanos INT(11) NOT NULL DEFAULT 0,
    cantidadHermanos INT(11),
    autorizacionApoyoAdulto TINYINT(1) NOT NULL DEFAULT 0,
    mensualidadPaquete VARCHAR(255),
    inicioPrimeraMensualidad DATE,
    status INT(11) NOT NULL DEFAULT '1',
    creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT FK_nino_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
) COLLATE='utf8_bin';



DROP TABLE IF EXISTS mensualidades_paquetes;
CREATE TABLE IF NOT EXISTS mensualidades_paquetes (
  id INT(11) AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  status INT(11) NOT NULL DEFAULT '1',
  creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) COLLATE='utf8_bin';

INSERT INTO mensualidades_paquetes(nombre,status) VALUES('Aquaerobic',1);
INSERT INTO mensualidades_paquetes(nombre,status) VALUES('Nado Libre',1);
INSERT INTO mensualidades_paquetes(nombre,status) VALUES('Aquafitness',1);
INSERT INTO mensualidades_paquetes(nombre,status) VALUES('Water Spinning',1);
INSERT INTO mensualidades_paquetes(nombre,status) VALUES('Aquatic Pole',1);
INSERT INTO mensualidades_paquetes(nombre,status) VALUES('Rehabilitacion',1);
INSERT INTO mensualidades_paquetes(nombre,status) VALUES('Aqua Yoga',1);
INSERT INTO mensualidades_paquetes(nombre,status) VALUES('Otro',1);

DROP TABLE IF EXISTS dias;
CREATE TABLE IF NOT EXISTS dias (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  status INT(11) NOT NULL DEFAULT '1',
  creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) COLLATE='utf8_bin';

INSERT INTO dias(nombre,status) VALUES('Lunes',1);
INSERT INTO dias(nombre,status) VALUES('Martes',1);
INSERT INTO dias(nombre,status) VALUES('Miercoles',1);
INSERT INTO dias(nombre,status) VALUES('Jueves',1);
INSERT INTO dias(nombre,status) VALUES('Viernes',1);
INSERT INTO dias(nombre,status) VALUES('Sábado',1);
INSERT INTO dias(nombre,status) VALUES('Domingo',1);

DROP TABLE IF EXISTS usuario_paquete;
CREATE TABLE IF NOT EXISTS usuario_paquete (
    usuario_id INT(11) NOT NULL,
    paquete_id INT(11) NOT NULL,
    PRIMARY KEY (usuario_id, paquete_id),
    CONSTRAINT FK_usuario_paquete_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    CONSTRAINT FK_usuario_paquete_paquete FOREIGN KEY (paquete_id) REFERENCES mensualidades_paquetes(id)
) COLLATE='utf8_bin';

DROP TABLE IF EXISTS paquete_dias;
CREATE TABLE IF NOT EXISTS paquete_dias (
    paquete_id INT(11) NOT NULL,
    dia_id INT(11) NOT NULL,
    PRIMARY KEY (paquete_id, dia_id),
    CONSTRAINT FK_paquete_dias_paquete FOREIGN KEY (paquete_id) REFERENCES mensualidades_paquetes(id),
    CONSTRAINT FK_paquete_dias_dia FOREIGN KEY (dia_id) REFERENCES dias(id)
) COLLATE='utf8_bin';

CREATE TABLE IF NOT EXISTS mensualidades_paquetes_nino (
    id INT(11) AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    status INT(11) NOT NULL DEFAULT '1',
    creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) COLLATE='utf8_bin';

INSERT INTO mensualidades_paquetes_nino(nombre,status) VALUES('Natación niños 3 días',1);
INSERT INTO mensualidades_paquetes_nino(nombre,status) VALUES('Natación niños 2 días',1);
INSERT INTO mensualidades_paquetes_nino(nombre,status) VALUES('Natación niños 1 día',1);
INSERT INTO mensualidades_paquetes_nino(nombre,status) VALUES('Natación grupal 3 días',1);
INSERT INTO mensualidades_paquetes_nino(nombre,status) VALUES('Natación grupal 2 días',1);
INSERT INTO mensualidades_paquetes_nino(nombre,status) VALUES('Otro',1);

CREATE TABLE IF NOT EXISTS paquete_dias_nino (
    nino_id INT(11) NOT NULL,
    paquete_id INT(11) NOT NULL,
    dia_id INT(11) NOT NULL,
    PRIMARY KEY (nino_id, paquete_id, dia_id),
    CONSTRAINT FK_paquete_dias_nino_nino FOREIGN KEY (nino_id) REFERENCES nino(id),
    CONSTRAINT FK_paquete_dias_nino_paquete FOREIGN KEY (paquete_id) REFERENCES mensualidades_paquetes_nino(id),
    CONSTRAINT FK_paquete_dias_nino_dia FOREIGN KEY (dia_id) REFERENCES dias(id)
) COLLATE='utf8_bin';

