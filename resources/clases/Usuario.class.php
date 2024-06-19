<?php 


    require_once '../utilities/DBConnection.class.php';
    require_once '../utilities/Main.class.php';
    require_once '../utilities/Session.class.php';

    /**
     * summary
     */
    class Usuarios {

        public static function read($info)
        {
            session_start();
            $claveEmpresa      = $_SESSION['claveEmpresa'];
            $idUser            = $_SESSION['idUser'];
            $rol = $_SESSION["rolUsuario"];

            if ($rol == 1 AND $info == 2) {
                $consulta = "SELECT u.id, u.username, u.nombre,c.nombre, u.clave, u.status
                           FROM usuarios u
                           INNER JOIN cat_roles c ON  u.rol = c.id
                           ORDER BY id DESC";
            } 
            else if($info == 2) {
                $consulta = "SELECT u.id, u.username, u.nombre,c.nombre, u.clave, u.status
                        FROM usuarios u
                        INNER JOIN cat_roles c ON  u.rol = c.id
                           WHERE u.clave = '$claveEmpresa'
                           ORDER BY u.id DESC";
            } 
            else if($rol == 1) {
                $consulta = "SELECT u.id, u.username, u.nombre,c.nombre, u.clave, u.status
                FROM usuarios u
                INNER JOIN cat_roles c ON  u.rol = c.id
                           WHERE u.status = $info
                           ORDER BY u.id DESC";
            } 
            else  {
                $consulta = "SELECT u.id, u.username, u.nombre,c.nombre, u.clave, u.status
                FROM usuarios u
                INNER JOIN cat_roles c ON  u.rol = c.id
                           WHERE u.status = $info AND u.clave = '$claveEmpresa'
                           ORDER BY u.id DESC";
            } 
            //return DBConnection::query_row($consulta);

            

            return DBConnection::query_row($consulta);
        }

        public static function busqueda($info)
        {
            session_start();
            $claveEmpresa   = $_SESSION['claveEmpresa'];
            $idUser         = $_SESSION['idUser'];
            $rol            = $_SESSION["rolUsuario"];
            $status         = $info['status'];
            $busqueda       = $info['busqueda'];

            if($rol == 1 && $status != 2) {
                $consulta = "SELECT u.id, u.username, u.nombre,c.nombre, u.clave, u.status
                FROM usuarios u
                INNER JOIN cat_roles c ON  u.rol = c.id
                WHERE LOWER(CONCAT(u.nombre,'',u.username)) LIKE LCASE('%{$busqueda}%')
                AND u.status = $status
                ORDER BY u.id DESC";
            }
            else if($rol == 1 && $status == 2) {
                $consulta = "SELECT u.id, u.username, u.nombre,c.nombre, u.clave, u.status
                FROM usuarios u
                INNER JOIN cat_roles c ON  u.rol = c.id
                WHERE LOWER(CONCAT(u.nombre,'',u.username)) LIKE LCASE('%{$busqueda}%')
                ORDER BY u.id DESC";
            }
            else if($status != 2 && $rol != 1){
                $consulta = "SELECT u.id, u.username, u.nombre,c.nombre, u.clave, u.status
                FROM usuarios u
                INNER JOIN cat_roles c ON  u.rol = c.id
                           WHERE u.clave = '$claveEmpresa' AND u.status = $status
                           AND LOWER(CONCAT(u.nombre,'',u.username)) LIKE LCASE('%{$busqueda}%')
                           ORDER BY u.id DESC";
            }
            else if($status == 2){
                $consulta = "SELECT u.id, u.username, u.nombre,c.nombre, u.clave, u.status
                FROM usuarios u
                INNER JOIN cat_roles c ON  u.rol = c.id
                WHERE u.clave = '$claveEmpresa'
                AND LOWER(CONCAT(u.nombre,'',u.username)) LIKE LCASE('%{$busqueda}%')
                ORDER BY u.id DESC";
            }

            return DBConnection::query_row($consulta);
        }

        public static function agregar($info)
        {
            session_start();
            $claveEmpresa      = $_SESSION['claveEmpresa'];
            $idUser            = $_SESSION['idUser'];
            $username          = $info['username'];
            $password          = $info['password'];
            $nombre            = $info['nombre'];
            $rolNormal         = $info['rol'];
            $rol               = $_SESSION["rolUsuario"];
            $claveEmpresa      = $_SESSION['claveEmpresa'];
            $clave             = $info['clave'];        
            
            
            //$fecha_registro = $info['fecha_registro'];
            if($rol == 1) {
                $consulta = "INSERT INTO usuarios (username,password,nombre,rol,clave,status) VALUES
                ('$username',MD5('$password'),'$nombre',$rolNormal,'$clave', 1)";
            }else {
                $consulta = "INSERT INTO usuarios (username,password,nombre,rol,clave,status) VALUES
            ('$username',MD5('$password'),'$nombre',$rolNormal,'$claveEmpresa', 1)";
            }
            

            //var_dump($consulta);exit;
            return DBConnection::query($consulta);
            
        }

        public static function obtenerRol($info)
        {
            session_start();
            //$claveEmpresa      = $_SESSION['claveEmpresa'];
           // $idUser            = $_SESSION['idUser'];
            //$id                = $info['id'];
            $rol = $_SESSION["rolUsuario"];

            if($rol == 1) {
                $consulta = "SELECT cr.id, cr.nombre
                        FROM cat_roles cr
                        WHERE cr.status = 1 
                        ORDER BY nombre ASC";
            } 
            else  {
                $consulta = "SELECT cr.id, cr.nombre
                        FROM cat_roles cr
                        WHERE cr.id != 1
                        ORDER BY nombre ASC";
            } 


            return DBConnection::query_row($consulta);
        }

        public static function eliminar($info)
        {
            $id = $info['id'];

            $consulta = "UPDATE usuarios SET status = 3 WHERE id = $id ";

            return DBConnection::query($consulta);
        }

        public static function getUsuarios($info)
        {
            $id = $info['id'];
            $respuesta = array();

            $consulta = "SELECT * FROM usuarios WHERE id = $id";
            //$params   = array(':id' => $id);
            $respuesta["editar"] = DBConnection::query_row($consulta);

            $consulta2 = "SELECT cr.id, cr.nombre
            FROM cat_roles cr
            WHERE cr.status = 1 
            ORDER BY cr.id ASC";
            $respuesta["roles"] = DBConnection::query_row($consulta2);
            //var_dump($consulta);exit;
            return $respuesta;
            //return DBConnection::query_row($consulta);
        }

        public static function getUsuariosDetalles($info)
        {
            $id = $info['id'];

            $consulta = "SELECT * FROM usuarios WHERE id = $id";

            
            return DBConnection::query_row($consulta);
        }



        public static function editarUsuarios($info)
        {
            session_start();
            //$claveEmpresa   = $_SESSION['claveEmpresa'];
            //$idUser         = $_SESSION['idUser'];
            $rol            = $_SESSION["rolUsuario"];
            $id        = $info['id'];
            $username   = $info['username'];
            $password = $info['password'];
            $nombre   = $info['nombre'];
            $clave   = $info['clave'];
           // $status = $info['status'];  
            //$fecha_registro = $info['fecha_registro'];
            //var_dump($consulta);exit;
            if($rol == 1) {
                $consulta = "UPDATE usuarios SET username = '$username', 
                password = MD5('$password'), nombre = '$nombre', 
                clave = '$clave' WHERE id = $id";
            } /*else {
                $consulta = "UPDATE usuarios SET username = '$username', password = MD5('$password'), nombre = '$nombre' WHERE id = $id";
            }*/
            
            
            return DBConnection::query($consulta);
        }

        public static function editarUsuariosSencillo($info)
        {
             session_start();
            // $claveEmpresa   = $_SESSION['claveEmpresa'];
            // $idUser         = $_SESSION['idUser'];
            $rol            = $_SESSION["rolUsuario"];
            $id        = $info['id'];
            $username   = $info['username'];
            //$password = $info['password'];
            $nombre   = $info['nombre'];
            $clave   = $info['clave'];
            //$status = $info['status'];  
            //$fecha_registro = $info['fecha_registro'];
            if($rol == 1) {
                $consulta = "UPDATE usuarios SET username = '$username', 
                nombre = '$nombre', clave = '$clave' WHERE id = $id";
            } else {
                $consulta = "UPDATE usuarios SET username = '$username', 
                nombre = '$nombre' WHERE id = $id";
            }
            
            //var_dump($consulta);exit;
            return DBConnection::query($consulta);
        }

        public static function darBaja($info)
        {
            $id        = $info['id'];

            $consulta = "UPDATE usuarios SET status = 0 WHERE id = $id ";

            return DBConnection::query($consulta);
        }

        public static function darAlta($info)
        {
            $id        = $info['id'];

            $consulta = "UPDATE usuarios SET status = 1 WHERE id = $id ";

            return DBConnection::query($consulta);
        }

        public static function getRoles()
        {
            // session_start();
            // $claveEmpresa      = $_SESSION['claveEmpresa'];
            // $idUser            = $_SESSION['idUser'];
            // $id                = $info['id'];
                $consulta = "SELECT cr.id, cr.nombre
                        FROM cat_roles cr
                        WHERE cr.status = 1 
                        ORDER BY cr.id ASC";
            

            //var_dump($consulta);exit;
            return DBConnection::query_row($consulta);
        }
    }


 ?>