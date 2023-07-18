<?php
include_once ("conexion.php");

class Puestos{
    
    public static function consultaPuestoActivo($opcion,$id){
        $conexion = new Conexion();
        $conexion -> conectar();
        $query = "select * from fnoperacionespuestos({$opcion},{$id},0,'');";
        $resultado = $conexion -> ejecutarConsulta($query);
        $data = array();
        foreach($resultado as $row){
        $data[] = $row;}
        return $data;
    }

}