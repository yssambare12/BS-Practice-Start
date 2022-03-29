<!DOCTYPE html>
<html>
<body>

<?php
$x = 5;
$y = 10;

function check() {
  global $x, $y;
  $y = $x + $y;
} 

check(); 
echo $y; 
?>

</body>
</html>
