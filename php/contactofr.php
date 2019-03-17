<?PHP
	$nombre = $_POST["nombre"];
	$email = $_POST["email"];
	$mensaje = $_POST["mensaje"];
	$dest = "support@my-money.online";
	$asunto = "Mensaje - My money Online";

	$cuerpo = "Nombre: " .$nombre. "<br/> 
				Correo: " .$email. "<br/>
				Mensaje: " .$mensaje;

  	mail($dest, $asunto, $cuerpo);
	header("location:../fr/gracias.html");
?>