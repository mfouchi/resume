<?php
require_once "Mail.php";
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
	
	//$this_mail = mail($toEmail, $subject, $message, $headers);
  

$host = "mail.pixelclickllc.com";
$port = 26; // NOTICE THIS PORT HAS TO BE 26, NOT 25
$username = ""; //YES, THAT IS  A “PLUS” SIGN
$password = "";

$headers = array ('From' => $name + '<' + $email + '>',
'To' => $toEmail,
'Subject' => $subject);
$smtp = Mail::factory('smtp',
array ('host' => $host,
'port' =>$port,
'auth' => true,
'username' => $username,
'password' => $password));

$mail = $smtp->send($to, $headers, $body);

if (PEAR::isError($mail)) {
	$showMessage = $mail->getMessage();
} else {
	$showMessage = "Message successfully sent!";
}

$jsonData = array(
	"message"	=> $showMessage
);
echo json_encode($jsonData); 
?>