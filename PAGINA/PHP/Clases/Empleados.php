<?php
include_once ("conexion.php");
include_once("Capirest.php");

class Empleados{ 
    
    public static function agregarEmpleado($opcion,$numeroempleado,$nombre,$appaterno,$appmaterno,$direccion,$codigopostal,$telefono,$curp,$nss,$puesto){
        $objAPI = new Capirest();
        $arrDatos1  = array('opcion' =>$opcion, 'numeroempleado' =>$numeroempleado, 'nombre' =>$nombre,'apellidopaterno'=>$appaterno,'apellidomaterno'=>$appmaterno, 'direccion' =>$direccion, 'codigopostal' => $codigopostal, 'telefono' => $telefono, 'curp' => $curp, 'nss' =>$nss, 'descripcionpuesto' =>$puesto);
        $resultApi = $objAPI->consumirApi('empleados','agregar', $arrDatos1, 'POST');
        
        $resultApi = json_decode($resultApi);
        return $resultApi;
    }
    public static function modificarEmpleado($opcion,$numeroempleado,$direccion,$codigopostal,$telefono,$curp,$nss,$puesto){
        $objAPI = new Capirest();
        $arrDatos1  = array('opcion' =>$opcion, 'numeroempleado' =>$numeroempleado, 'causabaja' =>$causabaja, 'direccion' =>$direccion, 'codigopostal' => $codigopostal, 'telefono' => $telefono, 'curp' => $curp, 'nss' =>$nss, 'puesto' =>$puesto);
        $resultApi = $objAPI->consumirApi('empleados','modificar', $arrDatos1, 'PUT');
        return $resultApi;
    }
    public static function bajaEmpleado($opcion,$numeroempleado,$causabaja){
        $objAPI = new Capirest();
        $arrDatos1  = array('opcion' =>$opcion, 'numeroempleado' =>$numeroempleado, 'causabaja' =>$causabaja);
        $resultApi = $objAPI->consumirApi('empleados','baja', $arrDatos1, 'PUT');
        return $resultApi;
    }
    
    public static function consultaEmpleadoActivo($opcion,$numeroempleado){
        $objAPI = new Capirest();
        $arrDatos1  = array('opcion' =>$opcion, 'numeroempleado' =>$numeroempleado);
        $resultApi = $objAPI->consumirApi('empleados','obtener', $arrDatos1, 'POST');
       
        // $conexion = new Conexion();
        // $conexion -> conectar();
        // $query = "select * from fnoperacionesempleados({$opcion},{$numeroempleado},'','','','','','','','',0,'');";
        // $resultado = $conexion -> ejecutarConsulta($query);
        // $data = array();
        // foreach($resultado as $row){
        // $data[] = $row;}
        // return $data;
        $resultApi = json_decode($resultApi);
       // var_dump($resultApi); //se usa para imprimir resultado

        return $resultApi;
    }

}