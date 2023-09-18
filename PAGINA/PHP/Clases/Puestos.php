<?php
include_once ("conexion.php");

class Puestos{
    
    public static function consultaPuestoActivo($opcion,$idpuesto){
        $objAPI = new Capirest();
        $arrDatos1  = array('opcion' =>$opcion, 'idpuesto' =>$idpuesto);
        $resultApi = $objAPI->consumirApi('puestos','obtener', $arrDatos1, 'POST');
        $resultApi = json_decode($resultApi);
        return $resultApi;
    }

    public static function agregarPuesto($opcion,$idpuesto,$descripcion,$empleadoalta){
        $objAPI = new Capirest();
        $arrDatos1  = array('opcion' =>$opcion, 'idpuesto' =>$idpuesto, 'descripcion' => $descripcion, 'empleadoalta' =>$empleadoalta);
        $resultApi = $objAPI->consumirApi('puestos','agregar', $arrDatos1, 'POST');
        $resultApi = json_decode($resultApi);
        return $resultApi;
    }

    public static function modificarPuesto($opcion,$idpuesto,$descripcion){
        $objAPI = new Capirest();
        $arrDatos1  = array('opcion' =>$opcion, 'idpuesto' =>$idpuesto, 'descripcion' => $descripcion);
        $resultApi = $objAPI->consumirApi('puestos','modificar', $arrDatos1, 'PUT');
        $resultApi = json_decode($resultApi);
        return $resultApi;
    }

    public static function bajaPuesto($opcion,$idpuesto,$empleadobaja){
        $objAPI = new Capirest();
        $arrDatos1  = array('opcion' =>$opcion, 'idpuesto' =>$idpuesto, 'empleadobaja' =>$empleadobaja); //el nombre entre comillas es a como lo recibe la api en el py en el endpoint
        $resultApi = $objAPI->consumirApi('puestos','baja', $arrDatos1, 'PUT');
        $resultApi = json_decode($resultApi);
        return $resultApi;
    }

}