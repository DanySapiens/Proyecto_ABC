<?php
include_once ("conexion.php");

class Empleados{ 
    
    public static function agregarEmpleado($opcion,$numeroempleado,$nombre,$appaterno,$appmaterno,$direccion,$codigopostal,$telefono,$curp,$nss,$puesto){
        $conexion = new Conexion();
        $conexion -> conectar();
        $query = "select * from fnoperacionesempleados({$opcion},{$numeroempleado},'$nombre','$appaterno','$appmaterno','$direccion','$codigopostal','$telefono','$curp','$nss',{$puesto},'');";
        $resultado = $conexion -> ejecutarConsulta($query);
        $data = array();
        foreach($resultado as $row){
        $data[] = $row;}
        return $data;
    }
    public static function modificarEmpleado($opcion,$numeroempleado,$direccion,$codigopostal,$telefono,$curp,$nss,$puesto){
        $conexion = new Conexion();
        $conexion -> conectar();
        $query = "select * from fnoperacionesempleados({$opcion},{$numeroempleado},'','','','$direccion','$codigopostal','$telefono','$curp','$nss',{$puesto},'');";
        $resultado = $conexion -> ejecutarConsulta($query);
        $data = array();
        foreach($resultado as $row){
        $data[] = $row;}
        return $data;
    }
    public static function bajaEmpleado($opcion,$numeroempleado,$causabaja){
        $conexion = new Conexion();
        $conexion -> conectar();
        $query = "select * from fnoperacionesempleados({$opcion},{$numeroempleado},'','','','','','','','',0,'$causabaja');";
        $resultado = $conexion -> ejecutarConsulta($query);
        $data = array();
        foreach($resultado as $row){
        $data[] = $row;}
        return $data;
    }
    
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

}