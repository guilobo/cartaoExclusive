<?require_once("../wp-load.php");
if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === "off") {
    $location = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    header('HTTP/1.1 301 Moved Permanently');
    header('Location: ' . $location);
    exit;
}?>
  <html>

  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0" />
    <title>Painel Administrativo</title>

    <!-- CSS  -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection" />
    <link href="css/styleCliente.css" type="text/css" rel="stylesheet" media="screen,projection" />

    <script src="https://cdn.jsdelivr.net/npm/signature_pad@2.3.2/dist/signature_pad.min.js"></script>
  </head>
  <body>
    <?if( current_user_can('editor') || current_user_can('administrator') ) {?>
    <nav class="nav-extended brown darken-1">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center">Painel Administrativo</a>

      </div>
      <div class="nav-content container">
        <ul class="tabs tabs-transparent">
          <li class="tab"><a href="#parceiros">Parceiros</a></li>
          <li class="tab"><a class="" href="#clientes">Clientes</a></li>
        </ul>
      </div>
      <div id="barraCarregando" class="progress">
      <div class="indeterminate"></div>
      </div>
    </nav>


    <!-- Página de parceiros -->
    <div class="container">

      <div id="parceiros" class="col s12">
        <div id="divAgardandoParceiro" class="some">


        <h4 class="header">Aguardando Aprovação</h4>

        <ul id="listaParceirosAguardando" class="collapsible popout">

        </ul>
      </div>
        <h4 class="header">Parceiros</h4>
        <nav>
        <div class="nav-wrapper brown darken-1">
          <form class="formDePesquisa">
            <div class="input-field">
              <input id="buscaParceiro" type="search" required>
              <label class="label-icon" for="search"><i class="material-icons">search</i></label>
              <i id="fechaBuscaParceiro" class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
      <ul id="listaParceiros" class="collapsible popout">
        <div class="container center">
          <div class="preloader-wrapper big active">
            <div class="spinner-layer spinner-blue">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
        </div>
      </ul>
      </div>
    </div><!-- end parceiros -->

    <!-- Página de clientes -->
    <div class="container">
    <div id="clientes" class="col s12">
      <div class="row">
        <h4 class="header">Clientes Cadastrados</h4>
      </div>

      <nav>
      <div class="nav-wrapper brown darken-1">
        <form class="formDePesquisa">
          <div id="buscaClientesDiv" class="input-field">
            <input id="buscaClientes" type="search" class="formDePesquisa" required>
            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
            <i id="fechaBuscaCliente" class="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
        <ul id="listaClientes" class="collapsible popout">
          <div class="container center">
            <div class="preloader-wrapper big active">
              <div class="spinner-layer spinner-blue">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div>
          </div>
          </div>
          </div>
          </ul>
          </div>
        </ul>
      </div>
        </div>
   <!-- end clientes -->



   <!-- Modal CLIENTE -->
   <div id="modal1" idCliente="" class="modal">
     <div class="modal-content">
       <h4></h4>
       <p></p>
     </div>
     <div class="modal-footer row ">
       <div class="col s6 center">
         <a id="fechaModal" class="waves-effect waves-light red darken-1 btn "><i class="material-icons left">close</i>Não</a>
       </div>

       <div class="col s6 center">
         <a id="excluiCliente" class="waves-effect waves-light btn "><i class="material-icons left">check</i>Sim</a>
       </div>

     </div>
   </div>

   <!-- Modal PARCEIRO -->
   <div id="modal2" idParceiro="" imgParceiro="" class="modal">
     <div class="modal-content">
       <h4></h4>
       <p></p>
     </div>
     <div class="modal-footer row ">
       <div class="col s6 center">
         <a id="fechaModal2" class="waves-effect waves-light red darken-1 btn "><i class="material-icons left">close</i>Não</a>
       </div>

       <div class="col s6 center">
         <a id="excluiParceiro" class="waves-effect waves-light btn "><i class="material-icons left">check</i>Sim</a>
       </div>

     </div>
   </div>
<?}else{
  if (isset($_GET["error"])){
      ?><div class="row center white-text red"><?
      echo $_GET["error"];
      ?></div><?
  }else{
    /*?><div class="row center green"><?
    echo "Conectado com Sucesso, aguarde....";
  */}
  ?>

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
<?}?>

        <!--  Scripts-->
        <script src="js/jquery-3.4.1.min.js"></script>
        <script src="js/materialize.js"></script>
        <script src="js/init.js"></script>
        <script src="js/controleADM.js"></script>


  </body>

  </html>
