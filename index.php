<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<form class="" action="#" method="post" enctype="multipart/form-data">
			<input type="file" name="file" >
			<button type="submit" name="submit">enviar arquivo</button>
		</form>

		<?
		if (isset($_POST['submit'])){
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
				if($fileSize < 100000){
					$fileNameNew == uniqid('',true).".".$fileActualExt;
					$fileDestination = 'uploads/'.$fileNameNew;
					move_uploaded_file($fileTmpName, $fileDestination);

				}else{
				echo 'arquivo muito grande';
				}
			}else{
			echo 'teve um erro no upload';
			}
		}

		}

		?>
	</body>
</html>
