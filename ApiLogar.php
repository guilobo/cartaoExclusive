<?php
require_once("../wp-load.php");
if (isset($_POST['tipo']))
$tipo = $_POST['tipo'];

switch ($tipo){
case "login":
        $creds = array(
        'user_login'    =>  $_POST["login"],
        'user_password' => $_POST["senha"],
        'remember'      => true
        );

        $user = wp_signon( $creds, false );

        if ( is_wp_error( $user ) ) {
        echo $user->get_error_message();
        $url = strtok($_SERVER['HTTP_REFERER'], '?');
        header('Location: '.$url.'?error='.$user->get_error_message());
      }else{
        $url = strtok($_SERVER['HTTP_REFERER'], '?');
      header('Location: '.$url);
      }
      break;
case "verificar":
    if( current_user_can('editor') || current_user_can('administrator') ) {
      echo "true";
    }else {
      echo "false";
    }
    break;
}
 ?>
