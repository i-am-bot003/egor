<?php
$to = 'belyaaev@gmail.com'; 
$from = trim($_POST['mail']);
$imya = $_POST['imya'];
$familiya = $_POST['fam'];
$otch = $_POST['otch'];
$tel = $_POST['numtel'];
$comment = $_POST['comment'];
$imya = htmlspecialchars($imya);
$familiya = htmlspecialchars($familiya);
$otch = htmlspecialchars($otch);
$from = htmlspecialchars($from);
$tel = htmlspecialchars($tel);
$comment = htmlspecialchars($comment);
$subject = $imya.$familiya.$otch.$tel.$comment;
mail($to, $subject, $comment);
?>