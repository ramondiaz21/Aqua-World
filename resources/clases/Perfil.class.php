<?php 


    require_once '../utilities/DBConnection.class.php';
    require_once '../utilities/Main.class.php';
    require_once '../utilities/Session.class.php';

    /**
     * summary
     */
    class Perfil {

        public static function mostrarUsuario()
        {
             session_start();
            //var_dump($info);
            //exit;
            //$username           = $_SESSION['login'];
            $idUser           = $_SESSION['idUser'];
            //$rolUsuario           = $_SESSION['rolUsuario'];
                $consulta = "SELECT u.nombre
                        FROM usuarios u
                        WHERE id = '$idUser'";
            

            //echo $consulta; exit;

            return DBConnection::query_row($consulta);
        }

        public static function read()
        {
            session_start();
            //$claveEmpresa      = $_SESSION['claveEmpresa'];
            $idUser            = $_SESSION['idUser'];
            //$rolUsuario            = $_SESSION['rolUsuario'];
            
                $consulta = "SELECT u.id, u.username, u.nombre,c.nombre, u.clave, u.status
                        FROM usuarios u
                        INNER JOIN cat_roles c ON  u.rol = c.id
                        WHERE u.id = $idUser";
        	//var_dump($consulta);exit;
            return DBConnection::query_row($consulta);
        }

        /*public static function busqueda($info)
        {
            session_start();
            $idUser           = $_SESSION['idUser'];
            //var_dump($info);
            //exit;
            $consulta = "SELECT u.id,u.username,u.nombre, cr.nombre,e.nombre,u.status
                        FROM usuarios u
                        LEFT JOIN cat_roles cr ON cr.id = u.rol
                        LEFT JOIN equipos e ON e.usuario = u.id
                        WHERE UPPER(e.nombre) LIKE UPPER('%{$info}%') AND e.status = 1 AND u.id = '$idUser'
                       ";

            //echo $consulta; exit;

            return DBConnection::query_row($consulta);
        }*/

        /*public static function agregar($info)
        {
            session_start();
            
            $nombre   = $info['nombre'];
            $idUsuario           = $_SESSION['idUser'];
            
            

            //$username = $_SESSION['login'];
            //$fecha_registro = $info['fecha_registro'];

            $consulta = "INSERT INTO equipos (usuario,nombre,status) 
                        VALUES('$idUsuario','$nombre',1)";

            // echo $consulta; exit;
            return DBConnection::query($consulta);
            
        }*/

        /*public static function detallesEquipo($info)
        {
            
            //var_dump($info);
            //exit;
            $id_equipo = $info['id'];

            $consulta = "SELECT e.nombre,j.id, j.nombre, j.telefono
                           FROM jugadoras j
                           LEFT JOIN equipos e ON j.equipo = e.id
                           WHERE e.id = '$id_equipo'";

            //echo $consulta; exit;

            return DBConnection::query_row($consulta);
        }*/

        public static function getPerfil($info)
        {
            $id = $info['id'];
            session_start();
            // $claveEmpresa      = $_SESSION['claveEmpresa'];
            // $idUser            = $_SESSION['idUser'];
            // $rolUsuario            = $_SESSION['rolUsuario'];
            
                $consulta = "SELECT id,nombre,username, password, clave
                        FROM usuarios
                        WHERE id = $id";


            return DBConnection::query_row($consulta);

        }

        public static function editarPerfil($info)
        {            
            session_start();
            $id        = $info['id'];
            $username  = $info['username'];
            $password  = $info['password'];
            $nombre    = $info['nombre'];
            // $status    = $info['status']; 
            // $clave     = $info['clave']; 

            // $claveEmpresa      = $_SESSION['claveEmpresa'];
            // $idUser            = $_SESSION['idUser'];
            // $rolUsuario        = $_SESSION['rolUsuario'];
            
            $consulta = "UPDATE usuarios SET username = '$username',
            password = MD5('$password'), nombre = '$nombre' WHERE id = $id";

             return DBConnection::query_row($consulta);

            
        }

        public static function editarPerfilSencillo($info)
        {
            session_start();
            $id        = $info['id'];
            $username  = $info['username'];
            //$password  = $info['password'];
            $nombre    = $info['nombre'];
            // $status    = $info['status']; 
            // $clave     = $info['clave']; 

            
            // $claveEmpresa      = $_SESSION['claveEmpresa'];
            // $idUser            = $_SESSION['idUser'];
            // $rolUsuario        = $_SESSION['rolUsuario'];
            
            $consulta = "UPDATE usuarios SET username = '$username', 
            nombre = '$nombre' WHERE id = $id";

             return DBConnection::query_row($consulta);

            
        }

        public static function getEquipo($info)
        {
            $id = $info['id'];

            $consulta = "SELECT id, nombre
                        FROM equipos
                        WHERE id = $id";

            return DBConnection::query_row($consulta);
        }

        public static function editarEquipo($info)
        {
            $id        = $info['id'];
            $nombre   = $info['nombre'];
            $username   = $info['username'];
            $password = $info['password'];

            $consulta = "UPDATE equipos SET username = '$username', password = MD5('$password'), nombre = '$nombre' WHERE id = $id";
            
            return DBConnection::query_row($consulta);

            
        }

        public static function editarEquipoSencillo($info)
        {
            $id        = $info['id'];
            $nombre   = $info['nombre'];
            $username   = $info['username'];
            $password = $info['password'];

            $consulta = "UPDATE equipos SET username = '$username', nombre = '$nombre' WHERE id = $id";
            
            return DBConnection::query_row($consulta);

            
        }

        public static function darBaja($info)
        {
            $id        = $info['id'];

            $consulta = "UPDATE equipos SET status = 0 WHERE id = $id ";

            return DBConnection::query($consulta);
        }

        public static function darAlta($info)
        {
            $id        = $info['id'];

            $consulta = "UPDATE equipos SET status = 1 WHERE id = $id ";

            return DBConnection::query($consulta);
        }

        public static function getRoles()
        {
            $consulta = "SELECT id, nombre
                        FROM cat_roles
                        WHERE status = 1
                        ORDER BY nombre ASC";

            return DBConnection::query_row($consulta);
        }

        public static function verFolios()
        {
            $consulta = "SELECT numero_folios
                        FROM folios_detalles
                        WHERE status = 1";

            return DBConnection::query_row($consulta);
        }

        

    }


 ?>