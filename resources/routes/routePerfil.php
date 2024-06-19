<?php

// session_start();

require '../clases/Perfil.class.php';

$Perfil = new Perfil();

$action = $_POST['action'];

if (isset($_POST['info'])) {
    $info = $_POST['info'];
}

switch ($action) {
    case 'mostrarUsuario':
        echo json_encode($Perfil->mostrarUsuario());
        break;
    case 'read':
        echo json_encode($Perfil->read());
        break;
    case 'getPerfil':
        echo json_encode($Perfil->getPerfil($info));
        break;
    case 'editarPerfil':
        echo json_encode($Perfil->editarPerfil($info));
        break;
    case 'editarPerfilSencillo':
        echo json_encode($Perfil->editarPerfilSencillo($info));
        break;
}