<?php
include_once ("conexion.php");

class Empleados{ 
    
    // public static function agregarEmpleado(){

    // }
    // public static function modificarEmpleado(){
    // }
    // public static function bajaEmpleado(){
    // }
    // public static function consultaEmpleado(){
    
    public static function consultaEmpleadoActivo($opcion,$numeroempleado){
        $conexion = new Conexion();
        $conexion -> conectar();
        $query = "select * from fnoperacionesempleados({$opcion},{$numeroempleado},'','','','','','','','',0,'');";
        $resultado = $conexion -> ejecutarConsulta($query);
        $data = array();
        foreach($resultado as $row){
        $data[] = $row;}
        return $data;
    }

    // public static function consultaMultiEmpleados(){

    // }

}