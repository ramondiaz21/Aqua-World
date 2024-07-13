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

INSERT INTO usuarios (username, password, nombre, rol_id, status)
VALUES ('usuario_adulto', 'password_seguro', 'Nombre del Adulto', 3, 1);

SET @idUsuarioAdulto = LAST_INSERT_ID();

DROP TABLE IF EXISTS adulto;
CREATE TABLE IF NOT EXISTS adulto (
id INT(11) NOT NULL AUTO_INCREMENT,
usuario_id INT(11) NOT NULL, -- Referencia al usuario
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

INSERT INTO adulto (
usuario_id,nombre, edad, telefono, nacionalidad, fechaDeNacimiento, domicilio,
alergiaOtrosRequerimientos, nombreTelefonoEmergencia, antecedentesMedicos, grupoSanguineo,
enfermedadCardiologica, cualEnfermedadCardiologica, medicoPrivadoPublico, cualMedicoPrivadoPublico,
otraActividadDeportiva, cualOtraActividadDeportiva, autorizacionFotos, recibirClasesEnAgua,
cualrecibirClasesEnAgua, experienciaDesagradableConAgua, cualexperienciaDesagradableConAgua,
temorAguaNadar, cualtemorAguaNadar, experienciaAcuatica, aceptaAguaCara, temorAgua,
practicaNadando, tipoServicioAdquirido, firmaUsuario, selloAquaWorld
) VALUES (
@idUsuarioAdulto,'Ramon',30, '5551234567', 'Mexicana', '1990-01-01', 'Domicilio Ejemplo',
'No', 'Nombre Emergencia, 5558765432', 'Ninguno', 'O+',
0, '', 0, '',
0, '', 0, 0,
'', 0, '',
0, '', 2, 1, 0,
5, 'Servicio Básico', 'Firma del Usuario', 'Sello de AquaWorld'
);

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

DROP TABLE IF EXISTS adulto_paquete;
CREATE TABLE IF NOT EXISTS adulto_paquete (
adulto_id INT(11) NOT NULL,
paquete_id INT(11) NOT NULL,
PRIMARY KEY (adulto_id, paquete_id),
CONSTRAINT FK_adulto_paquete_adulto FOREIGN KEY (adulto_id) REFERENCES adulto(id),
CONSTRAINT FK_adulto_paquete_paquete FOREIGN KEY (paquete_id) REFERENCES mensualidades_paquetes(id)
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

SET FOREIGN_KEY_CHECKS=1;