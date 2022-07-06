<?php

if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $lastname = $_POST['lastname'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];
    
    $mailTo = "tsu.alfaro@me.com";
    $headers = "De: ".$mailFrom;
    $txt = "Tiene un mensaje de ".$name.".\n\n".$message;
    
    mail($mailTo, $txt, $headers);
    header("Location: index.html?mailsend")
}