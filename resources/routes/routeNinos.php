<?php

// session_start();

require '../clases/Ninos.class.php';

$Ninos = new Ninos();

$action = $_POST['action'];

if (isset($_POST['info'])) {
    $info = $_POST['info'];
}

switch ($action) {
    case 'mostrarNinos':
        echo json_encode($Ninos->mostrarNinos());
        break;
    case 'agregarNinos':
        echo json_encode($Ninos->agregarNinos($info));
        break;
}