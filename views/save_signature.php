<?php
// save_signature.php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    if (isset($data['image'])) {
        $imageData = $data['image'];

        // Eliminar la parte de la URL
        $imageData = str_replace('data:image/png;base64,', '', $imageData);
        $imageData = str_replace(' ', '+', $imageData);

        // Decodificar base64
        $image = base64_decode($imageData);

        // Generar nombre de archivo único
        $fileName = 'firma_' . uniqid() . '.png';
        $filePath = 'signatures/' . $fileName;

        // Crear el directorio si no existe
        if (!file_exists('signatures')) {
            mkdir('signatures', 0777, true);
        }

        // Guardar la imagen
        if (file_put_contents($filePath, $image)) {
            echo json_encode(['success' => true, 'file' => $filePath]);
        } else {
            echo json_encode(['success' => false]);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'No image data received']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>