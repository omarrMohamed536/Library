<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit();
}

$userName = $_SESSION['user_name'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Welcome to IQRAA</title>
</head>
<body>
    <h1>Welcome, <?= htmlspecialchars($userName) ?>!</h1>
    <p>You are now logged in to IQRAA Library.</p>
    <a href="logout.php">Logout</a>
</body>
</html>
