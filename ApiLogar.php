<?php
require_once("../wp-load.php");
if (isset($_POST['tipo']))
if ($_POST["tipo"] == "login"){


    $creds = array(
        'user_login'    =>  $_POST["login"],
        'user_password' => $_POST["senha"],
        'remember'      => true
    );

    $user = wp_signon( $creds, false );

    if ( is_wp_error( $user ) ) {
        echo $user->get_error_message();
        header('Location: /cartao/cliente.php?error='.$user->get_error_message());
    }else{
      header('Location: /cartao/cliente.php');
    }
}
 ?>
