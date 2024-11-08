<?php
$name = $_POST['name'];
$user_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'kps-ng.com';
$email_subject = 'New Form Submission';

$email_body = "Full Name: $name.\n" .
    "Email Address: $user_email.\n" .
    "Subject: $subject.\n" .
    "User Message: $message.\n";

$to = "adeyemoademola12@gmail.com";

$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $user_email \r\n";
$headers .= "MIME-Version: 1.0 \r\n";
$headers .= "Content-type: text/plain; charset=utf-8 \r\n";

mail($to, $email_subject, $email_body, $headers);

header("Location: contact.html");
