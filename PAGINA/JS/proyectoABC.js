//declara de botones del html
const botonEmpleados = document.getElementById('boton-empleados')
const botonPuestos = document.getElementById('boton-puestos')
const botonAgregar = document.getElementById('boton-agregar')
const botonModificar = document.getElementById('boton-modificar')
const botonBaja = document.getElementById('boton-baja')
const botonAceptar = document.getElementById('boton-aceptar')
const botonCancelar = document.getElementById('boton-cancelar')
const botonLupaEmpleado = document.getElementById('lupa-empleado')
const botonLupaPuestos = document.getElementById('lupa-puesto')

//declara de secciones del html
const seccionDatosEmpleado = document.getElementById('ingresar-datos-empleado')
const seccionDatosPuesto = document.getElementById('ingresar-datos-puesto')
const seccionTablaEmpleados = document.getElementById('mostrar-info-empleados')
const seccionTablaPuestos = document.getElementById('mostrar-info-puestos')
const seccionBuscadorEmpleados = document.getElementById('buscador-empleado')
const seccionBuscadoPuestos = document.getElementById('buscador-puesto')

//declara los inputs para la informacion del empleado y puesto
const inputNumEmp = document.getElementById("numero-empleado")
const inputNombre = document.getElementById('nombre-empleado')
const inputApellidoMaterno = document.getElementById('apellido-materno')
const inputApellidoPaterno = document.getElementById('apellido-paterno')
const inputDireccion = document.getElementById('direccion')
const inputCP = document.getElementById('codigo-postal')
const inputTel = document.getElementById('telefono')
const inputCURP = document.getElementById('curp')
const inputNSS = document.getElementById('nss')
const inputPuesto = document.getElementById('puesto')
const inputIdPuesto = document.getElementById('id-puesto')
const inputDescripcion = document.getElementById('descripcion')
const inputEmpleadoRegistra = document.getElementById('empleado-registra')
const inputEmpleadoBaja = document.getElementById('empleado-baja')
const inputCausaBaja = document.getElementById('causa-baja')
const inputBuscadorEmpleado = document.getElementById('buscar-empleado')
const inputBuscadorPuesto = document.getElementById('buscar-puesto')

//llamamos a la funcion para validar el ingreso de letras en estos campos
inputNombre.addEventListener('keypress',SoloLetras)
inputApellidoMaterno.addEventListener('keypress',SoloLetras)
inputApellidoPaterno.addEventListener('keypress',SoloLetras)
inputApellidoPaterno.addEventListener('keypress',SoloLetras)
inputApellidoPaterno.addEventListener('keypress',SoloLetras)
inputDescripcion.addEventListener('keypress',SoloLetras)

//lamamos a la funcion para validar el ingreso numeros en estos campos
inputNumEmp.addEventListener('keypress',SoloNumeros)
inputCP.addEventListener('keypress',SoloNumeros)
inputTel.addEventListener('keypress',SoloNumeros)
inputNSS.addEventListener('keypress',SoloNumeros)
inputIdPuesto.addEventListener('keypress',SoloNumeros)
inputEmpleadoRegistra.addEventListener('keypress',SoloNumeros)
inputEmpleadoBaja.addEventListener('keypress',SoloNumeros)
inputBuscadorEmpleado.addEventListener('keypress',SoloNumeros)
inputBuscadorPuesto.addEventListener('keypress', SoloNumeros) 


function traerPantallaInicioEmpleados(){ //funcion para mostrar la pantalla de inicio Empleados
    llenarPuestos();

    seccionDatosEmpleado.style.display ='block';
    seccionTablaEmpleados.style.display ='block';
    seccionBuscadorEmpleados.style.display ='block';
    seccionDatosPuesto.style.display ='none';
    seccionTablaPuestos.style.display = 'none';
    seccionBuscadoPuestos.style.display ='none';

    botonPuestos.addEventListener('click',traerPantallaInicioPuestos); //llama a la pantalla de puestos
    botonPuestos.addEventListener('click', deshabilitarCamposAgregarPuesto);

    botonAgregar.removeEventListener('click', deshabilitarCamposAgregarPuesto); //eliminamos los eventos porque no se sobrescriben
    botonModificar.removeEventListener('click', deshabilitarCamposModificarPuesto);
    botonBaja.removeEventListener('click', deshabilitarCamposBajaPuesto);

    botonAgregar.addEventListener('click',deshabilitarCamposAgregarEmpleado);
    botonModificar.addEventListener('click',deshabilitarCamposModificarEmpleado);
    botonBaja.addEventListener('click',deshabilitarCamposBajaEmpleado);

    botonCancelar.addEventListener('click',cancelar); //limpia los input

    inputCausaBaja.disabled = true; //campo causa baja
    inputCausaBaja.style.background = '#c1c1c1';

    botonAceptar.removeEventListener('click',altaPuesto);
    botonAceptar.removeEventListener('click',modificarPuesto); //eliminamos los eventos porque no se sobrescriben
    botonAceptar.removeEventListener('click',darDeBajaPuesto);

    botonAceptar.removeEventListener('click',altaEmpleado);
    botonAceptar.removeEventListener('click',modificaEmpleado);
    botonAceptar.removeEventListener('click',darDeBajaEmpleado);

    botonLupaEmpleado.addEventListener('click',consultaEmpleado); //llama a la funcion consulta empleado
}

function deshabilitarCamposAgregarEmpleado(){ //funcion para deshabilitar los campos no requeridos para agregar empleado y mandar llamar al ajax
    cancelar();

    inputNumEmp.disabled = false; //campo numero empleado
    inputNumEmp.style.background = 'white';

    inputNombre.disabled = false; //campo nombre empleado
    inputNombre.style.background ='white';

    inputApellidoPaterno.disabled = false; //campo apellido 
    inputApellidoPaterno.style.background ='white';

    inputApellidoMaterno.disabled = false; //campo apellido
    inputApellidoMaterno.style.background = 'white';

    inputDireccion.disabled = false; //campo direccion
    inputDireccion.style.background ='white';

    inputCP.disabled = false; //campo CP
    inputCP.style.background ='white';

    inputTel.disabled = false; //campo telefono
    inputTel.style.background ='white';

    inputCURP.disabled = false; //campo curp
    inputCURP.style.background ='white';

    inputNSS.disabled = false; //campo NSS
    inputNSS.style.background ='white';
    
    inputPuesto.disabled = false; //campo puesto
    inputPuesto.style.background ='white';

    inputCausaBaja.disabled = true; //campo causa baja
    inputCausaBaja.style.background = '#c1c1c1';

    botonAgregar.style.boxShadow = '#079cff 1px 1px 20px 1px'; //elimina el estilo de los botones al seleccionarlos
    botonModificar.style.boxShadow = 'none';
    botonBaja.style.boxShadow = 'none';

    botonAceptar.removeEventListener('click',altaPuesto);
    botonAceptar.removeEventListener('click',modificarPuesto);
    botonAceptar.removeEventListener('click',darDeBajaPuesto);

    botonAceptar.removeEventListener('click',modificaEmpleado); //remueve los eventos anteriores para ejecutar uno solo
    botonAceptar.removeEventListener('click',darDeBajaEmpleado);
    botonAceptar.addEventListener('click',altaEmpleado); ///llama a la funcion para ejecutar el ajax
}

function consultaEmpleado(){ 
    if (inputBuscadorEmpleado.value.length == 0) {
        alert('Ingrese numero de empleado');
        return false;
    }else{
        realizarConsultaEmpleado(inputBuscadorEmpleado.value);
    }
}

function altaEmpleado(){ //el if evalua que tenga todos los campos llenos
    if ((inputNumEmp.value.length == 0)||(inputNombre.value.length == 0)||(inputApellidoPaterno.value.length == 0)||(inputApellidoMaterno.value.length == 0)||(inputDireccion.value.length == 0)||(inputCP.value.length == 0)||(inputTel.value.length == 0)||(inputCURP.value.length == 0)||(inputNSS.value.length == 0)||(inputPuesto.value.length == 0)) {
        alert('Ingrese todos los datos del empleado');
        return false;
    }else{
        darAltaEmpleado(inputNumEmp.value,
                        inputNombre.value,
                        inputApellidoPaterno.value,
                        inputApellidoMaterno.value,
                        inputDireccion.value,
                        inputCP.value,
                        inputTel.value,
                        inputCURP.value,
                        inputNSS.value,
                        inputPuesto.value);
    }
}

function modificaEmpleado(){
    if ((inputNumEmp.value.length == 0)||(inputDireccion.value.length == 0)||(inputCP.value.length == 0)||(inputTel.value.length == 0)||(inputCURP.value.length == 0)||(inputNSS.value.length == 0)||(inputPuesto.value.length == 0)) {
        alert('Ingrese todos los datos del empleado');
        return false;
    }else{ //ejecuta el ajax
        modificarDatosEmpleado(inputNumEmp.value,
                            inputDireccion.value,
                            inputCP.value,
                            inputTel.value,
                            inputCURP.value,
                            inputNSS.value,
                            inputPuesto.value);
    }
}

function darDeBajaEmpleado(){
    if ((inputNumEmp.value.length == 0)||(inputCausaBaja.value.length == 0)) {
        alert('Ingrese el numero empleado y causa baja');
        return false;
    }else{ //ejecutas el ajax
        darBajaEmpleado(inputNumEmp.value,
                        inputCausaBaja.value);
    }
}

function deshabilitarCamposModificarEmpleado(){ //funcion para deshabilitar los campos no requeridos para modificar empleado y mandar llamar al ajax
    cancelar(); //limpia los input

    inputNumEmp.disabled = false; //campo numero empleado
    inputNumEmp.style.background = 'white';

    inputNombre.disabled = true; //campo nombre
    inputNombre.style.background = '#c1c1c1';

    inputApellidoPaterno.disabled = true; //campo apellido paterno
    inputApellidoPaterno.style.background = '#c1c1c1';

    inputApellidoMaterno.disabled = true; //campo apellido materno
    inputApellidoMaterno.style.background = '#c1c1c1';

    inputDireccion.disabled = false; //campo direccion
    inputDireccion.style.background ='white';

    inputCP.disabled = false; //campo CP
    inputCP.style.background ='white';

    inputTel.disabled = false; //campo telefono
    inputTel.style.background ='white';

    inputCURP.disabled = false; //campo curp
    inputCURP.style.background ='white';

    inputNSS.disabled = false; //campo NSS
    inputNSS.style.background ='white';

    inputPuesto.disabled = false; //campo puesto
    inputPuesto.style.background ='white';

    inputCausaBaja.disabled = true; //campo causa baja
    inputCausaBaja.style.background = '#c1c1c1';

    botonModificar.style.boxShadow = '#888602 1px 1px 20px 1px';
    botonAgregar.style.boxShadow = 'none';
    botonBaja.style.boxShadow = 'none';

    botonAceptar.removeEventListener('click',altaPuesto);
    botonAceptar.removeEventListener('click',modificarPuesto);
    botonAceptar.removeEventListener('click',darDeBajaPuesto);

    botonAceptar.removeEventListener('click',altaEmpleado);
    botonAceptar.removeEventListener('click',darDeBajaEmpleado);
    botonAceptar.addEventListener('click',modificaEmpleado); ///llama a la funcion para ejecutar el ajax
}

function deshabilitarCamposBajaEmpleado(){ //funcion para deshabilitar los campos no requeridos para dar de baja empleado y mandar llamar al ajax
    cancelar(); //limpia los input

    inputNumEmp.disabled = false; //campo numero empleado
    inputNumEmp.style.background = 'white';

    inputNombre.disabled = true; //campo nombre
    inputNombre.style.background = '#c1c1c1';

    inputApellidoPaterno.disabled = true; //campo apellido paterno
    inputApellidoPaterno.style.background = '#c1c1c1';

    inputApellidoMaterno.disabled = true; //campo apellido materno
    inputApellidoMaterno.style.background = '#c1c1c1';

    inputDireccion.disabled = true;
    inputDireccion.style.background = '#c1c1c1';

    inputCP.disabled = true;
    inputCP.style.background = '#c1c1c1';

    inputTel.disabled = true //campo telefono
    inputTel.style.background = '#c1c1c1';

    inputCURP.disabled = true; //campo curp
    inputCURP.style.background = '#c1c1c1';

    inputNSS.disabled = true; //campo NSS
    inputNSS.style.background = '#c1c1c1';

    inputPuesto.disabled = true; //campo puesto
    inputPuesto.style.background = '#c1c1c1';

    inputCausaBaja.disabled = false; //campo causa baja
    inputCausaBaja.style.background = 'white';

    botonBaja.style.boxShadow = '#d96d09 1px 1px 20px 1px';
    botonAgregar.style.boxShadow = 'none';
    botonModificar.style.boxShadow = 'none';

    botonAceptar.removeEventListener('click',altaPuesto);
    botonAceptar.removeEventListener('click',modificarPuesto);
    botonAceptar.removeEventListener('click',darDeBajaPuesto);

    botonAceptar.removeEventListener('click',altaEmpleado);
    botonAceptar.removeEventListener('click',modificaEmpleado);
    botonAceptar.addEventListener('click',darDeBajaEmpleado); ///llama a la funcion para ejecutar el ajax
}

function consultaPuestos(){
    if (inputBuscadorPuesto.value.length == 0) {
         alert('Ingrese el ID del puesto');
         return false;
     }else{ //ejecuta el ajax
        realizarConsultaPuesto(inputBuscadorPuesto.value);
     }
}

function altaPuesto(){ //evalua si todos los campos estan llenos
    if ((inputIdPuesto.value.length == 0)||(inputDescripcion.value.length == 0)||(inputEmpleadoRegistra.value.length == 0)) {
        alert('Ingrese todos los datos para agregar puesto');
        return false;
    }else{
        darAltaPuesto(inputIdPuesto.value,
                    inputDescripcion.value,
                    inputEmpleadoRegistra.value);
    }
}

function modificarPuesto(){//evalua si todos los campos estan llenos
    if ((inputIdPuesto.value.length == 0)||(inputDescripcion.value.length == 0)) {
        alert('Ingrese todos los datos para modificar puesto');
        return false;
    }else{
        modificarDatosPuesto(inputIdPuesto.value,
                         inputDescripcion.value);
    }
}

function darDeBajaPuesto(){//evalua si todos los campos estan llenos
    if ((inputIdPuesto.value.length == 0)||(inputEmpleadoBaja.value.length == 0)) {
        alert('Ingrese todos los datos para dar de baja puesto');
        return false;
    }else{
        darBajaPuesto(inputIdPuesto.value,
                    inputEmpleadoBaja.value);
    }
}

function traerPantallaInicioPuestos(){ //funcion para mostrar la pantalla de inicio Puestos
    seccionDatosEmpleado.style.display ='none'
    seccionTablaEmpleados.style.display = 'none'
    seccionBuscadorEmpleados.style.display ='none'

    seccionDatosPuesto.style.display ='block'
    seccionTablaPuestos.style.display ='block'
    seccionBuscadoPuestos.style.display ='block'
    
    botonEmpleados.addEventListener('click',traerPantallaInicioEmpleados)
    botonEmpleados.addEventListener('click', deshabilitarCamposAgregarEmpleado)

    botonCancelar.addEventListener('click',cancelar)

    botonAgregar.removeEventListener('click',deshabilitarCamposAgregarEmpleado)
    botonModificar.removeEventListener('click',deshabilitarCamposModificarEmpleado)
    botonBaja.removeEventListener('click',deshabilitarCamposBajaEmpleado)

    botonAgregar.addEventListener('click', deshabilitarCamposAgregarPuesto)
    botonModificar.addEventListener('click', deshabilitarCamposModificarPuesto)
    botonBaja.addEventListener('click', deshabilitarCamposBajaPuesto)

    botonAceptar.removeEventListener('click',altaPuesto);
    botonAceptar.removeEventListener('click',modificarPuesto);
    botonAceptar.removeEventListener('click',darDeBajaPuesto);

    botonAceptar.removeEventListener('click',altaEmpleado);
    botonAceptar.removeEventListener('click',modificaEmpleado);
    botonAceptar.removeEventListener('click',darDeBajaEmpleado);

    botonLupaPuestos.addEventListener('click',consultaPuestos) //llama a la funcion

}

function deshabilitarCamposAgregarPuesto(){
    inputIdPuesto.disabled = false; //campo id puesto
    inputIdPuesto.style.background = 'white';

    inputDescripcion.disabled = false; //campo descrpcion
    inputDescripcion.style.background = 'white';

    inputEmpleadoRegistra.disabled = false; //campo nombre empleado
    inputEmpleadoRegistra.style.background ='white';

    inputEmpleadoBaja.disabled = true; //campo nombre empleado
    inputEmpleadoBaja.style.background = '#c1c1c1';

    botonAgregar.style.boxShadow = '#079cff 1px 1px 20px 1px'; //elimina el estilo de los botones al seleccionarlos
    botonModificar.style.boxShadow = 'none';
    botonBaja.style.boxShadow = 'none';

    botonAceptar.removeEventListener('click',altaEmpleado);
    botonAceptar.removeEventListener('click',modificaEmpleado);
    botonAceptar.removeEventListener('click',darDeBajaEmpleado);

    botonAceptar.removeEventListener('click',darDeBajaPuesto);
    botonAceptar.removeEventListener('click',modificarPuesto);
    botonAceptar.addEventListener('click',altaPuesto); ///llama a la funcion para ejecutar el ajax
}

function deshabilitarCamposModificarPuesto(){
    inputIdPuesto.disabled = false; //campo id puesto
    inputIdPuesto.style.background = 'white';

    inputDescripcion.disabled = false; //campo descripcion
    inputDescripcion.style.background = 'white';

    inputEmpleadoRegistra.disabled = true; //campo nombre empleado
    inputEmpleadoRegistra.style.background ='#c1c1c1';

    inputEmpleadoBaja.disabled = true; //campo nombre empleado
    inputEmpleadoBaja.style.background = '#c1c1c1';

    botonModificar.style.boxShadow = '#888602 1px 1px 20px 1px';
    botonAgregar.style.boxShadow = 'none';
    botonBaja.style.boxShadow = 'none';
    
    botonAceptar.removeEventListener('click',altaEmpleado);
    botonAceptar.removeEventListener('click',modificaEmpleado);
    botonAceptar.removeEventListener('click',darDeBajaEmpleado);


    botonAceptar.removeEventListener('click',darDeBajaPuesto);
    botonAceptar.removeEventListener('click',altaPuesto);
    botonAceptar.addEventListener('click',modificarPuesto); ///llama a la funcion para ejecutar el ajax

}

function deshabilitarCamposBajaPuesto(){
    inputIdPuesto.disabled = false; //campo id puesto
    inputIdPuesto.style.background = 'white';

    inputDescripcion.disabled = true; //campo descripcion 
    inputDescripcion.style.background = '#c1c1c1';

    inputEmpleadoRegistra.disabled = true; //campo nombre empleado
    inputEmpleadoRegistra.style.background = '#c1c1c1';

    inputEmpleadoBaja.disabled = false; //campo nombre empleado
    inputEmpleadoBaja.style.background = 'white';

    botonBaja.style.boxShadow = '#d96d09 1px 1px 20px 1px';
    botonAgregar.style.boxShadow = 'none';
    botonModificar.style.boxShadow = 'none';

    botonAceptar.removeEventListener('click',altaEmpleado);
    botonAceptar.removeEventListener('click',modificaEmpleado);
    botonAceptar.removeEventListener('click',darDeBajaEmpleado);
    
    botonAceptar.removeEventListener('click',altaPuesto);
    botonAceptar.removeEventListener('click',modificarPuesto);
    botonAceptar.addEventListener('click',darDeBajaPuesto); ///llama a la funcion para ejecutar el ajax
}

//FUNCION PARA VALIDAR INGRESO DE SOLO CARACTERES
function SoloLetras(e){
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜabcdefghijklmnñopqrstuvwxyzáéíóü ";

    especiales = [8,13];
    teclaEspecial = false
    for(var i in especiales){
        if(key == especiales[i]){
            teclaEspecial = true;
            break;
        }
    }
    if(letras.indexOf(tecla) == -1 && !teclaEspecial){
       e.preventDefault();
    }
}

//FUNCION PARA VALIDAR INGRESO DE SOLO NUMEROS
function SoloNumeros(evt){
    var code = (evt.which) ? evt.which : evt.keyCode;
    if(code==8) { // backspace.
        return true;
    } else if(code>=48 && code<=57) { // is a number.
        return true;
    } else if (code == 45){ //incluye el signo negativo -
        return true;
    }
    else{ // other keys.
        evt.preventDefault();
    }
}

function cancelar(){ //funcion para limpiar contenido de los inputs
  //seccion empleados
    inputNombre.value = '';
    inputNumEmp.value = '';
    inputApellidoPaterno.value ='';
    inputApellidoMaterno.value ='';
    inputDireccion.value ='';
    inputCP.value = '';
    inputTel.value = '';
    inputCURP.value = '';
    inputNSS.value = '';
    inputPuesto.value = '';
    inputCausaBaja.value = '';

 //seccion puestos
    inputIdPuesto.value = '';
    inputDescripcion.value = '';
    inputEmpleadoRegistra.value = '';
    inputEmpleadoBaja.value = '';
}


function realizarConsultaEmpleado(empleado){ //funcion para consulta la bd para el case 1 del php
    $.ajax({
        url: ('../PHP/case.php'),
        type: 'POST',
        dataType: 'JSON',
        data: {iOpcion: 1, opcion:4, numeroempleado:empleado},
        success: function(data){
            alert('Estatus: ' + data[0].testatus + '\n' + data[0].tmensaje);

            if(empleado !='0'){
        
                if(data[0].testatus == '1'){
                    var tabla_html = '';
                    for(var i = 0; i < data.length; i++){
                        tabla_html += "<td>" + data[i].tnumempleado + "</td>";
                        tabla_html += "<td>" + data[i].tnombre + "</td>";
                        tabla_html += "<td>" + data[i].tappaterno + "</td>";
                        tabla_html += "<td>" + data[i].tapmaterno + "</td>";
                        tabla_html += "<td>" + data[i].tdireccion + "</td>";
                        tabla_html += "<td>" + data[i].tcodigopostal + "</td>";
                        tabla_html += "<td>" + data[i].ttelefono + "</td>";
                        tabla_html += "<td>" + data[i].tcurp + "</td>";
                        tabla_html += "<td>" + data[i].tnss + "</td>";
                        tabla_html += "<td>" + data[i].tdescripcionpuesto + "</td>";
                        tabla_html += "<td> </td>";
                    }
                }
                else{
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    
                }

                $("#info-tabla-empleados").html(tabla_html);  // Insertar la tabla en el elemento con ID "tabla"
            }
            else{
                if(data[0].testatus == '1'){
                    var tabla_html = '';
                    for(var i = 0; i < data.length; i++){
                        tabla_html += "<tr>" +
                        "<td>" + data[i].tnumempleado + "</td>" +
                        "<td>" + data[i].tnombre + "</td>" +
                        "<td>" + data[i].tappaterno + "</td>" +
                        "<td>" + data[i].tapmaterno + "</td>" +
                        "<td>" + data[i].tdireccion + "</td>" +
                        "<td>" + data[i].tcodigopostal + "</td>" +
                        "<td>" + data[i].ttelefono + "</td>" +
                        "<td>" + data[i].tcurp + "</td>" +
                        "<td>" + data[i].tnss + "</td>" +
                        "<td>" + data[i].tdescripcionpuesto + "</td>" +
                        "<td> </td>" +
                        "</tr>";
                        tabla_html += "<tr> </tr>";
                    }
    
                }
                else{
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                }
    
                    $("#info-tabla-empleados").html(tabla_html);  //

            }
        },
        error: function (data){   
            console.log(data)
        }
        });
}

function darAltaEmpleado(empleado,nom,appater,appmatern,direc,cp,tel,cur,ns,pues){ //funcion para consulta la bd para el case 2 del php
    $.ajax({  ///no guarda la infor en bd
        url: ('../PHP/case.php'),
        type: 'POST',
        dataType: 'JSON',
        data: {iOpcion:2, opcion:1, numeroempleado:empleado,nombre:nom,apellidopaterno:appater,apellidomaterno:appmatern,direccion:direc,codigopostal:cp,telefono:tel,curp:cur,nss:ns,puesto:pues}, //manda estos datos al POST del php, el nombre del campo antes del : es como lo recibe el post
        success: function(data){
            alert('Estatus: ' + data[0].testatus + '\n' + data[0].tmensaje); 

            if(data[0].testatus == '1'){

                var tabla_html = '';
                for(var i = 0; i < data.length; i++){
                    tabla_html += "<td>" + inputNumEmp.value + "</td>";
                    tabla_html += "<td>" + inputNombre.value + "</td>";
                    tabla_html += "<td>" + inputApellidoPaterno.value + "</td>";
                    tabla_html += "<td>" + inputApellidoMaterno.value + "</td>";
                    tabla_html += "<td>" + inputDireccion.value + "</td>";
                    tabla_html += "<td>" + inputCP.value + "</td>";
                    tabla_html += "<td>" + inputTel.value + "</td>";
                    tabla_html += "<td>" + inputCURP.value + "</td>";
                    tabla_html += "<td>" + inputNSS.value + "</td>";
                    tabla_html += "<td>" + inputPuesto.value + "</td>";
                    tabla_html += "<td> </td>";
                }
            }
            else{
                tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        

            }
            $("#info-tabla-empleados").html(tabla_html);  //
            
        },
        error: function (data){   
            console.log(data)
        }
    });
}

function modificarDatosEmpleado(empleado,direc,cp,tel,cur,ns,pues){ //funcion para consulta la bd para el case 3 del php
    $.ajax({  ///no guarda la infor en bd
        url: ('../PHP/case.php'),
        type: 'POST',
        dataType: 'JSON',
        data: {iOpcion:3, opcion:2, numeroempleado:empleado,direccion:direc,codigopostal:cp,telefono:tel,curp:cur,nss:ns,puesto:pues}, //manda estos datos al POST del php, el nombre del campo antes del : es como lo recibe el post
        success: function(data){
            alert('Estatus: ' + data[0].testatus + '\n' + data[0].tmensaje); 

            if(data[0].testatus == '1'){

                var tabla_html = '';
                for(var i = 0; i < data.length; i++){
                    tabla_html += "<td>" + inputNumEmp.value + "</td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td>" + inputDireccion.value + "</td>";
                    tabla_html += "<td>" + inputCP.value + "</td>";
                    tabla_html += "<td>" + inputTel.value + "</td>";
                    tabla_html += "<td>" + inputCURP.value + "</td>";
                    tabla_html += "<td>" + inputNSS.value + "</td>";
                    tabla_html += "<td>" + inputPuesto.value + "</td>";
                    tabla_html += "<td> </td>";
                }
            }
            else{
                tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
            }
            $("#info-tabla-empleados").html(tabla_html);  //
            
        },
        error: function (data){   
            console.log(data)
        }
    });
}

function darBajaEmpleado(empleado,causaBajaEmp){ //funcion para consulta la bd para el case 4 del php
    $.ajax({  ///no guarda la infor en bd
        url: ('../PHP/case.php'),
        type: 'POST',
        dataType: 'JSON',
        data: {iOpcion:4, opcion:3, numeroempleado:empleado,causabaja:causaBajaEmp}, //manda estos datos al POST del php, el nombre del campo antes del : es como lo recibe el post
        success: function(data){
            alert('Estatus: ' + data[0].testatus + '\n' + data[0].tmensaje); 

            if(data[0].testatus == '1'){

                var tabla_html = '';
                for(var i = 0; i < data.length; i++){
                    tabla_html += "<td>" + inputNumEmp.value + "</td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td>" + inputCausaBaja.value+ "</td>";
                }
            }
            else{
                tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                       
            }
            $("#info-tabla-empleados").html(tabla_html);  //
            
        },
        error: function (data){   
            console.log(data)
        }
    });
}

function llenarPuestos(){ //trae todos los puestos activos y llena el combo box para elegir puesto
    var selectElement = document.getElementById("puesto");
    selectElement.innerHTML='';
    $.ajax({
        url: ('../PHP/case.php'),
        type: 'POST',
        dataType: 'JSON',
        data: {iOpcion:6, opcion:4, idpuesto:-1},
        success: function(data){
            data.forEach(option => {
                var newOption = document.createElement("option");
                newOption.value = option.tidpuesto;
                newOption.text = option.tdescripcion;
                selectElement.appendChild(newOption);
              });
        },
        error: function (data){   
            console.log(data)
        }
        });
}

//seccion de ajaxs para la clase puestos
function realizarConsultaPuesto(id){ //funcion para consulta la bd para el case 1 del php
    $.ajax({
        url: ('../PHP/case.php'),
        type: 'POST',
        dataType: 'JSON',
        data: {iOpcion:6, opcion:4, idpuesto:id},
        success: function(data){
            alert('Estatus: ' + data[0].testatus + '\n' + data[0].tmensaje);

            if(id !='-1'){
        
                if(data[0].testatus == '1'){
                    var tabla_html = '';
                    for(var i = 0; i < data.length; i++){
                        tabla_html += "<td>" + data[i].tidpuesto + "</td>";
                        tabla_html += "<td>" + data[i].tdescripcion + "</td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                    }
                }
                else{
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                }

                $("#info-tabla-puestos").html(tabla_html);  // Insertar la tabla en el elemento con ID "tabla"
            }
            else{
                if(data[0].testatus == '1'){
                    var tabla_html = '';
                    for(var i = 0; i < data.length; i++){
                        tabla_html += "<tr>" +
                        "<td>" + data[i].tidpuesto + "</td>" +
                        "<td>" + data[i].tdescripcion + "</td>" +
                        "<td> </td>" +
                        "<td> </td>" +
                        "</tr>";
                        tabla_html += "<tr> </tr>"
                    }
    
                }
                else{
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                }
    
                    $("#info-tabla-puestos").html(tabla_html);  //

            }
        },
        error: function (data){   
            console.log(data)
        }
        });
}

function darAltaPuesto(id,descrip,emplealta){ //funcion para consulta la bd para el case 2 del php
    $.ajax({  
        url: ('../PHP/case.php'),
        type: 'POST',
        dataType: 'JSON',
        data: {iOpcion:7, opcion:1, idpuesto:id,descripcion:descrip,empleadoalta:emplealta}, //manda estos datos al POST del php, el nombre del campo antes del : es como lo recibe el post
        success: function(data){
            alert('Estatus: ' + data[0].testatus + '\n' + data[0].tmensaje); 

            if(data[0].testatus == '1'){

                var tabla_html = '';
                for(var i = 0; i < data.length; i++){
                    tabla_html += "<td>" + inputIdPuesto.value + "</td>";
                    tabla_html += "<td>" + inputDescripcion.value + "</td>";
                    tabla_html += "<td>" + inputEmpleadoRegistra.value + "</td>";
                    tabla_html += "<td> </td>";
                }
            }
            else{
                tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        
            }
            $("#info-tabla-puestos").html(tabla_html); 
            
        },
        error: function (data){   
            console.log(data)
        }
    });
}

function modificarDatosPuesto(id,descrip){ //funcion para consulta la bd para el case 8 del php
    $.ajax({  
        url: ('../PHP/case.php'),
        type: 'POST',
        dataType: 'JSON',
        data: {iOpcion:8, opcion:2, idpuesto:id,descripcion:descrip}, //manda estos datos al POST del php, el nombre del campo antes del : es como lo recibe el post
        success: function(data){
            alert('Estatus: ' + data[0].testatus + '\n' + data[0].tmensaje); 

            if(data[0].testatus == '1'){

                var tabla_html = '';
                for(var i = 0; i < data.length; i++){
                    tabla_html += "<td>" + inputIdPuesto.value + "</td>";
                    tabla_html += "<td>" + inputDescripcion.value + "</td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                }
            }
            else{
                tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        
            }
            $("#info-tabla-puestos").html(tabla_html);  //
            
        },
        error: function (data){   
            console.log(data)
        }
    });
}


function darBajaPuesto(id,emplebaja){ //funcion para consulta la bd para el case 9 del php
    $.ajax({  
        url: ('../PHP/case.php'),
        type: 'POST',
        dataType: 'JSON',
        data: {iOpcion:9, opcion:3, idpuesto:id,empleadobaja:emplebaja}, //manda estos datos al POST del php, el nombre del campo antes del : es como lo recibe el post
        success: function(data){
            alert('Estatus: ' + data[0].testatus + '\n' + data[0].tmensaje); 

            if(data[0].testatus == '1'){

                var tabla_html = '';
                for(var i = 0; i < data.length; i++){
                    tabla_html += "<td>" + inputIdPuesto.value + "</td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td> </td>";
                    tabla_html += "<td>" + inputEmpleadoBaja.value + "</td>";
                }
            }
            else{
                tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        tabla_html += "<td> </td>";
                        
            }
            $("#info-tabla-puestos").html(tabla_html);  //
            
        },
        error: function (data){   
            console.log(data)
        }
    });
}

//funciones para deshabilitar el click derecho
function disableIE() {
    if (document.all) {
        return false;
    }
}
function disableNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which==2 || e.which==3) {
            return false;
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = disableNS;
} 
else {
    document.onmouseup = disableNS;
    document.oncontextmenu = disableIE;
}
document.oncontextmenu=new Function("return false");

window.addEventListener('load', traerPantallaInicioEmpleados); //se activa cuando se carga toda la pagina
