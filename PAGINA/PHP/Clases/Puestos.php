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
        $conexion = new Conexion();
        $conexion -> conectar();
        $query = "select * from fnoperacionespuestos({$opcion},{$idpuesto},'$descripcion',{$empleadoalta},0);";
        $resultado = $conexion -> ejecutarConsulta($query);
        $data = array();
        foreach($resultado as $row){
        $data[] = $row;}
        return $data;
    }

    public static function modificarPuesto($opcion,$idpuesto,$descripcion){
        $conexion = new Conexion();
        $conexion -> conectar();
        $query = "select * from fnoperacionespuestos({$opcion},{$idpuesto},'$descripcion',0,0);";
        $resultado = $conexion -> ejecutarConsulta($query);
        $data = array();
        foreach($resultado as $row){
        $data[] = $row;}
        return $data;
    }

    public static function bajaPuesto($opcion,$idpuesto,$empleadobaja){
        $conexion = new Conexion();
        $conexion -> conectar();
        $query = "select * from fnoperacionespuestos({$opcion},{$idpuesto},'',0,{$empleadobaja});";
        $resultado = $conexion -> ejecutarConsulta($query);
        $data = array();
        foreach($resultado as $row){
        $data[] = $row;}
        return $data;
    }

}