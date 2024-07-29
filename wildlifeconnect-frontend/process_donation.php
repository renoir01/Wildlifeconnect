<?php
// process_donation.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $amount = htmlspecialchars($_POST['amount']);

    // Here, you would handle the donation (e.g., save it to a database, process payment, etc.)

    // Redirect to a thank-you page
    header('Location: thank_you.html');
    exit();
}
?>
