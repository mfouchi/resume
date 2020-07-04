<?php
$name = $_POST['name'];
$email = $_POST['email'];
$comment = $_POST['comment'];
$toEmail = "mfouchi@gmail.com";
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$showMessage = '';
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {	
	$subject = "Email from Marc's Resume Website";
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= 'From: '.$email."\r\n".
    'Reply-To: '.$email."\r\n" .
    'X-Mailer: PHP/' . phpversion();	
	$message = 'Hello,<br/>'
	. 'Name:' . $name . '<br/>'	
	. 'Message:' . $comment . '<br/><br/>';		
	mail($toEmail, $subject, $message, $headers);
	$showMessage = "Thank you.  Your message has been received. I will contact you soon.";	
} else {
	$showMessage =  "invalid email";
}
$jsonData = array(
	"message"	=> $showMessage
);
echo json_encode($jsonData); 
?>