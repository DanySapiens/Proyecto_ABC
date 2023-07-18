<?php //controlador 
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: *");

include_once('./Clases/Empleados.php');

$arrRespuesta = array(); //respuesta
$iOpcion = filter_input(INPUT_POST, 'iOpcion', FILTER_SANITIZE_STRING); //entrada
$opcion = filter_input(INPUT_POST, 'opcion', FILTER_SANITIZE_STRING); //entrada
$numeroempleado = filter_input(INPUT_POST, 'numeroempleado', FILTER_SANITIZE_STRING); //entrada

switch($iOpcion){
    case '99':
        $arrRespuesta=Empleados::consultaEmpleado();
    break;

    case '1':
        $arrRespuesta=Empleados::consultaEmpleadoActivo($opcion,$numeroempleado);
    break;

}


echo json_encode($arrRespuesta);