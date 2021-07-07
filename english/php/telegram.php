<?php
ini_set('display_errors',1);
error_reporting(E_ALL);

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$token = "1850541598:AAGmvYGeZ7K95c9Qto9RJ3650_c8hnoxdz4";
$txt = "";
$chat_id = "-500862335";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email: ' => $email
);

foreach ($arr as $key => $value) {
  $txt .= "<b>".$key."</b>".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

header('Location: http://english/app/test.html');
?>