<?php  

    require_once '../utilities/DBConnection.class.php';
    require_once '../utilities/Main.class.php';
    require_once '../utilities/Session.class.php';

    


    Class Login extends DBConnection {


       

        public function entrarLogin($info) 
        {
            //$Session = new Session();
            //session_start();
           
            $username        = $info['username'];
            $password        = $info['password'];
            
            $response        = "false";

            $consulta = "CALL SP_AUTH('$username', MD5('$password'));";
            $datos = $this -> query_assoc($consulta);

            if(count($datos) > 0) {
              $id              = $datos[0]['id'];
              $clave           = $datos[0]['clave'];
              $_SESSION['id_usuario'] = $id;
              $_SESSION['login'] = $username;
              $_SESSION['clave'] = $clave;
              $_SESSION["idUser"]  = $datos[0]['id'];
              $_SESSION["claveEmpresa"]  = $datos[0]['clave'];
              $_SESSION["UserUsername"] = $datos[0]['username'];
              $_SESSION["rolUsuario"] = $datos[0]['rol'];
              $_SESSION["UserName"]    = $datos[0]['nombre'];
              $response            = "admin";
            }            

            //var_dump($consulta);

            return DBConnection::query_assoc($consulta);

            /*if($consulta == true) {
                $_SESSION['login'] = $username;
                return DBConnection::query_row($consulta);
            } else {
            
            }*/

        }

        // public function entrarLoginColaborador($info) 
        // {
        //     //$Session = new Session();
        //     //session_start();
        //     $id              = $info['id'];
        //     $username        = $info['username'];
        //     $password        = $info['password'];
        //     $clave           = $info['clave'];
        //     $response        = "false";

        //     $consulta = "CALL SP_AUTH_COL('$username', MD5('$password'));";
        //     $datos = $this -> query_assoc($consulta);

        //     if(count($datos) > 0) {
        //       $_SESSION['id_usuario'] = $id;
        //       $_SESSION['login'] = $username;
        //       $_SESSION['clave'] = $clave;
        //       $_SESSION["idUser"]  = $datos[0]['id'];
        //       $_SESSION["claveEmpresa"]  = $datos[0]['clave'];
        //       $_SESSION["idColaborador"]  = $datos[0]['id'];
        //       $_SESSION["usuario"]  = $datos[0]['usuario'];
        //       $_SESSION["ColaboradorUsername"] = $datos[0]['username'];
        //       $_SESSION["rolUsuario"] = $datos[0]['rol'];
        //       $_SESSION["ColaboradorName"]    = $datos[0]['nombre'];
        //       $response            = "colaborador";
        //     }            

        //     return DBConnection::query_assoc($consulta);

        //     /*if($consulta == true) {
        //         $_SESSION['login'] = $username;
        //         return DBConnection::query_row($consulta);
        //     } else {
            
        //     }*/
            
        // }
  }

        


?>