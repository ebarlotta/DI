<?php
    include 'database.php';
    $email = $_POST["email"];
    $password = $_POST["password"];

    $ingresar = "SELECT * FROM usuario WHERE email = '$email' AND password = '$password'";
    $resultado = mysqli_query($conexion, $ingresar);

    if(mysqli_num_rows($resultado) > 0){
        header('Location: ../view/login-succesful.html');
    } else {
        header('Location: ../view/login-error.html');
    }

    mysqli_close($conexion);
?>
