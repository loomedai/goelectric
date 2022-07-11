<?php
$message_sent = false;
if(isset($_POST['email'])&& $_POST['email'] !=''){

    if( filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $tlf = $_POST['tlf'];
        $message = $_POST['message'];

        $mailheader = "From:".$name."<".$email.">";

        $to = "bbrith@hotmail.com";

        $body = "";

        $body .="From:".$name. "\r\n";
        $body .="Email:".$email. "\r\n";
        $body .="Message:".$message. "\r\n";

        mail($to, $name, $body, $email, $tlf);

        echo'
    din besked blev sendt <a href="index.html"> tilbage til siden </a>
    ';
        $message_sent = true;
    }
}
?>