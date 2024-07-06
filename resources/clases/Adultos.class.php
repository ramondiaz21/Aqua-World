<?php 


    require_once '../utilities/DBConnection.class.php';
    require_once '../utilities/Main.class.php';
    require_once '../utilities/Session.class.php';

    /**
     * summary
     */
    class Adultos {

        public static function mostrarAdultos()
        {
                $consulta = "SELECT *
                        FROM adulto";
            

            //echo $consulta; exit;

            return DBConnection::query_row($consulta);
        }

        public static function read()
        {
            session_start();
            //$claveEmpresa      = $_SESSION['claveEmpresa'];
            $idUser            = $_SESSION['idUser'];
            //$rolAdultos            = $_SESSION['rolAdultos'];
            
                $consulta = "SELECT u.id, u.username, u.nombre,c.nombre, u.clave, u.status
                        FROM Adultoss u
                        INNER JOIN cat_roles c ON  u.rol = c.id
                        WHERE u.id = $idUser";
        	//var_dump($consulta);exit;
            return DBConnection::query_row($consulta);
        }
        

       function agregarAdultos($info) {
          session_start();
          $idUser = $_SESSION['idUser'];
    
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
          $medicoPrivadoPublico = $info['medicoPrivadoPublico'];
          $cualMedicoPrivadoPublico = $info['cualMedicoPrivadoPublico'];
          $otraActividadDeportiva = $info['otraActividadDeportiva'];
          $cualOtraActividadDeportiva = $info['cualOtraActividadDeportiva'];
          $autorizacionFotos = $info['autorizacionFotos'];
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

          $consulta = "INSERT INTO adulto (
                    usuario_id,nombre, edad, telefono, nacionalidad, fechaDeNacimiento, domicilio, 
                    alergiaOtrosRequerimientos, nombreTelefonoEmergencia, antecedentesMedicos, grupoSanguineo, 
                    enfermedadCardiologica, cualEnfermedadCardiologica, medicoPrivadoPublico, cualMedicoPrivadoPublico, 
                    otraActividadDeportiva, cualOtraActividadDeportiva, autorizacionFotos, recibirClasesEnAgua, 
                    cualrecibirClasesEnAgua, experienciaDesagradableConAgua, cualexperienciaDesagradableConAgua, 
                    temorAguaNadar, cualtemorAguaNadar, experienciaAcuatica, aceptaAguaCara, temorAgua, 
                    practicaNadando, tipoServicioAdquirido, firmaUsuario, selloAquaWorld
                ) VALUES (
                    1,'$nombre', '$edad', '$telefono', '$nacionalidad', '$fechaDeNacimiento', '$domicilio', 
                    '$alergiaOtrosRequerimientos', '$nombreTelefonoEmergencia', '$antecedentesMedicos', '$grupoSanguineo', 
                    '$enfermedadCardiologica', '$cualEnfermedadCardiologica', '$medicoPrivadoPublico', '$cualMedicoPrivadoPublico', 
                    '$otraActividadDeportiva', '$cualOtraActividadDeportiva', '$autorizacionFotos', '$recibirClasesEnAgua', 
                    '$cualrecibirClasesEnAgua', '$experienciaDesagradableConAgua', '$cualexperienciaDesagradableConAgua', 
                    '$temorAguaNadar', '$cualtemorAguaNadar', '$experienciaAcuatica', '$aceptaAguaCara', '$temorAgua', 
                    '$practicaNadando', '$tipoServicioAdquirido'
                )";

          return DBConnection::query_row($consulta);
        }

    }


 ?>