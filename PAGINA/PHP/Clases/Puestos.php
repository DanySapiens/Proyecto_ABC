<?php
include_once ("conexion.php");

class Puestos{
    
    public static function consultaPuestoActivo($opcion,$idpuesto){
        $conexion = new Conexion();
        $conexion -> conectar();
        $query = "select * from fnoperacionespuestos({$opcion},{$idpuesto},'',0,0);";
        $resultado = $conexion -> ejecutarConsulta($query);
        $data = array();
        foreach($resultado as $row){
        $data[] = $row;}
        return $data;
    }

}