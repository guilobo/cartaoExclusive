<?
header("Access-Control-Allow-Origin: *");
require_once($_SERVER['DOCUMENT_ROOT']."/wp-load.php");

if (isset($_POST("acao"))) {
  $acao = $_POST("acao");

  switch ($acao){
    case "clientes":
      $cliente_db = $wpdb->get_results("SELECT * FROM cartao_parceiros");
      echo json_encode($cliente_db);
      break;

    case "parceiros":
      $parceiros_db = $wpdb->get_results("SELECT * FROM cartao_parceiros");
      echo json_encode($parceiros_db);
      break;

    case "editaCliente":
      // código
      break;

    case "editaParceiro":
      // código
      break;

    case "excluirCliente":
      // código
      break;

    case "excluirParceiro":
      // código
      break;
  }
}else{
  echo "Error";
}






?>
