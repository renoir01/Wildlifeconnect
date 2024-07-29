<?php
echo "Request Method: " . $_SERVER["REQUEST_METHOD"] . "<br>";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate form inputs
    $park = htmlspecialchars($_POST['park']);
    $name = htmlspecialchars($_POST['name']);
    $date = htmlspecialchars($_POST['date']);

    // Validate input data
    if (empty($park) || empty($name) || empty($date)) {
        echo "All fields are required.";
        exit;
    }

    // Recipient email address
    $to = 'r.kaze@alustudent.com';
    // Subject of the email
    $subject = 'New Park Booking';
    // Message body of the email
    $message = "Booking Details:\n\nName: $name\nPark: $park\nDate: $date";
    // Headers for the email
    $headers = "From: noreply@wildlifeconnect.com";

    // Sending the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Booking successful for $name at $park on $date. A confirmation email has been sent to your email address.";
    } else {
        echo "There was an error sending the email. Please try again.";
    }
} else {
    echo "Invalid request method. Please submit the form correctly.";
}
?>
