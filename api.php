<?php

$password = $_POST['password'];
$user =  $_POST['username'];

require_once($_SERVER['DOCUMENT_ROOT']."/wp-load.php");

$user_info = get_user_by('login', $user);
$hash = $user_info->user_pass;

if ((wp_check_password($password, $hash, $user_info->user_ID)) && ($user_info)){
  //$user_info = get_userdata($userId);
  $email = $user_info->user_email;
  $nome = $user_info->first_name.' '.$user_info->last_name;
  $userId = $user_info->ID;

  $cpf = get_user_meta( $userId, 'cpf' )[0];
  $validade = get_user_meta( $userId, 'validade' )[0];

  $json = array('id' => $userId, 'nome' => $nome, 'email' => $email, 'cpf' => $cpf, 'validade' => $validade, );
  echo json_encode($json);

}else{
  $json = array('error' => true );
  echo json_encode($json);
}
