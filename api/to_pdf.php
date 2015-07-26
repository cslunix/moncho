<?php

require('../vendor/dompdf/dompdf_config.inc.php');

$data = $_POST['data'];

$html = <<<EOT
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Moncho </title>
</head>
<body>
{$data}
</body>
</html>
EOT;


// Generate PDF
$dompdf = new DOMPDF();
$dompdf->set_paper( 'A4', 'portrait' );
$dompdf->load_html($html);
$dompdf->render();
$output = $dompdf->output();
$nombre = 'monchos/moncho'.time().'.pdf';
file_put_contents($nombre, $output);
echo 'api/'.$nombre;

?>