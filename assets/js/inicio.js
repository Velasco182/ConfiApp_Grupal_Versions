//////Variables de inicio de sesión 
let user, pass;
///////Variables de regsitro
let nombres, apellido, tDocumento, nDocumento, rol, fechaN, registroPassword, registroConfirmarPassword, tYC;
///////Arreglo de usuario
let usr;

//////Variables de usuario por defecto para inicio de sesión
const usuario = 2556678;
const contraseña = 'adso2023';

function validacion(){

/////Asiganción de variables para modal inicio
user = document.getElementById('inicioDocumento').value;
pass = document.getElementById('inicioContraseña').value;

/////////Asiganción de variables para modal Registro
nombre = document.getElementById('nombre').value;
apellido = document.getElementById('apellido').value;
tDocumento = document.getElementById('tDocumento').value;
nDocumento = document.getElementById('nDocumento').value;
rol = document.getElementById('rol').value;
fechaN = document.getElementById('fechaN').value;
registroPassword = document.getElementById('registroPassword').value;
registroConfirmarPassword = document.getElementById('registroConfirmarPassword').value;
tYC = document.getElementById('tYC').value;

//// || (pass == null || pass.length == 0 || /^\s+$/.test(pass))

/////Validar no nulo, tamaño mayor a 0 y espacios en blanco del modal inicio
    if( (user || pass || nombre || apellido || tDocumento || nDocumento || rol || fechaN || registroPassword || registroConfirmarPassword || tYC == null) || (user.length  || pass.length || nombre.length || apellido.length || tDocumento.length || nDocumento.length || rol.length || fechaN.length || registroPassword.length || registroConfirmarPassword.length || tYC.length == 0) || (/^\s+$/.test(user) || /^\s+$/.test(pass) || /^\s+$/.test(nombre) || /^\s+$/.test(apellido) || /^\s+$/.test(tDocumento) || /^\s+$/.test(nDocumento) || /^\s+$/.test(rol) || /^\s+$/.test(fechaN) || /^\s+$/.test(registroPassword) || /^\s+$/.test(registroConfirmarPassword) || /^\s+$/.test(tYC) )) {
    
        console.log(user);
        
        console.log(pass);

        return false;
  
    }else{
        alert("Todo Ok.");
        inicio(user, pass);
        registro(nombre, apellido, tDocumento, nDocumento, rol, fechaN, registroPassword, registroConfirmarPassword, tYC);
        return true;
    }
}

function registro(nombre, apellido, tDocumento, nDocumento, rol, fechaN, registroPassword, registroConfirmarPassword, tYC){

    do{

        usr = [nombre, apellido, tDocumento, nDocumento, rol, fechaN, registroPassword, registroConfirmarPassword, tYC];

    }while(validacion !== false);

}

function crearUsuario(usr){
    
}

function inicio(user, pass) {
  
    if (usuario == user && contraseña == pass) {
        alert("Inicio de sesión exitoso.")
        
        window.open("Home.html", "_self");   
        console.log(`Bienvenido ${usuario}.`);

    } else {
      alert("Usuario o contraseña inválido");
        console.log(user);
        console.log(pass);
    }
}
