////Intentamos solucionar los errores y no fallamos en el intento, 
///pero siguen sin poderse ver los cambios con DOM, mil disculpas Inge.
///Función registro funcionando de forma estática.
///Iniciar ejecutando modal de inicio con argumentos validos o modal de registro directamente, luego 
////No hacer formulario de regitro que se abre despues de ingresar argumentos invalidos en inicio para verificar funcionamiento del modal Registro en consola

///Usuario tutor: usr = 2556678, pwd= adso2023
///Usuario menor: usr = 2, pwd= 2222222222
///Usuario admin: usr = 3, pwd= 3333333333
///Usuario registro: automático

///Script por: Diego Fernando Bolaños - Rubén Darío Velasco.
///Plantilla de BootStrap inicial: Juan David Cobo.
///ADSO - Ficha: 2556678.
///SENA 2023.
//////Variables de inicio de sesión 
let user, pass, checkInicio;
///////Variables de regsitro
let nombre, apellido, tDocumento, nDocumento, rol, fechaN, registroPassword, registroConfirmarPassword, tYC;
///////Arreglo de usuario
let usr;
// const usr = {
//     t_identificacion: tDocumento,
//     n_identificacion: nDocumento,
//     nombres: nombre,
//     apellidos: apellido,
//     roles: rol,
//     edad: fechaN,
//     contraseña: registroPassword,
//     ccontraseña: registroConfirmarPassword,
//     terminos: tYC,
// }
console.table(usr);
//////Variables de usuario por defecto para inicio de sesión
const usuario = 2556678;
const contraseña = 'adso2023';
/////Definicion de modales
let registroModal, exampleModal;

registroModal = document.getElementById('modalRegistro');
exampleModal = document.getElementById('exampleModal');

// Aqui trabajaremos los cambios de los 3 perfiles con ( prompt IF / ELSE ).


            // <!-- ======= Ingreso de número con prompt ======= -->

            // let user, pass;
            let inicios;
            let tutores ;
            let rutasGuardadas ;
            let miMenor ;
            let imgfondo ;
            let registrate ;
            // let welcome;

function validacion(){
    // let user = document.getElementById('inicioDocumento').value;
    // let pass = document.getElementById('inicioContraseña').value;
    // let checkInicio = document.getElementById('checkInicio').checked;

    // let nombre = document.getElementById('nombre').value;
    // let apellido = document.getElementById('apellido').value;
    // let tDocumento = document.getElementById('tDocumento').value;
    // let nDocumento = document.getElementById('nDocumento').value;
    // let rol = document.getElementById('rol').value;
    // let fechaN = document.getElementById('fechaN').value;
    // let registroPassword = document.getElementById('registroPassword').value;
    // let registroConfirmarPassword = document.getElementById('registroConfirmarPassword').value;
    // let tYC = document.getElementById('tYC').value;

///Asiganción de variables para modal inicio
user = document.getElementById('inicioDocumento').value;
pass = document.getElementById('inicioContraseña').value;
checkInicio = document.getElementById('checkInicio');

///////Asiganción de variables para modal Registro
nombre = document.getElementById('nombre').value;
apellido = document.getElementById('apellido').value;
tDocumento = document.getElementById('tDocumento').value;
nDocumento = document.getElementById('nDocumento').value;
rol = document.getElementById('rol').value;
fechaN = document.getElementById('fechaN').value;
registroPassword = document.getElementById('registroPassword').value;
registroConfirmarPassword = document.getElementById('registroConfirmarPassword').value;
tYC = document.getElementById('tYC').value;

    // document.getElementById('inicioDocumento').value = user;
    // document.getElementById('inicioContraseña').value = pass;
    // document.getElementById('checkInicio').checked = checkInicio;

    // document.getElementById('nombre').value = nombre;
    // document.getElementById('apellido').value = apellido;
    // document.getElementById('tDocumento').value = tDocumento;
    // document.getElementById('nDocumento').value = nDocumento;
    // document.getElementById('rol').value = rol;
    // document.getElementById('fechaN').value = fechaN;
    // document.getElementById('registroPassword').value = registroPassword;
    // document.getElementById('registroConfirmarPassword').value = registroConfirmarPassword;
    // document.getElementById('tYC').value = tYC;

//// || (pass == null || pass.length == 0 || /^\s+$/.test(pass))

/////Validar no nulo, tamaño mayor a 0 y espacios en blanco del modal inicio

// if( ( user || pass || checkInicio || nombre || apellido || tDocumento || nDocumento || rol || fechaN || registroPassword || registroConfirmarPassword || tYC === null) || (user.length  || pass.length || checkInicio.length  || nombre.length || apellido.length || tDocumento.length || nDocumento.length || rol.length || fechaN.length || registroPassword.length || registroConfirmarPassword.length || tYC.length === 0) || (/^\s+$/.test(user) || /^\s+$/.test(pass) || /^\s+$/.test(checkInicio)  ||  /^\s+$/.test(nombre) || /^\s+$/.test(apellido) || /^\s+$/.test(tDocumento) || /^\s+$/.test(nDocumento) || /^\s+$/.test(rol) || /^\s+$/.test(fechaN) || /^\s+$/.test(registroPassword) || /^\s+$/.test(registroConfirmarPassword) || /^\s+$/.test(tYC)) )

if (
    user === null ||
    pass === null ||
    nombre === null ||
    apellido === null ||
    tDocumento === null ||
    nDocumento === null ||
    rol === null ||
    fechaN === null ||
    registroPassword === null ||
    registroConfirmarPassword === null ||
    tYC === null ||
    user.length === 0 ||
    pass.length === 0 ||
    nombre.length === 0 ||
    apellido.length === 0 ||
    tDocumento.length === 0 ||
    nDocumento.length === 0 ||
    rol.length === 0 ||
    fechaN.length === 0 ||
    registroPassword.length === 0 ||
    registroConfirmarPassword.length === 0 ||
    tYC.length === 0 ||
    /^\s+$/.test(user) ||
    /^\s+$/.test(pass) ||
    /^\s+$/.test(nombre) ||
    /^\s+$/.test(apellido) ||
    /^\s+$/.test(tDocumento) ||
    /^\s+$/.test(nDocumento) ||
    /^\s+$/.test(rol) ||
    /^\s+$/.test(fechaN) ||
    /^\s+$/.test(registroPassword) ||
    /^\s+$/.test(registroConfirmarPassword) ||
    /^\s+$/.test(tYC)
  )

// if (!user || !pass || !checkInicio || !nombre || !apellido || !tDocumento || !nDocumento || !rol || !fechaN || !registroPassword || !registroConfirmarPassword || !tYC ||
//     user.length === 0 || pass.length === 0 || checkInicio.length === 0 || nombre.length === 0 || apellido.length === 0 || tDocumento.length === 0 || nDocumento.length === 0 ||
//     rol.length === 0 || fechaN.length === 0 || registroPassword.length === 0 || registroConfirmarPassword.length === 0 || tYC.length === 0 ||
//     /^\s+$/.test(user) || /^\s+$/.test(pass) || /^\s+$/.test(checkInicio) || /^\s+$/.test(nombre) || /^\s+$/.test(apellido) || /^\s+$/.test(tDocumento) ||
//     /^\s+$/.test(nDocumento) || /^\s+$/.test(rol) || /^\s+$/.test(fechaN) || /^\s+$/.test(registroPassword) || /^\s+$/.test(registroConfirmarPassword) || /^\s+$/.test(tYC)) 
{
    
        console.log(user);
        console.log(pass);

        console.log(nombre);
        console.log(apellido);
        console.log(tDocumento);
        console.log(nDocumento);
        console.log(rol);
        console.log(fechaN);
        console.log(registroPassword);
        console.log(registroConfirmarPassword);
        console.log(tYC);

        return false;
  
    }else{
        alert("Todo Ok.");

        iniciarSesion(user, pass);

        registro(nombre, apellido, tDocumento, nDocumento, rol, fechaN, registroPassword, registroConfirmarPassword, tYC);

        return true;
    }
}

function registro(nombre, apellido, tDocumento, nDocumento, rol, fechaN, registroPassword, registroConfirmarPassword, tYC){

    nombre.required = true;
    apellido.required = true;
    tDocumento.required = true;
    nDocumento.required = true;
    rol.required = true;
    fechaN.required = true;
    registroPassword.required = true;
    registroConfirmarPassword.required = true;
    tYC.required = true;

    // do{

        // usr = {
        //     t_identificacion: tDocumento,
        //     n_identificacion: nDocumento,
        //     nombres: nombre,
        //     apellidos: apellido,
        //     roles: rol,
        //     edad: fechaN,
        //     contraseña: registroPassword,
        //     ccontraseña: registroConfirmarPassword,
        //     terminos: tYC,
        // }

    // }while(validacion !== false);
    
    ///Arreglo de Usuarios
    usr = [nombre, apellido, tDocumento, nDocumento, rol, fechaN, registroPassword, registroConfirmarPassword, tYC];

    // usr = [nombre, apellido, tDocumento, nDocumento, rol, fechaN, registroPassword, registroConfirmarPassword, tYC];

    if (usr.length == 9 && registroPassword === registroConfirmarPassword && tYC === 'on'){

        console.table(usr);

        alert("Registro exitoso.")

        $(registroModal).modal('hide'); // cerrar
    
        $(exampleModal).modal('show'); ///Abrir modal
        // window.open("Home.html#exampleModal", "_self");
        iniciarSesion(nDocumento, registroPassword);

        // registroModal.modal('hide'); //Ocualtar modal
        // exampleModal.modal('show');  //Mostrar Modal

        // $('#exampleModal').modal('show'); // abrir
        // registroModal.modal('hide');
        // exampleModal.modal('show');

    }else{

        console.log(nombre);
        console.log(apellido);
        console.log(tDocumento);
        console.log(nDocumento);
        console.log(rol);
        console.log(fechaN);
        console.log(registroPassword);
        console.log(registroConfirmarPassword);
        console.log(tYC);

    }

    

}

// function crearUsuario(usr = [nombre, apellido, tDocumento, nDocumento, rol, fechaN, registroPassword, registroConfirmarPassword, tYC]){


    
// }

function iniciarSesion(user, pass) {

    user.required = true;
    pass.required = true;
    // checkInicio.required = true;

                    // <!-- ======= Dar la condición a cada variable  ======= -->

                    // inicios = document.querySelector('.inicio');
                    // tutores = document.querySelector('.tutores');
                    // rutasGuardadas = document.querySelector('.rutasGuardadas');
                    // miMenor = document.querySelector('.miMenor');
                    // imgfondo = document.querySelector('hero');
                    // registrate = document.querySelector('.registrate');
                    // welcome = document.getElementById('welcome');    
    

    // Diego
        
            // if (usuario == user && contraseña == pass) {
            //     alert("Inicio de sesión exitoso.")
                
            //     window.open("Home.html", "_self");   
            //     console.log(`Bienvenido ${usuario}.`);

            // } 
            // Diego

    switch(user){

        case '2556678':
            if(pass == 'adso2023'){

                alert("Bienvenido Tutor");
                //window.onload = function() {
                    // Tu código aquí
                    
                    console.log("Bienvenido Tutor");
                    document.querySelector('.container h1').textContent = "WELCOME TUTOR";
                    $(inicios).textContent   =    'Inicio';
                    $(tutores).textContent =    'Tutores';
                    $(rutasGuardadas).textContent  =    'Rutas guardadas';
                    $(miMenor).textContent    =    'Menor a cargo';
                
                    $(registrate).remove('registrate');
                
            
                    console.log(user, pass);
                  //};
                    window.open("Home.html", "_self");
            }else{
                alert("Contraseña Incorrecta");
            }
        break;
        case '2':
            // <!-- ======= Ingreso 2 - MENOR ======= -->
            if(pass == '2222222222'){
            
                alert("Bienvenido Adolecente");
    
                
                console.log("Bienvenido Menor");
                document.querySelector('.container h1').textContent = "WELCOME Adolecente";
    

                // Cambiar el menú para cada página
                window.open("Home.html", "_self");
                //const ruta =  'Ruta activa';
    
                $(inicios).textContent   =  'Ruta activa';
                $(tutores).textContent =    'Mensajes';
                $(rutasGuardadas).textContent  =    'Rutas';
                $(miMenor).textContent    =    'Mi ruta activa';
    
                // Cambiar el redirigimiento de las páginas
    
                $(inicios).href   =    '';
                $(tutores).href = 'https://messages.google.com/intl/es-419/';
                $(rutasGuardadas).href = 'https://www.waze.com/es-419/live-map/';
                $(miMenor).href = 'https://eldiariony.com/2014/10/30/ensena-a-los-pequenos-a-cuidarse-en-la-calle/';
    
    
                // Colocar una simulación de ruta activa, reemplazando imagen de presentación
    
                //  welcome.innerHtml(<iframe src="https://www.google.com/maps/dir/Campanario+Centro+Comercial,+Campanario,+Carrera+9,+Comuna+1,+Popay%C3%A1n,+Cauca/SENA,+Pan-American+Highway,+Popay%C3%A1n,+Cauca/@2.4707615,-76.5989052,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x8e30039d7270d777:0xa749ba51fed22c24!2m2!1d-76.5937826!2d2.459386!1m5!1m1!1s0x8e300410eb607c65:0x614545787e90bea6!2m2!1d-76.56227!2d2.4827633?entry=ttu" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>);
    
    
    
    
    
                    // <!-- ======= Cambio de imagen de fondo ======= -->
                $(imgfondo).css('backgroundImage', 'url("assets/img/Familia.jpg")');
        
        
                // <!-- ======= Quiutar botón de registro ======= -->
        
                $(registrate).remove('registrate');
                    
        
                //    //CAMBIAR COLOR
        
                //     const heading = document.querySelector('h1');
                //     heading.style.backgroundColor = 'red';
        
                //     //CAMBIAR IMG
        
                //     const imagen = document.querySelector('.card img');
                //     imagen.src = 'img/logo.jpg';
        
                console.log(user, pass);    
                
    
            }else{
                alert("Contraseña Incorrecta");
            }

        break; 
        case '3':
            // <!-- ======= Ingreso 3 - CONFIAPP ======= -->


        if(pass == '3333333333'){


            
            alert("Bienvenido Administrador a ConfiApp");

            document.querySelector('.container h1').textContent = "WELCOME A CONFIAPP";


            // Cambiar el menú para cada página

            $(tutores).textContent = 'Nosotros';
            $(rutasGuardadas).textContent = 'Tutores';
            $(miMenor).textContent = 'Foros';


            // Cambiar el redirigimiento de las páginas

            $(tutores).href = '';
            $(rutasGuardadas).href = '';
            $(miMenor).href = '';

            // <!-- ======= Cambio de imagen de fondo ======= -->

            $(imgfondo).css('backgroundImage', 'url("assets/img/familia1.jpg")');


            // <!-- ======= Cambio contenido de Registra al menor por ======= -->

            $(registrate).textContent = 'REGISTRATE';


                //CAMBIAR COLOR
                // const heading = document.querySelector('h1');
                // heading.style.backgroundColor = 'orange';

            //CAMBIAR IMG
            //    const imagen = document.querySelector('.card img');
            //    imagen.src = 'img/lupa.jpg';

            console.log(user, pass);    
            window.open("Home.html", "_self");
        }
        break;  
        case nDocumento:
            // <!-- ======= Ingreso 4 - CONFIAPP ======= -->


        if(pass == registroPassword){


            
            alert("Bienvenido usuario nuevo a ConfiApp");

            document.querySelector('.container h1').textContent = "WELCOME A CONFIAPP";


            // Cambiar el menú para cada página

            $(tutores).textContent = 'Nosotros';
            $(rutasGuardadas).textContent = 'Tutores';
            $(miMenor).textContent = 'Foros';


            // Cambiar el redirigimiento de las páginas

            $(tutores).href = '';
            $(rutasGuardadas).href = '';
            $(miMenor).href = '';

            // <!-- ======= Cambio de imagen de fondo ======= -->

            $(imgfondo).css('backgroundImage', 'url("assets/img/familia1.jpg")');


            // <!-- ======= Cambio contenido de Registra al menor por ======= -->

            $(registrate).textContent = 'REGISTRATE';


                //CAMBIAR COLOR
                // const heading = document.querySelector('h1');
                // heading.style.backgroundColor = 'orange';

            //CAMBIAR IMG
            //    const imagen = document.querySelector('.card img');
            //    imagen.src = 'img/lupa.jpg';

            console.log(user, pass);    
            window.open("Home.html", "_self");
        }
        break;  
        default:
            
            if(pass.length >= 8){
                alert("Usuario o contraseña inválido");
            
                $(exampleModal).modal('hide'); // cerrar
            
                $(registroModal).modal('show'); ///Abrir modal

            //     exampleModal.addEventListener("hide.bs.modal", function () {
            //     // Aquí va el código a ejecutar cuando se dispara el evento de cerrar la ventana modal
            //         // exampleModal.remove();
            //         registroModal.modal('show');

            // });
                // exampleModal.modal("hide");
                // registroModal.modal("show");

                console.log(user);
                console.log(pass);

            }
            
        break; 
    }
 
    
}
// });
