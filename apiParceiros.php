<?
header("Access-Control-Allow-Origin: *");
require_once($_SERVER['DOCUMENT_ROOT']."/wp-load.php");

$parceiros_db = $wpdb->get_results("SELECT * FROM cartao_parceiros where aprovado = '1'");

echo json_encode($parceiros_db);



?>
