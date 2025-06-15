<?php
// Include the database connection
require 'signup.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Retrieve form data
    $firstName = htmlspecialchars($_POST['firstN']);
    $lastName = htmlspecialchars($_POST['lastN']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['pass1']);
    $confirmPassword = htmlspecialchars($_POST['pass2']);

    // Check if passwords match
    if ($password !== $confirmPassword) {
        die("Passwords do not match. Please go back and try again.");
    }

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    // Check if email is already registered
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    if ($stmt->rowCount() > 0) {
        die("This email is already registered. Please <a href='login.html'>log in</a>.");
    }

    // Insert user into the database
    $stmt = $pdo->prepare("INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)");
    $stmt->execute([$firstName, $lastName, $email, $hashedPassword]);

    echo "Registration successful! You can now <a href='login.html'>log in</a>.";
}
?>
