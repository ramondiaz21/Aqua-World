<?php

// session_start();

require '../clases/Usuarios.class.php';

$Usuarios = new Usuarios();

$action = $_POST['action'];

if (isset($_POST['info'])) {
    $info = $_POST['info'];
}

switch ($action) {
    case 'read':
        echo json_encode($Usuarios->read($info));
        break;
    case 'busqueda':
        echo json_encode($Usuarios->busqueda($info));
        break;
    case 'agregar':
        echo json_encode($Usuarios->agregar($info));
        break;
    case 'eliminar':
        echo json_encode($Usuarios->eliminar($info));
        break;
    case 'getUsuarios':
        echo json_encode($Usuarios->getUsuarios($info));
        break;
    case 'getUsuariosDetalles':
        echo json_encode($Usuarios->getUsuariosDetalles($info));
        break;
    case 'editarUsuarios':
        echo json_encode($Usuarios->editarUsuarios($info));
        break;
    case 'editarUsuariosSencillo':
        echo json_encode($Usuarios->editarUsuariosSencillo($info));
        break;
    case 'darBaja':
        echo json_encode($Usuarios->darBaja($info));
        break;
    case 'darAlta':
        echo json_encode($Usuarios->darAlta($info));
        break;
    case 'obtenerRol':
        echo json_encode($Usuarios->obtenerRol($info));
        break;
    case 'getRoles':
        echo json_encode($Usuarios->getRoles());
        break;

}