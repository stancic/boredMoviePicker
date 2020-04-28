<?php
$server     = "localhost";
$username   = "root";
$password   = "";
$database   = "boredMoviePicker";
// Kreiranje konekcije
$conn = new mysqli($server, $username, $password,$database);

// Provjera konekcije connection
if ($conn->connect_error) {
   die("Konekcija nije uspjela: " . $conn->connect_error);
}

?>