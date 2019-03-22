<?php
error_reporting(0);

$to = 'lpaszko30@gmail.com';

if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$regulation = $_POST['regulation'];
   $antySpam = $_POST['honey'];
	$errors = Array();
	$return = Array();

	if ( empty( $name ) ) {
		array_push( $errors, 'name' );
	}
	if ( ! filter_var( $email, FILTER_VALIDATE_EMAIL ) ) {
		array_push( $errors, 'email' );
	}
	if ( empty( $message ) ) {
		array_push( $errors, 'message' );
	}
	if ( empty( $regulation ) ) {
		array_push( $errors, 'regulation' );
	}
    if(!empty($antySpam)){
      array_push($errors, 'honey');
    }

	if ( count( $errors ) > 0 ) {
		$return['errors'] = $errors;
	} else {
      $subject = 'Wiadomość z lpaszko.pl - '.date("l jS \of F Y h:i:s A");
		$message = "Treść: ".$message."\r\n"
        ."od: ".$name."\r\n"
        ."e-mail: ".$email;
		if ( mail($to, $subject, $message) ) {
			$return['status'] = 'ok';
		} else {
			$return['status'] = 'error';
		}
	}

	header( 'Content-Type: application/json' );
	echo json_encode( $return );
}