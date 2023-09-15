<?php
class Capirest {//clase para consumir una api desde php

	function consumirApi($sControlador, $sFuncion, $arrDatos, $metodo)
	{
        $curl = curl_init();
        $arrDatos = json_encode($arrDatos);

        $url ='http://127.0.0.1:5000/'.$sControlador.'/'.$sFuncion;
    
        curl_setopt_array($curl, array(
          CURLOPT_URL => $url,
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => '',
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 0,
          CURLOPT_FOLLOWLOCATION => true,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => $metodo,
          CURLOPT_POSTFIELDS => $arrDatos,
          CURLOPT_HTTPHEADER => array(
            'Content-Type: application/json'
          ),
        ));
        
        $response = curl_exec($curl);
        curl_close($curl);
        return $response;
 
	}
}
?>