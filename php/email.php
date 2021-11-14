<?php
// Empty fields
if(empty($_POST['name'])  	||
   empty($_POST['email']) 	||
   empty($_POST['phone']) 	||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)){
		echo "No arguments Provided!";
		return false;
   }
	
$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
	
// Email
$to = 'yourname@yourdomain.com';
$subject = "Website Contact Form: $name";
$body = "You have received a new message from your website contact form.\n\n".
		"Here are the details:\n\n
		Name: $name\n\n
		Email: $email\n\n
		Phone: $phone\n\n
		Message: $message";
$headers = "From: noreply@yourdomain.com\n";
$headers .= "Reply-To: $email";

mail($to, $subject, $body, $headers);
return true;
?>