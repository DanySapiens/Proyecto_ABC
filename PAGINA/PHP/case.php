<?php //controlador 
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: *");

include_once('./Clases/Empleados.php');

$arrRespuesta = array(); //respuesta
$iOpcion = filter_input(INPUT_POST, 'iOpcion', FILTER_SANITIZE_STRING); //entrada
$opcion = filter_input(INPUT_POST, 'opcion', FILTER_SANITIZE_STRING); //entrada
$numeroempleado = filter_input(INPUT_POST, 'numeroempleado', FILTER_SANITIZE_STRING); //entrada
$nombre = filter_input(INPUT_POST, 'nombre', FILTER_SANITIZE_STRING);
$appaterno = filter_input(INPUT_POST, 'apellidopaterno', FILTER_SANITIZE_STRING); //entre '' el nombre en la tabla
$appmaterno = filter_input(INPUT_POST, 'apellidomaterno', FILTER_SANITIZE_STRING);
$direccion = filter_input(INPUT_POST, 'direccion', FILTER_SANITIZE_STRING);
$codigopostal = filter_input(INPUT_POST, 'codigopostal', FILTER_SANITIZE_STRING);
$telefono = filter_input(INPUT_POST, 'telefono', FILTER_SANITIZE_STRING);
$curp = filter_input(INPUT_POST, 'curp', FILTER_SANITIZE_STRING);
$nss = filter_input(INPUT_POST, 'nss', FILTER_SANITIZE_STRING);
$puesto = filter_input(INPUT_POST, 'puesto', FILTER_SANITIZE_STRING);

switch($iOpcion){

    case '1':
        $arrRespuesta=Empleados::consultaEmpleadoActivo($opcion,$numeroempleado);
    break;

    case '2':
        $arrRespuesta=Empleados::agregarEmpleado($opcion,$numeroempleado,'$nombre','$appaterno','$appmaterno','$direccion','$codigopostal','$telefono','$curp','$nss',$puesto);

    // case '99':
    //     $arrRespuesta=Empleados::consultaEmpleado();
    // break;

}


echo json_encode($arrRespuesta);