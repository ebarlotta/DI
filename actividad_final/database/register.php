<?php
    include 'database.php';
    $email = $_POST["email"];
    $password = $_POST["password"];

    $registrar = "INSERT INTO usuario (email, password) VALUES ('$email','$password')";
    $verificar_email = mysqli_query($conexion, "SELECT email FROM usuario WHERE email = '$email'");
    
        if(mysqli_num_rows($verificar_email) > 0){
            header('Location: ../view/register-duplicated.html');
            exit;
        } else {
            $resultado = mysqli_query($conexion, $registrar);
            header('Location: ../view/register-succesful.html');   
        }
        
    mysqli_close($conexion);
?>