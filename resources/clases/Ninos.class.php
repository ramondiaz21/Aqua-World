<?php 

require_once '../utilities/DBConnection.class.php';
require_once '../utilities/Main.class.php';
require_once '../utilities/Session.class.php';

class Ninos {

    public static function mostrarNinos() {
        $consulta = "SELECT * FROM nino";
        return DBConnection::query_row($consulta);
    }

    public function agregarNinos($info) {

    // Asegurarse de que todos los campos existan en el arreglo
    $nombre = $info['nombre'];
    $fechaDeNacimiento = $info['fechaDeNacimiento'];
    $edad = $info['edad'];
    $domicilio = $info['domicilio'];
    $escuelaProcedencia = $info['escuelaProcedencia'];
    $escolaridad = $info['escolaridad'];
    $grado = $info['grado'];
    $tipoSangre = $info['tipoSangre'];
    $alergiasOtrosRequerimientos = $info['alergiasOtrosRequerimientos'];
    $recomendacionesEspeciales = $info['recomendacionesEspeciales'];
    $antecedentesMedicos = $info['antecedentesMedicos'];
    $grupoSanguineo = $info['grupoSanguineo'];
    $enfermedadCardiologica = $info['enfermedadCardiologica'];
    $cualEnfermedadCardiologica = $info['cualEnfermedadCardiologica'];
    $tratamientoMedico = $info['tratamientoMedico'];



    $descripcionTratamientoMedico = $info['descripcionTratamientoMedico'];
    $servicioMedico = $info['servicioMedico'];
    $cualServicioMedico = $info['cualServicioMedico'];
    $altaActividadDeportiva = $info['altaActividadDeportiva'];
    $cualActividadDeportiva = $info['cualActividadDeportiva'];
    $autorizacionFotos = $info['autorizacionFotos'];
    $tipoProgramaInicio = $info['tipoProgramaInicio'];
    $experienciaClasesAgua = $info['experienciaClasesAgua'];
    $tiempoExperienciaClasesAgua = $info['tiempoExperienciaClasesAgua'];
    $experienciaDesagradableAgua = $info['experienciaDesagradableAgua'];
    $motivoExperienciaDesagradableAgua = $info['motivoExperienciaDesagradableAgua'];
    $temorAguaNadar = $info['temorAguaNadar'];
    $motivoTemorAguaNadar = $info['motivoTemorAguaNadar'];

    $nivelPracticaNino = $info['nivelPracticaNino'];

    $tiempoClasesNatacion = $info['tiempoClasesNatacion'];
    $motivoclasesNatacion = $info['motivoclasesNatacion'];
    $aceptaAguaCara = $info['aceptaAguaCara'];
    $playaActitud = $info['playaActitud'];
    $rioActitud = $info['rioActitud'];
    $albercaActitud = $info['albercaActitud'];
    $tipoServicioAdquirido = $info['tipoServicioAdquirido'];

    /*$firmaAutorizacionCliente = $info['firmaAutorizacionCliente'];
    $selloAquaWorld = $info['selloAquaWorld'];*/

    $nombrePapa = $info['nombrePapa'];
    $nacionalidadPapa = $info['nacionalidadPapa'];
    $telefonoPapa = $info['telefonoPapa'];
    $emailPapa = $info['emailPapa'];
    $nombreMama = $info['nombreMama'];
    $nacionalidadMama = $info['nacionalidadMama'];
    $telefonoMama = $info['telefonoMama'];
    $emailMama = $info['emailMama'];
    $nombreTelefonoEmergencia = $info['nombreTelefonoEmergencia'];
    $personasAutorizadasRecoger = $info['personasAutorizadasRecoger'];
    $tieneHermanos = $info['tieneHermanos'];
    $autorizacionApoyoAdulto = $info['autorizacionApoyoAdulto'];

    $natacion_ninos_3dias_lunes = $info['natacion_ninos_3dias_lunes'];
    $natacion_ninos_3dias_martes = $info['natacion_ninos_3dias_martes'];
    $natacion_ninos_3dias_miercoles = $info['natacion_ninos_3dias_miercoles'];
    $natacion_ninos_3dias_jueves = $info['natacion_ninos_3dias_jueves'];
    $natacion_ninos_3dias_viernes = $info['natacion_ninos_3dias_viernes'];
    $natacion_ninos_3dias_sabado = $info['natacion_ninos_3dias_sabado'];

    $natacion_ninos_2dias_lunes = $info['natacion_ninos_2dias_lunes'];
    $natacion_ninos_2dias_martes = $info['natacion_ninos_2dias_martes'];
    $natacion_ninos_2dias_miercoles = $info['natacion_ninos_2dias_miercoles'];
    $natacion_ninos_2dias_jueves = $info['natacion_ninos_2dias_jueves'];
    $natacion_ninos_2dias_viernes = $info['natacion_ninos_2dias_viernes'];
    $natacion_ninos_2dias_sabado = $info['natacion_ninos_2dias_sabado'];

    $natacion_ninos_1dia_lunes = $info['natacion_ninos_1dia_lunes'];
    $natacion_ninos_1dia_martes = $info['natacion_ninos_1dia_martes'];
    $natacion_ninos_1dia_miercoles = $info['natacion_ninos_1dia_miercoles'];
    $natacion_ninos_1dia_jueves = $info['natacion_ninos_1dia_jueves'];
    $natacion_ninos_1dia_viernes = $info['natacion_ninos_1dia_viernes'];
    $natacion_ninos_1dia_sabado = $info['natacion_ninos_1dia_sabado'];

    $natacion_grupal_3dias_lunes = $info['natacion_grupal_3dias_lunes'];
    $natacion_grupal_3dias_martes = $info['natacion_grupal_3dias_martes'];
    $natacion_grupal_3dias_miercoles = $info['natacion_grupal_3dias_miercoles'];
    $natacion_grupal_3dias_jueves = $info['natacion_grupal_3dias_jueves'];
    $natacion_grupal_3dias_viernes = $info['natacion_grupal_3dias_viernes'];
    $natacion_grupal_3dias_sabado = $info['natacion_grupal_3dias_sabado'];

    $natacion_grupal_2dias_lunes = $info['natacion_grupal_2dias_lunes'];
    $natacion_grupal_2dias_martes = $info['natacion_grupal_2dias_martes'];
    $natacion_grupal_2dias_miercoles = $info['natacion_grupal_2dias_miercoles'];
    $natacion_grupal_2dias_jueves = $info['natacion_grupal_2dias_jueves'];
    $natacion_grupal_2dias_viernes = $info['natacion_grupal_2dias_viernes'];
    $natacion_grupal_2dias_sabado = $info['natacion_grupal_2dias_sabado'];

    $otro_paquete = $info['otro_paquete'];
    $especificarPaquete = $info['especificarPaquete'];
    $inicioPrimeraMensualidad = $info['inicioPrimeraMensualidad'];

    // Consulta SQL para insertar datos en la base de datos
    $consulta = "INSERT INTO nino (
        usuario_id, nombre, fechaDeNacimiento, edad, domicilio, escuelaProcedencia, 
        escolaridad, 
        grado, tipoSangre, alergiasOtrosRequerimientos, recomendacionesEspeciales, 
        antecedentesMedicos, 
        grupoSanguineo, 
        enfermedadCardiologica, 
        cualEnfermedadCardiologica, 
        tratamientoMedico, 
        descripcionTratamientoMedico, 
        servicioMedico, 
        cualServicioMedico, 
        altaActividadDeportiva, 
        cualActividadDeportiva, 
        autorizacionFotos, 
        tipoProgramaInicio, 
        experienciaClasesAgua, 
        tiempoExperienciaClasesAgua, 
        experienciaDesagradableAgua,
        motivoExperienciaDesagradableAgua,
        temorAguaNadar,
        motivoTemorAguaNadar,
        nivelPracticaNino,
        tiempoClasesNatacion,
        motivoclasesNatacion,
        aceptaAguaCara,
        playaActitud,
        rioActitud,
        albercaActitud,
        tipoServicioAdquirido,
        nombrePapa,
        nacionalidadPapa,
        telefonoPapa,
        emailPapa,
        nombreMama,
        nacionalidadMama,
        telefonoMama,
        emailMama,
        nombreTelefonoEmergencia,
        personasAutorizadasRecoger,
        tieneHermanos,
        autorizacionApoyoAdulto,


        natacion_ninos_3dias_lunes, natacion_ninos_3dias_martes, natacion_ninos_3dias_miercoles, 
        natacion_ninos_3dias_jueves, natacion_ninos_3dias_viernes, natacion_ninos_3dias_sabado,
        natacion_ninos_2dias_lunes, natacion_ninos_2dias_martes, natacion_ninos_2dias_miercoles, 
        natacion_ninos_2dias_jueves, natacion_ninos_2dias_viernes, natacion_ninos_2dias_sabado,
        natacion_ninos_1dia_lunes, natacion_ninos_1dia_martes, natacion_ninos_1dia_miercoles, 
        natacion_ninos_1dia_jueves, natacion_ninos_1dia_viernes, natacion_ninos_1dia_sabado,
        natacion_grupal_3dias_lunes, natacion_grupal_3dias_martes, natacion_grupal_3dias_miercoles, 
        natacion_grupal_3dias_jueves, natacion_grupal_3dias_viernes, natacion_grupal_3dias_sabado,
        natacion_grupal_2dias_lunes, natacion_grupal_2dias_martes, natacion_grupal_2dias_miercoles, 
        natacion_grupal_2dias_jueves, natacion_grupal_2dias_viernes, natacion_grupal_2dias_sabado,
        otro_paquete, especificarPaquete, inicioPrimeraMensualidad

    ) VALUES (
        1, '$nombre', '$fechaDeNacimiento', '$edad', '$domicilio', '$escuelaProcedencia', 
        '$escolaridad', 
        '$grado', '$tipoSangre', '$alergiasOtrosRequerimientos', '$recomendacionesEspeciales', 
        '$antecedentesMedicos', 
        '$grupoSanguineo', 
        '$enfermedadCardiologica', 
        '$cualEnfermedadCardiologica', 
        '$tratamientoMedico', 
        '$descripcionTratamientoMedico', 
        '$servicioMedico', 
        '$cualServicioMedico', 
        '$altaActividadDeportiva', 
        '$cualActividadDeportiva', 
        '$autorizacionFotos', 
        '$tipoProgramaInicio', 
        '$experienciaClasesAgua', 
        '$tiempoExperienciaClasesAgua', 
        '$experienciaDesagradableAgua',
        '$motivoExperienciaDesagradableAgua',
        '$temorAguaNadar',
        '$motivoTemorAguaNadar',
        '$nivelPracticaNino',
        '$tiempoClasesNatacion',
        '$motivoclasesNatacion',
        '$aceptaAguaCara',
        '$playaActitud',
        '$rioActitud',
        '$albercaActitud',
        '$tipoServicioAdquirido',
        '$nombrePapa',
        '$nacionalidadPapa',
        '$telefonoPapa',
        '$emailPapa',
        '$nombreMama',
        '$nacionalidadMama',
        '$telefonoMama',
        '$emailMama',
        '$nombreTelefonoEmergencia',
        '$personasAutorizadasRecoger',
        '$tieneHermanos',
        '$autorizacionApoyoAdulto',


        '$natacion_ninos_3dias_lunes', '$natacion_ninos_3dias_martes', '$natacion_ninos_3dias_miercoles', 
        '$natacion_ninos_3dias_jueves', '$natacion_ninos_3dias_viernes', '$natacion_ninos_3dias_sabado',
        '$natacion_ninos_2dias_lunes', '$natacion_ninos_2dias_martes', '$natacion_ninos_2dias_miercoles', 
        '$natacion_ninos_2dias_jueves', '$natacion_ninos_2dias_viernes', '$natacion_ninos_2dias_sabado',
        '$natacion_ninos_1dia_lunes', '$natacion_ninos_1dia_martes', '$natacion_ninos_1dia_miercoles', 
        '$natacion_ninos_1dia_jueves', '$natacion_ninos_1dia_viernes', '$natacion_ninos_1dia_sabado',
        '$natacion_grupal_3dias_lunes', '$natacion_grupal_3dias_martes', '$natacion_grupal_3dias_miercoles', 
        '$natacion_grupal_3dias_jueves', '$natacion_grupal_3dias_viernes', '$natacion_grupal_3dias_sabado',
        '$natacion_grupal_2dias_lunes', '$natacion_grupal_2dias_martes', '$natacion_grupal_2dias_miercoles', 
        '$natacion_grupal_2dias_jueves', '$natacion_grupal_2dias_viernes', '$natacion_grupal_2dias_sabado',
        '$otro_paquete', '$especificarPaquete', '$inicioPrimeraMensualidad'
        
    )";      
    var_dump($consulta);exit;
    return DBConnection::query($consulta);
}
}


 ?>