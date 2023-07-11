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




