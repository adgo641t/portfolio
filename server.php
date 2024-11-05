<?php
ini_set('SMTP','myserver');
ini_set('smtp_port',25);

// Verificar si se envió el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Validación simple
    if (empty($name) || empty($email) || empty($message)) {
        die("Por favor, completa todos los campos.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Correo electrónico no válido.");
    }

    // Configuración del correo
    $to = "fpb1.adrian@gmail.com"; // Cambia esto por tu dirección de correo
    $subject = "Nuevo mensaje de contacto de $name";
    $body = "Nombre: $name\n";
    $body .= "Correo: $email\n";
    $body .= "Mensaje:\n$message\n";

    // Cabeceras del correo
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "¡Mensaje enviado con éxito!";
    } else {
        echo "Hubo un problema al enviar el mensaje. Intenta nuevamente más tarde.";
    }
}
?>
