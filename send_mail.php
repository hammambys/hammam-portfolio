<?php
if (!empty($_POST["send"])) {
    if (!empty($_POST["fullname"]) && !empty($_POST["email"]) && !empty($_POST["subject"]) && !empty($_POST["message"])) {
        $fname = $_POST["fullname"];
        $email = $_POST["email"];
        $subject = $_POST["subject"];
        $message = $_POST["message"];
        $toEmail = "hammambenyounes@gmail.com";
        $mailHeaders = "From: " . $name . "<" . $email . ">\r\n";
        if (mail($toEmail, $subject, $message, $mailHeaders)) {
            $message = "Your contact information is received successfully.";
            $type = "success";
        }
    }
}
