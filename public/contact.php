<?php
    $_POST = json_decode(file_get_contents('php://input'), true);

    if($_POST) {
        $to_Email = 'finbarmaginn@hotmail.com';
        //Sanitize input data using PHP filter_var().

        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
        $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

        if(empty($name) || empty($email) || empty($message)){
            die(header('HTTP/1.0 400 Please Make Sure the Form has been filled in correctly!'));
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            die(header('HTTP/1.0 400 Invalid email format.'));
        }

        // prepare email body text
        $body = $message;
        $subject = "Light of Other Days Contact from: " . $email;
        $email = $name.'<'.$email.'>';
        $headers = 'From: '.$email."\r\n".
            'Reply-To: '.$email."\r\n" .
            'X-Mailer: PHP/' . phpversion();

        // send email
        $success = mail($to_Email, $subject, $body, $headers);

        if(!$success) {
            header('HTTP/1.1 500 Could not send mail! Sorry..');
            exit();
        } else {
            echo '<h3>Hi '. $formName .', Thank you for your submission!<br />';
            echo 'Your message has been sent.</h3>';
        }
    } else {
        echo '<h1>ERROR</h1>';
    }
?>