/////Validar no nulo, tamaño mayor a 0 y espacios en blanco del modal inicio
let user = document.getElementById("inicioDocumento").value;
let pass = document.getElementById("inicioContraseña").value;

function validacion(){

    if( (user == null || user.length == 0 || /^\s+$/.test(user)) || (pass == null || pass.length == 0 || /^\s+$/.test(pass))) {
    
        console.log(user);
        
        console.log(pass);

        return false;
  
    }else{
        
    }
}

