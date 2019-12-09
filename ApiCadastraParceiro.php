<?
header("Access-Control-Allow-Origin: *");
require_once($_SERVER['DOCUMENT_ROOT']."/wp-load.php");

//$json = json_encode ($wpdb->get_results($querry));
//echo $json;

if (isset($_POST['submit'])){
  $nome = $_POST['nome'];
  $cnpj = $_POST['cnpj'];
  $endereco = $_POST['endereco'];
  $cidade = $_POST['cidade'];
  $estado = $_POST['estado'];
  $telefone = $_POST['telefone'];
  $ramo = $_POST['ramo'];
  $desconto = $_POST['desconto'];
  $email = $_POST['email'];
  $tipoDeDesconto = $_POST['tipoDesconto'];
  $obsDesconto = $_POST['obsDesconto'];
  $hora = $_POST['hora'];

  $file = $_FILES['file'];

  $fileName = $_FILES['file']['name'];
  $fileTmpName = $_FILES['file']['tmp_name'];
  $fileSize = $_FILES['file']['size'];
  $fileError = $_FILES['file']['error'];
  $fileType = $_FILES['file']['type'];

  $fileExt = explode('.',$fileName);
  $fileActualExt = strtolower(end($fileExt));

  $allowed = array('jpg','jpeg','png');

  if(in_array($fileActualExt, $allowed)){
    if ($fileError === 0){
      if($fileSize < 1000000){ //10mb
        $fileNameNew = uniqid('',true).".".$fileActualExt; // $fileNameNew é o nome do logo
        $fileDestination = 'uploads/'.$fileNameNew;

        if (!empty($nome) && !empty($cnpj) && !empty($endereco) && !empty($cidade) && !empty($estado) && !empty($telefone) && !empty($ramo)
        && !empty($desconto) && !empty($email) && !empty($fileNameNew)){

        move_uploaded_file($fileTmpName, $fileDestination);
        $dados = array('nome' => $nome ,'cnpj' => $cnpj , 'endereco' => $endereco, 'cidade' => $cidade,
        'estado' => $estado, 'telefone' => $telefone, 'ramo' => $ramo , 'desconto' => $desconto,
        'email' => $email, 'logo' => $fileNameNew, 'tipoDeDesconto' => $tipoDeDesconto,);

        //echo json_encode($dados);
        $querry = "INSERT INTO `cartao_parceiros`(`nome`, `cnpj`, `endereco`, `cidade`, `estado`, `telefone`, `ramo`, `email`, `tipoDesconto`, `desconto`, `logo`,`obsDesconto`,`horaFuncionamento`) VALUES
        ('$nome','$cnpj','$endereco','$cidade','$estado','$telefone','$ramo','$email','$tipoDeDesconto','$desconto','$fileNameNew','$obsDesconto','$hora')";
        $resultado = $wpdb->get_results($querry);

        header("Location: https://draisistoledo.com/obrigado-parceiro");

        //echo $resultado;
        //echo $querry;
        }else{
          echo json_encode(array('error' => "Todos os campo preciam estar preenchidos e a logo enviada"));
        }


      }else{
        echo json_encode(array('error' => 'arquivo muito grande'));
        die;
      }
    }else{
      echo json_encode(array('error' => 'teve um erro no upload'));
      die;
    }
  }else {
    echo json_encode(array('error' => "formato nao perminitido"));
    die;
  }
}else{
  echo json_encode(array('error' => "Variavel princiapl nao definida"));
  die;
}

?>
