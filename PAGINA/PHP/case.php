<?php //controlador 

include_once('./Clases/Empleados.php');
include_once('./Clases/Puestos.php');

$arrRespuesta = array(); //respuesta
$iOpcion = filter_input(INPUT_POST, 'iOpcion', FILTER_SANITIZE_STRING); //entrada
$opcion = filter_input(INPUT_POST, 'opcion', FILTER_SANITIZE_STRING); //entrada
$numeroempleado = filter_input(INPUT_POST, 'numeroempleado', FILTER_SANITIZE_STRING); //entrada
$nombre = filter_input(INPUT_POST, 'nombre', FILTER_SANITIZE_STRING);
$appaterno = filter_input(INPUT_POST, 'apellidopaterno', FILTER_SANITIZE_STRING); //entre '' el nombre en la tabla, el post lo busca como 'apellidopaterno'
$appmaterno = filter_input(INPUT_POST, 'apellidomaterno', FILTER_SANITIZE_STRING);
$direccion = filter_input(INPUT_POST, 'direccion', FILTER_SANITIZE_STRING);
$codigopostal = filter_input(INPUT_POST, 'codigopostal', FILTER_SANITIZE_STRING);
$telefono = filter_input(INPUT_POST, 'telefono', FILTER_SANITIZE_STRING);
$curp = filter_input(INPUT_POST, 'curp', FILTER_SANITIZE_STRING);
$nss = filter_input(INPUT_POST, 'nss', FILTER_SANITIZE_STRING);
$puesto = filter_input(INPUT_POST, 'puesto', FILTER_SANITIZE_STRING);
$causabaja = filter_input(INPUT_POST, 'causabaja', FILTER_SANITIZE_STRING);
$idpuesto = filter_input(INPUT_POST, 'idpuesto', FILTER_SANITIZE_STRING);
$descripcion = filter_input(INPUT_POST, 'descripcion', FILTER_SANITIZE_STRING);
$empleadoalta = filter_input(INPUT_POST, 'empleadoalta', FILTER_SANITIZE_STRING);
$empleadobaja = filter_input(INPUT_POST, 'empleadobaja', FILTER_SANITIZE_STRING);

switch($iOpcion){
    //case 1-5 es para empleados
    case '1':
        $arrRespuesta=Empleados::consultaEmpleadoActivo($opcion,$numeroempleado);
    break;

    case '2':
        $arrRespuesta=Empleados::agregarEmpleado($opcion,$numeroempleado,$nombre,$appaterno,$appmaterno,$direccion,$codigopostal,$telefono,$curp,$nss,$puesto); //lo recibe del ajax
    break;

    case '3':
        $arrRespuesta=Empleados::modificarEmpleado($opcion,$numeroempleado,$direccion,$codigopostal,$telefono,$curp,$nss,$puesto); //parametros que recibe del ajax para mdificar datos de empleado
    break;

    case '4':
        $arrRespuesta=Empleados::bajaEmpleado($opcion,$numeroempleado,$causabaja);
    break;

    //case 6-11 es para puestos
    case '6':
        $arrRespuesta=Puestos::consultaPuestoActivo($opcion,$idpuesto);
    break;

    case '7':
        $arrRespuesta=Puestos::agregarPuesto($opcion,$idpuesto,$descripcion,$empleadoalta);
    break;

    case '8':
        $arrRespuesta=Puestos::modificarPuesto($opcion,$idpuesto,$descripcion);
    break;

    case '9':
        $arrRespuesta=Puestos::bajaPuesto($opcion,$idpuesto,$empleadobaja);
    break;
}

echo json_encode($arrRespuesta);