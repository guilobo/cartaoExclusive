<?
header("Access-Control-Allow-Origin: *");
require_once($_SERVER['DOCUMENT_ROOT']."/wp-load.php");

if (isset($_POST["acao"])) {
  $acao = $_POST["acao"];

  switch ($acao){
    case "clientes":
      $cliente_db = $wpdb->get_results("SELECT a.id,a.user_login,a.user_email,REPLACE(REPLACE(b.meta_value , '-' , '' ),'.','') as cpf, c.meta_value as validade,d.meta_value as whatsapp FROM `wpnn_users` as a JOIN `wpnn_usermeta` AS b ON a.id = b.user_id JOIN `wpnn_usermeta` AS c ON a.id = c.user_id JOIN `wpnn_usermeta` AS d ON a.id = d.user_id where c.meta_key = 'validade' and b.meta_key = 'cpf' and d.meta_key = 'whatsapp' and a.id != 1 and a.id !=5 GROUP by a.id ORDER by a.user_login ASC");
      echo json_encode($cliente_db);
      break;

    case "parceiros":
      $parceiros_db = $wpdb->get_results("SELECT * FROM cartao_parceiros");
      echo json_encode($parceiros_db);
      break;

    case "editaCliente":
      update_user_meta( $_POST['id'], "cpf", $_POST['cpf']);
      update_user_meta( $_POST['id'], "validade", $_POST['validade']);
      update_user_meta( $_POST['id'], "whatsapp", $_POST['whatsapp']);
      if ($_POST['senha'] != ""){
        wp_set_password( $_POST['senha'], $_POST['id'] );
      }
      echo "cliente editado + ".$_POST['whatsapp'];
      break;

    case "editaParceiro":
      $cliente_db = $wpdb->get_results("update `cartao_parceiros` SET `nome`= '".$_POST['nome']."',
      `cnpj`='".$_POST['cnpj']."',
      `endereco`='".$_POST['endereco']."',
      `cidade`='".$_POST['cidade']."',
      `estado`='".$_POST['estado']."',
      `telefone`='".$_POST['telefone']."',
      `ramo`='".$_POST['ramo']."',
      `horaFuncionamento`='".$_POST['horaFuncionamento']."',
      `email`='".$_POST['email']."',
      `tipoDesconto`='".$_POST['tipoDesconto']."',
      `desconto`='".$_POST['desconto']."',
      `obsDesconto`='".$_POST['obsDesconto']."',
      `aprovado`= '1' WHERE id = ".$_POST['id']."");
      echo json_encode($parceiros_db);
      break;

      case "excluirCliente":
      wp_delete_user( $_POST['id']);
      echo "excluirei o usuário de id= ".$_POST['id'];
      break;

    case "excluirParceiro":
      $cliente_db = $wpdb->get_results("DELETE FROM cartao_parceiros WHERE id = ".$_POST['id']);
      echo json_encode($parceiros_db);
      unlink($_POST['logo']);
      //echo "vou excluir o parceiro ".$_POST['id']." com a querry: DELETE FROM cartao_parceiros WHERE id = ".$_POST['id'];
      break;
  }
}else{
  echo "Error";
}






?>
