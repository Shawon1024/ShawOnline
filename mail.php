<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') 
{
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $to = 'admin@shawonline.me';
  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";

  if (mail($to, $subject, $message, $headers)) 
  {
    echo 'Email sent successfully.';
  } 
  else 
  {
    echo 'Unable to send email. Please try again.';
  }
}
?>
