///// Validar no nulo, tamaño mayor a 0 y espacios en blanco del modal inicio
const usuario = 2556678;
const contraseña = "adso2023";


function validacion(){

let user = document.getElementById('inicioDocumento').value;
let pass = document.getElementById('inicioContraseña').value;

//// || (pass == null || pass.length == 0 || /^\s+$/.test(pass))

    if(user || pass === null || user.length  || pass.length === 0 || /^\s+$/.test(user) || /^\s+$/.test(pass)) {
    
        console.log(user);
        
        console.log(pass);

        return (false);
  
    }else{
        alert("Todo Ok.");
        inicio(user, pass);
        return true;
    }
}

function inicio(user, pass) {

    if (usuario === user && contraseña === pass) {
      alert("Inicio de sesión exitoso.")
      console.log(`Bienvenido ${usuario}.`);
      window.open("Home.html", "_self");   
  
    } else {
      alert("Usuario o contraseña inválido");
    }
}
