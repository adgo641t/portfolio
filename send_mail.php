<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recogemos los datos del formulario
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $asunto = htmlspecialchars($_POST['asunto']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    // Dirección de correo a la que se enviará el mensaje
    $destinatario = "fpb1.adrian@gmail.com"; // Cambia esto por tu correo personal

    // Asunto del correo
    $asunto_correo = "Nuevo mensaje de contacto: " . $asunto;

    // Cuerpo del correo
    $cuerpo = "Has recibido un nuevo mensaje desde el formulario de contacto.\n\n";
    $cuerpo .= "Nombre: " . $nombre . "\n";
    $cuerpo .= "Correo electrónico: " . $email . "\n";
    $cuerpo .= "Mensaje:\n" . $mensaje;

    // Cabeceras del correo
    $cabeceras = "From: " . $email . "\r\n";
    $cabeceras .= "Reply-To: " . $email . "\r\n";
    $cabeceras .= "X-Mailer: PHP/" . phpversion();

    // Enviar el correo
    if (mail($destinatario, $asunto_correo, $cuerpo, $cabeceras)) {
        echo "El mensaje ha sido enviado exitosamente.";
    } else {
        echo "Hubo un error al enviar el mensaje. Intenta nuevamente.";
    }
}
?>
