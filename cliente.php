<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
  <title>Cadastro de novo cliete para cartão</title>

  <!-- CSS  -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  <link href="css/styleCliente.css" type="text/css" rel="stylesheet" media="screen,projection"/>

<script src="https://cdn.jsdelivr.net/npm/signature_pad@2.3.2/dist/signature_pad.min.js"></script>
</head>
<body>
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br>
      <div class="row center">
        <img src="img/logo.png" width="300px" class="responsive-img center-align">
      </div>

      <h1 class="header center brown-text darken-4 ">Cadastro de novo cliente</h1>
      <br><br>
    </div>
  </div>
  <?php
  //require_once($_SERVER['DOCUMENT_ROOT']."/wp-load.php");
  require_once("../wp-load.php");

   if( current_user_can('editor') || current_user_can('administrator') ) {


  if (isset($_POST['tipo']))
  if ($_POST["tipo"] == "cadastro"){

  $camposVazio = false;

  $username = $_POST["nome"];
  $password = $_POST["senha"];
  $email = $_POST["email"];
  $validade = $_POST["validade"];
  $cpf = $_POST["CPF"];



  if ($password == "")
  $camposVazio = "você precisa definir uma senha";
  if ($validade == "")
  $camposVazio = "Defina uma validade para o cartão";
  if ($cpf == "")
  $camposVazio = "digite o cpf do cliente";
  if ($email == "")
  $camposVazio = "digite o email do cliente";
  if ($username == "")
  $camposVazio = "o usuário nao pode estar em branco";

  if ($camposVazio == false){
    $userId = wp_create_user( $username, $password, $email);
    add_user_meta( $userId, 'cpf', $cpf);
    add_user_meta( $userId, 'validade', $validade);

    if (isset($userId))
    if ( is_wp_error( $userId ) ) {
      ?><div class="row white-text center red"><?
        echo $userId->get_error_message();
    }else{
      ?><div class="row center green"><?
      echo "Usuário ".$username." cadastrado com sucesso. ID = ".$userId;

      $to      = $email;
      $subject = 'Seu cartão Exclusive Dra. Isis Toledo já está disponível';
      $message = 'Para ecessar seu cartão clique no link <a href=https://draisistoledo.com/cartao-exclusive/?id=$userId>';
      $headers = 'From: site@draisistoledo.com' . "\r\n" .
                 'Reply-To: contato@draisistoledo.com' . "\r\n";
      mail($to, $subject, $message, $headers);
    }

  }else{
    ?><div class="row center white-text red"><?
    echo $camposVazio;
  }?>
</div>
<?}?>
<div class="container">

<div class="row certer">
<span><h5><b>Criação do Login</b></h5></span>
<div class="divider"></div>
</div>

<div class="row">
  <form action="#" method="post" class="col s12">
    <div class="row">
      <div class="input-field col s12">
        <i class="material-icons prefix">account_circle</i>
        <input name="nome" id="first_name" type="text" class="validate">
        <label for="first_name">Nome</label>
      </div>

    </div>


    <div class="row">
      <div class="input-field col s12">
        <i class="material-icons prefix">email</i>
        <input id="email" type="email" name="email" class="validate">
        <label for="email">Email</label>
      </div>
    </div>

<!--
    <div class="row">
      <div class="input-field col s12 ">
        <i class="material-icons prefix">phone_android</i>
        <input id="WhatsApp" type="tel" name="email" class="validate">
        <label for="WhatsApp">WhatsApp</label>
      </div>
    </div>
  -->
    <br>
    <div class="row certer">
      <span><h5><b>Informações para o cartão</b></h5></span>
      <div class="divider"></div>
    </div>

    <div class="flow-text">
      defina os dados e irão no cartão
    </div>

    <div class="row">
      <div class="input-field col s12">
        <i class="material-icons prefix">assignment_ind</i>
        <input id="CPF" name="CPF" type="text" class="validate">
        <label for="CPF">CPF</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <i class="material-icons prefix">event</i>
        <input id="validade" type="date" name="validade" class="validate">
        <label for="senha">validade</label>
      </div>
    </div>
    <div class="row">
      <div class="">
        sugestão de senha: <b><?echo wp_generate_password( $length = 6, $include_standard_special_chars = false );?>
      </div>
      <div class="input-field col s12">
        <i class="material-icons prefix">lock</i>
        <input id="senha" type="password" name="senha" class="validate">
        <label for="senha">Senha</label>
      </div>
    </div>
    <input type="hidden" name="tipo" value="cadastro">
    <div class="row center">
    <button class="btn waves-effect waves-light" type="submit" name="action">Cadastrar
    <i class="material-icons right">send</i>
    </button>
    </div>

  </form>
</div>





</div>
<?


}else{
  if (isset($_POST['tipo']))
  if ($_POST["tipo"] == "login"){


      $creds = array(
          'user_login'    =>  $_POST["login"],
          'user_password' => $_POST["senha"],
          'remember'      => true
      );

      $user = wp_signon( $creds, false );

      if ( is_wp_error( $user ) ) {
          //echo $user->get_error_message();
      }else{
        header("Refresh:0");
      }
  }
  if (isset($_GET["error"])){
      ?><div class="row center white-text red"><?
      echo $_GET["error"];
  }else{
    /*?><div class="row center green"><?
    echo "Conectado com Sucesso, aguarde....";
  */}?>
</div>
<div class="container">

<form action="ApiLogar.php" method="post" class="col s12">
  <div class="row certer">
    <span><h5><b>Logue com usuário administrator</b></h5></span>
    <div class="divider"></div>
  </div>
  <div class="row">
    <div class="input-field col s12">
      <i class="material-icons prefix">account_circle</i>
      <input name="login" id="first_name" type="text" class="validate">
      <label for="first_name">Login</label>
    </div>
  </div>
  <div class="input-field col s12">
    <i class="material-icons prefix">lock</i>
    <input id="senha" type="password" name="senha" class="validate">
    <label for="senha">Senha</label>
  </div>
  <input type="hidden" name="tipo" value="login">
  <div class="row center">
  <button class="btn waves-effect waves-light" type="submit" name="action">login
  <i class="material-icons right">send</i>
  </button>
  </div>
</form>
</div>
<?
}
?>
  <!--  Scripts-->
  <script src="js/jquery-3.4.1.min.js"></script>
  <script src="js/materialize.js"></script>
  <script src="js/init.js"></script>
  </body>
</html>
