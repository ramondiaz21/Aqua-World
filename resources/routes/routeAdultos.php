<?php

// session_start();

require '../clases/Adultos.class.php';

$Adultos = new Adultos();

$action = $_POST['action'];

if (isset($_POST['info'])) {
    $info = $_POST['info'];
}

switch ($action) {
    case 'mostrarAdultos':
        echo json_encode($Adultos->mostrarAdultos());
        break;
    case 'agregarAdultos':
        echo json_encode($Adultos->agregarAdultos($info));
        break;
}