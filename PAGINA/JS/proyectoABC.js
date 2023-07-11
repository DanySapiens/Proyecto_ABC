//botones
const botonEmpleados = document.getElementById('boton-empleados')
const botonPuestos = document.getElementById('boton-puestos')
const botonAgregar = document.getElementById('boton-agregar')
const botonModificar = document.getElementById('boton-modificar')
const botonBaja = document.getElementById('boton-baja')
const botonAceptar = document.getElementById('boton-aceptar')
const botonCancelar = document.getElementById('boton-cancelar')

//secciones
const seccionDatosEmpleado = document.getElementById('ingresar-datos-empleado')
const seccionDatosPuesto = document.getElementById('ingresar-datos-puesto')

//Informacion del empleado y puesto
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

//llama a la funcion paa validar el ingreso de letras en estos campos
inputNombre.addEventListener('keypress',SoloLetras)
inputApellidoMaterno.addEventListener('keypress',SoloLetras)
inputApellidoPaterno.addEventListener('keypress',SoloLetras)
inputApellidoPaterno.addEventListener('keypress',SoloLetras)
inputApellidoPaterno.addEventListener('keypress',SoloLetras)
inputDescripcion.addEventListener('keypress',SoloLetras)

//ingreso de letras en estos campos
inputNumEmp.addEventListener('keypress',SoloNumeros)
inputCP.addEventListener('keypress',SoloNumeros)
inputTel.addEventListener('keypress',SoloNumeros)
inputNSS.addEventListener('keypress',SoloNumeros)
inputIdPuesto.addEventListener('keypress',SoloNumeros)
inputEmpleadoRegistra.addEventListener('keypress',SoloNumeros)
inputEmpleadoBaja.addEventListener('keypress',SoloNumeros)


function inicioEmpleados(){
    seccionDatosEmpleado.style.display ='block';
    seccionDatosPuesto.style.display ='none';

    botonPuestos.addEventListener('click',inicioPuestos)
    botonPuestos.addEventListener('click',agregarPuesto)
    botonAgregar.addEventListener('click',agregarEmpleado)
    botonModificar.addEventListener('click',modificarEmpleado)
    botonBaja.addEventListener('click',bajaEmpleado)

    botonCancelar.addEventListener('click',cancelar)

    inputCausaBaja.disabled = true; //campo causa baja
    inputCausaBaja.style.background = '#c1c1c1';
}

function inicioPuestos(){
    seccionDatosEmpleado.style.display ='none'
    seccionDatosPuesto.style.display ='block'

    botonEmpleados.addEventListener('click',inicioEmpleados)
    botonEmpleados.addEventListener('click', agregarEmpleado)

    botonCancelar.addEventListener('click',cancelar)
    botonAgregar.addEventListener('click',agregarPuesto)
    botonModificar.addEventListener('click',modificarPuesto)
    botonBaja.addEventListener('click',bajaPuesto)
}

function agregarEmpleado(){
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
}

function modificarEmpleado(){
    inputNumEmp.disabled = false; //campo numero empleado
    inputNumEmp.style.background = 'white';

    inputNombre.disabled = true; //campo nombre
    inputNombre.style.background = '#c1c1c1';

    inputApellidoPaterno.disabled = true; //campo apellido paterno
    inputApellidoPaterno.style.background = '#c1c1c1';

    inputApellidoMaterno.disabled = true; //campo apellido materno
    inputApellidoMaterno.style.background = '#c1c1c1';

    inputCausaBaja.disabled = true; //campo apellido paterno
    inputCausaBaja.style.background = '#c1c1c1';
}


function bajaEmpleado(){
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

}

function agregarPuesto(){
    inputIdPuesto.disabled = false; //campo id puesto
    inputIdPuesto.style.background = 'white';

    inputDescripcion.disabled = false; //campo descrpcion
    inputDescripcion.style.background = 'white';

    inputEmpleadoRegistra.disabled = false; //campo nombre empleado
    inputEmpleadoRegistra.style.background ='white';

    inputEmpleadoBaja.disabled = true; //campo nombre empleado
    inputEmpleadoBaja.style.background = '#c1c1c1';
}

function modificarPuesto(){
    inputIdPuesto.disabled = false; //campo id puesto
    inputIdPuesto.style.background = 'white';

    inputDescripcion.disabled = false; //campo descripcion
    inputDescripcion.style.background = 'white';

    inputEmpleadoRegistra.disabled = true; //campo nombre empleado
    inputEmpleadoRegistra.style.background ='#c1c1c1';

    inputEmpleadoBaja.disabled = true; //campo nombre empleado
    inputEmpleadoBaja.style.background = '#c1c1c1';
}

function bajaPuesto(){
    inputIdPuesto.disabled = false; //campo id puesto
    inputIdPuesto.style.background = 'white';

    inputDescripcion.disabled = true; //campo descripcion 
    inputDescripcion.style.background = '#c1c1c1';

    inputEmpleadoRegistra.disabled = true; //campo nombre empleado
    inputEmpleadoRegistra.style.background = '#c1c1c1';

    inputEmpleadoBaja.disabled = false; //campo nombre empleado
    inputEmpleadoBaja.style.background = 'white';
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
    } else{ // other keys.
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

window.addEventListener('load', inicioEmpleados); //se activa cuando se carga toda la pagina





