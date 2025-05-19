<?php
// target email
$to = 'ben@wpg-plan.com';

// pull and sanitize input
$name    = trim(filter_input(INPUT_POST, 'name',    FILTER_SANITIZE_STRING));
$email   = trim(filter_input(INPUT_POST, 'email',   FILTER_SANITIZE_EMAIL));
$subject = trim(filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING));
$message = trim(filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING));

// prefix subject
$fullSubject = 'web: ' . $subject;

// build headers
$headers  = "From: {$name} <{$email}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// assemble body
$body  = "Name: {$name}\n";
$body .= "Email: {$email}\n\n";
$body .= "Message:\n{$message}\n";

// send it
if ( mail($to, $fullSubject, $body, $headers) ) {
    echo "Thanks! Your message has been sent.";
} else {
    echo "Sorry, something went wrong. Please try again later.";
}
?>
