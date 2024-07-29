<?php
// forgot_password_processor.php

// Include database configuration
include('db_config.php');

// Collect form data
$email = trim($_POST['email']);

// Validate form data
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: forgot_password.html?error=" . urlencode("A valid email is required."));
    exit();
}

// Generate a password reset token (for demonstration purposes, this is a simple example)
$token = bin2hex(random_bytes(16));

// Here you would typically save the token to the database and send a reset link via email
// For demonstration purposes, let's assume the request is always successful.
header("Location: index.html"); // Redirect to home page
exit();
?>
