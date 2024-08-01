<?php 

require_once '../utilities/DBConnection.class.php';
require_once '../utilities/Main.class.php';
require_once '../utilities/Session.class.php';

class Adultos {

   public static function mostrarAdultos() {
    $consulta = "SELECT 
        id,nombre, edad, telefono, nacionalidad, fechaDeNacimiento, domicilio, 
        alergiaOtrosRequerimientos, nombreTelefonoEmergencia, antecedentesMedicos, grupoSanguineo, 
        enfermedadCardiologica, cualEnfermedadCardiologica,tratamientoMedico, cualtratamientoMedico,
        medicoPrivadoPublico, cualMedicoPrivadoPublico, 
        otraActividadDeportiva, cualOtraActividadDeportiva, autorizacionFotos, 
        servicio_aquaerobic_lunes, servicio_aquaerobic_martes, servicio_aquaerobic_miercoles, 
        servicio_aquaerobic_jueves, servicio_aquaerobic_viernes,
        servicio_nado_libre_lunes, servicio_nado_libre_martes, servicio_nado_libre_miercoles, 
        servicio_nado_libre_jueves, servicio_nado_libre_viernes,
        servicio_aquafitness_lunes, servicio_aquafitness_martes, servicio_aquafitness_miercoles, 
        servicio_aquafitness_jueves, servicio_aquafitness_viernes,
        servicio_water_spinning_lunes, servicio_water_spinning_martes, servicio_water_spinning_miercoles, 
        servicio_water_spinning_jueves, servicio_water_spinning_viernes,
        servicio_aquatic_pole_lunes, servicio_aquatic_pole_martes, servicio_aquatic_pole_miercoles, 
        servicio_aquatic_pole_jueves, servicio_aquatic_pole_viernes,
        servicio_rehabilitacion_lunes, servicio_rehabilitacion_martes, servicio_rehabilitacion_miercoles, 
        servicio_rehabilitacion_jueves, servicio_rehabilitacion_viernes,
        servicio_aqua_yoga_lunes, servicio_aqua_yoga_martes, servicio_aqua_yoga_miercoles, 
        servicio_aqua_yoga_jueves, servicio_aqua_yoga_viernes,
        servicio_otro,especificarPaquete, recibirClasesEnAgua, 
        cualrecibirClasesEnAgua, experienciaDesagradableConAgua, cualexperienciaDesagradableConAgua, 
        temorAguaNadar, cualtemorAguaNadar, experienciaAcuatica, aceptaAguaCara, temorAgua, 
        practicaNadando, tipoServicioAdquirido
    FROM adulto";
    return DBConnection::query_row($consulta);
}

 public static function mostrarTabla() {
    $consulta = "SELECT 
         id,nombre, edad, telefono, fechaDeNacimiento, domicilio, 
         nombreTelefonoEmergencia
    FROM adulto";
    return DBConnection::query_row($consulta);
}

    public function agregarAdultos($info) {

    // Asegurarse de que todos los campos existan en el arreglo
    $nombre = $info['nombre'];
    $edad = $info['edad'];
    $telefono = $info['telefono'];
    $nacionalidad = $info['nacionalidad'];
    $fechaDeNacimiento = $info['fechaDeNacimiento'];
    $domicilio = $info['domicilio'];
    $alergiaOtrosRequerimientos = $info['alergiaOtrosRequerimientos'];
    $nombreTelefonoEmergencia = $info['nombreTelefonoEmergencia'];
    $antecedentesMedicos = $info['antecedentesMedicos'];
    $grupoSanguineo = $info['grupoSanguineo'];
    $enfermedadCardiologica = $info['enfermedadCardiologica'];
    $cualEnfermedadCardiologica = $info['cualEnfermedadCardiologica'];

    $tratamientoMedico = $info['tratamientoMedico'];
    $cualtratamientoMedico = $info['cualtratamientoMedico'];

    $medicoPrivadoPublico = $info['medicoPrivadoPublico'];
    $cualMedicoPrivadoPublico = $info['cualMedicoPrivadoPublico'];
    $otraActividadDeportiva = $info['otraActividadDeportiva'];
    $cualOtraActividadDeportiva = $info['cualOtraActividadDeportiva'];
    $autorizacionFotos = $info['autorizacionFotos'];

    // Campos de servicios acuáticos
    $servicio_aquaerobic_lunes = $info['servicio_aquaerobic_lunes'];
    $servicio_aquaerobic_martes = $info['servicio_aquaerobic_martes'];
    $servicio_aquaerobic_miercoles = $info['servicio_aquaerobic_miercoles'];
    $servicio_aquaerobic_jueves = $info['servicio_aquaerobic_jueves'];
    $servicio_aquaerobic_viernes = $info['servicio_aquaerobic_viernes'];

    $servicio_nado_libre_lunes = $info['servicio_nado_libre_lunes'];
    $servicio_nado_libre_martes = $info['servicio_nado_libre_martes'];
    $servicio_nado_libre_miercoles = $info['servicio_nado_libre_miercoles'];
    $servicio_nado_libre_jueves = $info['servicio_nado_libre_jueves'];
    $servicio_nado_libre_viernes = $info['servicio_nado_libre_viernes'];

    $servicio_aquafitness_lunes = $info['servicio_aquafitness_lunes'];
    $servicio_aquafitness_martes = $info['servicio_aquafitness_martes'];
    $servicio_aquafitness_miercoles = $info['servicio_aquafitness_miercoles'];
    $servicio_aquafitness_jueves = $info['servicio_aquafitness_jueves'];
    $servicio_aquafitness_viernes = $info['servicio_aquafitness_viernes'];

    $servicio_water_spinning_lunes = $info['servicio_water_spinning_lunes'];
    $servicio_water_spinning_martes = $info['servicio_water_spinning_martes'];
    $servicio_water_spinning_miercoles = $info['servicio_water_spinning_miercoles'];
    $servicio_water_spinning_jueves = $info['servicio_water_spinning_jueves'];
    $servicio_water_spinning_viernes = $info['servicio_water_spinning_viernes'];

    $servicio_aquatic_pole_lunes = $info['servicio_aquatic_pole_lunes'];
    $servicio_aquatic_pole_martes = $info['servicio_aquatic_pole_martes'];
    $servicio_aquatic_pole_miercoles = $info['servicio_aquatic_pole_miercoles'];
    $servicio_aquatic_pole_jueves = $info['servicio_aquatic_pole_jueves'];
    $servicio_aquatic_pole_viernes = $info['servicio_aquatic_pole_viernes'];

    $servicio_rehabilitacion_lunes = $info['servicio_rehabilitacion_lunes'];
    $servicio_rehabilitacion_martes = $info['servicio_rehabilitacion_martes'];
    $servicio_rehabilitacion_miercoles = $info['servicio_rehabilitacion_miercoles'];
    $servicio_rehabilitacion_jueves = $info['servicio_rehabilitacion_jueves'];
    $servicio_rehabilitacion_viernes = $info['servicio_rehabilitacion_viernes'];

    $servicio_aqua_yoga_lunes = $info['servicio_aqua_yoga_lunes'];
    $servicio_aqua_yoga_martes = $info['servicio_aqua_yoga_martes'];
    $servicio_aqua_yoga_miercoles = $info['servicio_aqua_yoga_miercoles'];
    $servicio_aqua_yoga_jueves = $info['servicio_aqua_yoga_jueves'];
    $servicio_aqua_yoga_viernes = $info['servicio_aqua_yoga_viernes'];

    $servicio_otro = $info['servicio_otro'];
    $especificarPaquete = $info['especificarPaquete'];

    $recibirClasesEnAgua = $info['recibirClasesEnAgua'];
    $cualrecibirClasesEnAgua = $info['cualrecibirClasesEnAgua'];
    $experienciaDesagradableConAgua = $info['experienciaDesagradableConAgua'];
    $cualexperienciaDesagradableConAgua = $info['cualexperienciaDesagradableConAgua'];
    $temorAguaNadar = $info['temorAguaNadar'];
    $cualtemorAguaNadar = $info['cualtemorAguaNadar'];
    $experienciaAcuatica = $info['experienciaAcuatica'];
    $aceptaAguaCara = $info['aceptaAguaCara'];
    $temorAgua = $info['temorAgua'];
    $practicaNadando = $info['practicaNadando'];
    $tipoServicioAdquirido = $info['tipoServicioAdquirido'];

    // Consulta SQL para insertar datos en la base de datos
    $consulta = "INSERT INTO adulto (
        usuario_id, nombre, edad, telefono, nacionalidad, fechaDeNacimiento, domicilio, 
        alergiaOtrosRequerimientos, nombreTelefonoEmergencia, antecedentesMedicos, grupoSanguineo, 
        enfermedadCardiologica, cualEnfermedadCardiologica,tratamientoMedico, cualtratamientoMedico,
        medicoPrivadoPublico, cualMedicoPrivadoPublico, 
        otraActividadDeportiva, cualOtraActividadDeportiva, autorizacionFotos, 
        servicio_aquaerobic_lunes, servicio_aquaerobic_martes, servicio_aquaerobic_miercoles, 
        servicio_aquaerobic_jueves, servicio_aquaerobic_viernes,
        servicio_nado_libre_lunes, servicio_nado_libre_martes, servicio_nado_libre_miercoles, 
        servicio_nado_libre_jueves, servicio_nado_libre_viernes, 
        servicio_aquafitness_lunes, servicio_aquafitness_martes, servicio_aquafitness_miercoles, 
        servicio_aquafitness_jueves, servicio_aquafitness_viernes, 
        servicio_water_spinning_lunes, servicio_water_spinning_martes, servicio_water_spinning_miercoles, 
        servicio_water_spinning_jueves, servicio_water_spinning_viernes,
        servicio_aquatic_pole_lunes, servicio_aquatic_pole_martes, servicio_aquatic_pole_miercoles, 
        servicio_aquatic_pole_jueves, servicio_aquatic_pole_viernes,
        servicio_rehabilitacion_lunes, servicio_rehabilitacion_martes, servicio_rehabilitacion_miercoles, 
        servicio_rehabilitacion_jueves, servicio_rehabilitacion_viernes,
        servicio_aqua_yoga_lunes, servicio_aqua_yoga_martes, servicio_aqua_yoga_miercoles, 
        servicio_aqua_yoga_jueves, servicio_aqua_yoga_viernes,
        servicio_otro,especificarPaquete, recibirClasesEnAgua, 
        cualrecibirClasesEnAgua, experienciaDesagradableConAgua, cualexperienciaDesagradableConAgua, 
        temorAguaNadar, cualtemorAguaNadar, experienciaAcuatica, aceptaAguaCara, temorAgua, 
        practicaNadando, tipoServicioAdquirido
    ) VALUES (
        1, '$nombre', '$edad', '$telefono', '$nacionalidad', '$fechaDeNacimiento', '$domicilio', 
        '$alergiaOtrosRequerimientos', '$nombreTelefonoEmergencia', '$antecedentesMedicos', '$grupoSanguineo', 
        '$enfermedadCardiologica', '$cualEnfermedadCardiologica', '$tratamientoMedico','$cualtratamientoMedico'
        ,'$medicoPrivadoPublico', '$cualMedicoPrivadoPublico', 
        '$otraActividadDeportiva', '$cualOtraActividadDeportiva', '$autorizacionFotos', 
        '$servicio_aquaerobic_lunes', '$servicio_aquaerobic_martes', '$servicio_aquaerobic_miercoles', 
        '$servicio_aquaerobic_jueves', '$servicio_aquaerobic_viernes',
        '$servicio_nado_libre_lunes', '$servicio_nado_libre_martes', '$servicio_nado_libre_miercoles', 
        '$servicio_nado_libre_jueves', '$servicio_nado_libre_viernes', 
        '$servicio_aquafitness_lunes', '$servicio_aquafitness_martes', '$servicio_aquafitness_miercoles', 
        '$servicio_aquafitness_jueves', '$servicio_aquafitness_viernes', 
        '$servicio_water_spinning_lunes', '$servicio_water_spinning_martes', '$servicio_water_spinning_miercoles', 
        '$servicio_water_spinning_jueves', '$servicio_water_spinning_viernes',
        '$servicio_aquatic_pole_lunes', '$servicio_aquatic_pole_martes', '$servicio_aquatic_pole_miercoles', 
        '$servicio_aquatic_pole_jueves', '$servicio_aquatic_pole_viernes', 
        '$servicio_rehabilitacion_lunes', '$servicio_rehabilitacion_martes', '$servicio_rehabilitacion_miercoles', 
        '$servicio_rehabilitacion_jueves', '$servicio_rehabilitacion_viernes',
        '$servicio_aqua_yoga_lunes', '$servicio_aqua_yoga_martes', '$servicio_aqua_yoga_miercoles', 
        '$servicio_aqua_yoga_jueves', '$servicio_aqua_yoga_viernes',
        '$servicio_otro', '$especificarPaquete', '$recibirClasesEnAgua', 
        '$cualrecibirClasesEnAgua', '$experienciaDesagradableConAgua', '$cualexperienciaDesagradableConAgua', 
        '$temorAguaNadar', '$cualtemorAguaNadar', '$experienciaAcuatica', '$aceptaAguaCara', '$temorAgua', 
        '$practicaNadando', '$tipoServicioAdquirido'
    )";      
   //var_dump($consulta);exit;
    return DBConnection::query($consulta);
}
}


 ?>