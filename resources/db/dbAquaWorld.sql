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
id INT(11)  AUTO_INCREMENT,
nombre VARCHAR(50) ,
status INT(11)  DEFAULT '1',
creacion TIMESTAMP  DEFAULT CURRENT_TIMESTAMP,
actualización TIMESTAMP  DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (id)
)COLLATE='utf8_bin';

INSERT INTO cat_roles(nombre,status) VALUES('administrador',1);
INSERT INTO cat_roles(nombre,status) VALUES('usuario',1);
INSERT INTO cat_roles(nombre,status) VALUES('adulto',1);
INSERT INTO cat_roles(nombre,status) VALUES('nino',1);

DROP TABLE IF EXISTS usuarios;
CREATE TABLE IF NOT EXISTS usuarios(
id INT(11)  AUTO_INCREMENT,
username VARCHAR(255)  UNIQUE,
password VARCHAR(255) ,
nombre VARCHAR(255) ,
rol_id INT(11) ,
status INT(11)  DEFAULT '1',
creacion TIMESTAMP  DEFAULT CURRENT_TIMESTAMP,
actualizacion TIMESTAMP  DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (id),
CONSTRAINT FK_usuario_rol FOREIGN KEY (rol_id) REFERENCES cat_roles(id)
) COLLATE='utf8_bin';

INSERT INTO usuarios (username, password, nombre, rol_id, status)
VALUES ('usuario_adulto', 'password_seguro', 'Nombre del Adulto', 3, 1);

SET @idUsuarioAdulto = LAST_INSERT_ID();

DROP TABLE IF EXISTS adulto;
CREATE TABLE IF NOT EXISTS adulto (
id INT(11)  AUTO_INCREMENT,
usuario_id INT(11) , -- Referencia al usuario
nombre VARCHAR(255),
edad INT(11),
telefono VARCHAR(15),
nacionalidad VARCHAR(255),
fechaDeNacimiento DATE,
domicilio VARCHAR(255),
alergiaOtrosRequerimientos VARCHAR(510),
nombreTelefonoEmergencia VARCHAR(510),
antecedentesMedicos VARCHAR(510),
grupoSanguineo VARCHAR(255),
enfermedadCardiologica TINYINT(1) DEFAULT 0,
cualEnfermedadCardiologica VARCHAR(255),

tratamientoMedico TINYINT(1) DEFAULT 0,
cualtratamientoMedico VARCHAR(255),

medicoPrivadoPublico TINYINT(1) DEFAULT 0,
cualMedicoPrivadoPublico VARCHAR(255),
otraActividadDeportiva TINYINT(1) DEFAULT 0,
cualOtraActividadDeportiva VARCHAR(255),
autorizacionFotos TINYINT(1) DEFAULT 0,

servicio_aquaerobic_lunes VARCHAR(50),
servicio_aquaerobic_martes VARCHAR(50),
servicio_aquaerobic_miercoles VARCHAR(50),
servicio_aquaerobic_jueves VARCHAR(50),
servicio_aquaerobic_viernes VARCHAR(50),
servicio_aquaerobic_sabado VARCHAR(50),

servicio_nado_libre_lunes VARCHAR(50),
servicio_nado_libre_martes VARCHAR(50),
servicio_nado_libre_miercoles VARCHAR(50),
servicio_nado_libre_jueves VARCHAR(50),
servicio_nado_libre_viernes VARCHAR(50),
servicio_nado_libre_sabado VARCHAR(50),

servicio_aquafitness_lunes VARCHAR(50),
servicio_aquafitness_martes VARCHAR(50),
servicio_aquafitness_miercoles VARCHAR(50),
servicio_aquafitness_jueves VARCHAR(50),
servicio_aquafitness_viernes VARCHAR(50),
servicio_aquafitness_sabado VARCHAR(50),

servicio_water_spinning_lunes VARCHAR(50),
servicio_water_spinning_martes VARCHAR(50),
servicio_water_spinning_miercoles VARCHAR(50),
servicio_water_spinning_jueves VARCHAR(50),
servicio_water_spinning_viernes VARCHAR(50),
servicio_water_spinning_sabado VARCHAR(50),

servicio_aquatic_pole_lunes VARCHAR(50),
servicio_aquatic_pole_martes VARCHAR(50),
servicio_aquatic_pole_miercoles VARCHAR(50),
servicio_aquatic_pole_jueves VARCHAR(50),
servicio_aquatic_pole_viernes VARCHAR(50),
servicio_aquatic_pole_sabado VARCHAR(50),

servicio_rehabilitacion_lunes VARCHAR(50),
servicio_rehabilitacion_martes VARCHAR(50),
servicio_rehabilitacion_miercoles VARCHAR(50),
servicio_rehabilitacion_jueves VARCHAR(50),
servicio_rehabilitacion_viernes VARCHAR(50),
servicio_rehabilitacion_sabado VARCHAR(50),

servicio_aqua_yoga_lunes VARCHAR(50),
servicio_aqua_yoga_martes VARCHAR(50),
servicio_aqua_yoga_miercoles VARCHAR(50),
servicio_aqua_yoga_jueves VARCHAR(50),
servicio_aqua_yoga_viernes VARCHAR(50),
servicio_aqua_yoga_sabado VARCHAR(50),

servicio_otro VARCHAR(255),
especificarPaquete VARCHAR(255),

recibirClasesEnAgua TINYINT(1) DEFAULT 0,
cualrecibirClasesEnAgua VARCHAR(255),
experienciaDesagradableConAgua TINYINT(1) DEFAULT 0,
cualexperienciaDesagradableConAgua VARCHAR(255),
temorAguaNadar TINYINT(1) DEFAULT 0,
cualtemorAguaNadar VARCHAR(255),
experienciaAcuatica TINYINT(2) DEFAULT 0,
aceptaAguaCara TINYINT(1) DEFAULT 0,
temorAgua TINYINT(1) DEFAULT 0,
practicaNadando TINYINT(4) DEFAULT 0,
tipoServicioAdquirido VARCHAR(510),
firmaUsuario VARCHAR(255),
selloAquaWorld VARCHAR(255),
status INT(11) DEFAULT '1',
creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (id),
CONSTRAINT FK_adulto_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
) COLLATE='utf8_bin';

DROP TABLE IF EXISTS nino;
CREATE TABLE IF NOT EXISTS nino (
id INT(11)  AUTO_INCREMENT,
usuario_id INT(11) ,
nombre VARCHAR(255) ,
fechaDeNacimiento DATE ,
edad INT(11) ,
domicilio VARCHAR(255) ,
escuelaProcedencia VARCHAR(255),
escolaridad VARCHAR(255),
grado INT(11),
tipoSangre VARCHAR(10),
alergiasOtrosRequerimientos VARCHAR(510),
recomendacionesEspeciales VARCHAR(510),
antecedentesMedicos VARCHAR(510),
grupoSanguineo VARCHAR(255),
enfermedadCardiologica TINYINT(1)  DEFAULT 0,
cualEnfermedadCardiologica VARCHAR(255),
tratamientoMedico TINYINT(1)  DEFAULT 0,
descripcionTratamientoMedico VARCHAR(255),
servicioMedico TINYINT(1)  DEFAULT 0,
cualServicioMedico VARCHAR(255),
altaActividadDeportiva TINYINT(1)  DEFAULT 0,
cualActividadDeportiva VARCHAR(255),
autorizacionFotos TINYINT(1)  DEFAULT 0,
tipoProgramaInicio VARCHAR(255),

experienciaClasesAgua TINYINT(1)  DEFAULT 0,
tiempoExperienciaClasesAgua VARCHAR(255),
experienciaDesagradableAgua TINYINT(1)  DEFAULT 0,
motivoExperienciaDesagradableAgua VARCHAR(255),
temorAguaNadar TINYINT(1)  DEFAULT 0,
motivoTemorAguaNadar VARCHAR(255),

nivelPracticaNadando INT(11)  DEFAULT 0,
clasesNatacion TINYINT(1)  DEFAULT 0,
tiempoClasesNatacion VARCHAR(255),

aceptaAguaCara TINYINT(1)  DEFAULT 0,

playaActitud INT(11),
rioActitud INT(11),
albercaActitud INT(11),

tipoServicioAdquirido VARCHAR(510),
firmaAutorizacionCliente VARCHAR(255),
selloAquaWorld VARCHAR(255),

nombrePapa VARCHAR(255) ,
nacionalidadPapa VARCHAR(255) ,
telefonoPapa VARCHAR(15) ,
emailPapa VARCHAR(255) ,
nombreMama VARCHAR(255) ,
nacionalidadMama VARCHAR(255) ,
telefonoMama VARCHAR(15) ,
emailMama VARCHAR(255) ,
nombreTelefonoEmergencia VARCHAR(510) ,
personasAutorizadasRecoger TEXT,
tieneHermanos VARCHAR(11) ,
autorizacionApoyoAdulto TINYINT(1)  DEFAULT 0,

natacion_ninos_3dias_lunes VARCHAR(50),
natacion_ninos_3dias_martes VARCHAR(50),
natacion_ninos_3dias_miercoles VARCHAR(50),
natacion_ninos_3dias_jueves VARCHAR(50),
natacion_ninos_3dias_viernes VARCHAR(50),
natacion_ninos_3dias_sabado VARCHAR(50),

natacion_ninos_2dias_lunes VARCHAR(50),
natacion_ninos_2dias_martes VARCHAR(50),
natacion_ninos_2dias_miercoles VARCHAR(50),
natacion_ninos_2dias_jueves VARCHAR(50),
natacion_ninos_2dias_viernes VARCHAR(50),
natacion_ninos_2dias_sabado VARCHAR(50),

natacion_ninos_1dia_lunes VARCHAR(50),
natacion_ninos_1dia_martes VARCHAR(50),
natacion_ninos_1dia_miercoles VARCHAR(50),
natacion_ninos_1dia_jueves VARCHAR(50),
natacion_ninos_1dia_viernes VARCHAR(50),
natacion_ninos_1dia_sabado VARCHAR(50),

natacion_grupal_3dias_lunes VARCHAR(50),
natacion_grupal_3dias_martes VARCHAR(50),
natacion_grupal_3dias_miercoles VARCHAR(50),
natacion_grupal_3dias_jueves VARCHAR(50),
natacion_grupal_3dias_viernes VARCHAR(50),
natacion_grupal_3dias_sabado VARCHAR(50),

natacion_grupal_2dias_lunes VARCHAR(50),
natacion_grupal_2dias_martes VARCHAR(50),
natacion_grupal_2dias_miercoles VARCHAR(50),
natacion_grupal_2dias_jueves VARCHAR(50),
natacion_grupal_2dias_viernes VARCHAR(50),
natacion_grupal_2dias_sabado VARCHAR(50),

otro_paquete VARCHAR(255),
especificarPaquete VARCHAR(255),
inicioPrimeraMensualidad DATE,
status INT(11)  DEFAULT '1',
creacion TIMESTAMP  DEFAULT CURRENT_TIMESTAMP,
actualizacion TIMESTAMP  DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (id),
CONSTRAINT FK_nino_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
) COLLATE='utf8_bin';



SET FOREIGN_KEY_CHECKS=1;