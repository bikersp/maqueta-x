<?php
// Empty fields
if(empty($_POST['name'])  	||
   empty($_POST['email']) 	||
   empty($_POST['phone']) 	||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)){
   		header("location:../index.html");
}else{

	$name = strip_tags(htmlspecialchars($_POST['name']));
	$email = strip_tags(htmlspecialchars($_POST['email']));
	$phone = strip_tags(htmlspecialchars($_POST['phone']));
	$message = strip_tags(htmlspecialchars($_POST['message']));	

	// Email
	require 'PHPMailerAutoload.php';
	$mail = new PHPMailer;

	$from = "noreply@yourdomain.com";
	$to = 'yourname@yourdomain.com';

	$mail->setFrom($from);
	$mail->addAddress($to);
	$mail->IsHTML(true);
	$mail->CharSet = 'UTF-8';
	$mail->Subject  = 'Website Contact Form: $name';
	$mail->Body = "You have received a new message from your website contact form.\n\n".
		"Here are the details:\n\n
		Name: $name\n\n
		Email: $email\n\n
		Phone: $phone\n\n
		Message: $message";

	if(!$mail->send()) {
	  echo "Mailer error: " . $mail->ErrorInfo;
	} else {
		header("location: email_sent.html");
	}
}
?>