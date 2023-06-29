//////Variables de inicio de sesión 
let user, pass, checkInicio;
///////Variables de regsitro
let nombres, apellido, tDocumento, nDocumento, rol, fechaN, registroPassword, registroConfirmarPassword, tYC;
///////Arreglo de usuario
let usr;
console.table(usr);
//////Variables de usuario por defecto para inicio de sesión
const usuario = 2556678;
const contraseña = 'adso2023';
/////Definicion de modales
let registroModal, exampleModal;

registroModal = document.getElementById('modalRegistro');
exampleModal = document.getElementById('exampleModal');

function validacion(){

/////Asiganción de variables para modal inicio
user = document.getElementById('inicioDocumento').value;
pass = document.getElementById('inicioContraseña').value;
checkInicio = document.getElementById('checkInicio');

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
    if( ( user || pass || checkInicio || nombre || apellido || tDocumento || nDocumento || rol || fechaN || registroPassword || registroConfirmarPassword || tYC == null) || (user.length  || pass.length || checkInicio.length  || nombre.length || apellido.length || tDocumento.length || nDocumento.length || rol.length || fechaN.length || registroPassword.length || registroConfirmarPassword.length || tYC.length == 0) || (/^\s+$/.test(user) || /^\s+$/.test(pass) || /^\s+$/.test(checkInicio)  ||  /^\s+$/.test(nombre) || /^\s+$/.test(apellido) || /^\s+$/.test(tDocumento) || /^\s+$/.test(nDocumento) || /^\s+$/.test(rol) || /^\s+$/.test(fechaN) || /^\s+$/.test(registroPassword) || /^\s+$/.test(registroConfirmarPassword) || /^\s+$/.test(tYC)) ) {
    
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

        usr = [nombre, apellido, tDocumento, nDocumento, rol, fechaN, registroPassword, registroConfirmarPassword, tYC];

    // }while(validacion !== false);

    if (usr.length == 9 && registroPassword === registroConfirmarPassword && tYC === 'on'){

        console.table(usr);

        alert("Registro exitoso.")

        $(registroModal).modal('hide'); // cerrar
    
        $(exampleModal).modal('show'); ///Abrir modal
        // window.open("Home.html#exampleModal", "_self");

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

function crearUsuario(usr = [nombre, apellido, tDocumento, nDocumento, rol, fechaN, registroPassword, registroConfirmarPassword, tYC]){


    
}

function iniciarSesion(user, pass) {

    user.required = true;
    pass.required = true;
    checkInicio.required = true;

    // Diego

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
        
            // if (usuario == user && contraseña == pass) {
            //     alert("Inicio de sesión exitoso.")
                
            //     window.open("Home.html", "_self");   
            //     console.log(`Bienvenido ${usuario}.`);

            // } 
            // Diego

                // <!-- ======= Dar la condición a cada variable  ======= -->

                inicios = document.getElementById('inicio');
                tutores = document.getElementById('tutores');
                rutasGuardadas = document.getElementById('rutasGuardadas');
                miMenor = document.getElementById('miMenor');
                imgfondo = document.getElementById('hero');
                registrate = document.getElementById('registrate');
                // welcome = document.getElementById('welcome');

    switch(user){

        case '2556678':
            if(user == '2556678' && pass == 'adso2023'){

                // alert("Bienvenido Tutor");
                //window.onload = function() {
                    // Tu código aquí
                    
                    console.log("Bienvenido Tutor");
            
                    document.querySelector('.container h1').textContent = "WELCOME TUTOR";
                    inicios.textContent   =    'Inicio';
                    tutores.textContent =    'Tutores';
                    rutasGuardadas.textContent  =    'Rutas guardadas';
                    miMenor.textContent    =    'Menor a cargo';
                
                    registrate.remove('registrate');
                
            
                    console.log(user, pass);
                  //};
                    window.open("Home.html", "_self");
            }
        break;
        case '2':
            // <!-- ======= Ingreso 2 - MENOR ======= -->
            if(user == '2' && pass == '22222222'){
            
                // alert("Bienvenido Adolecente");
    
                
                console.log("Bienvenido Menor");
                document.querySelector('.container h1').textContent = "WELCOME Adolecente";
    
    
                // Cambiar el menú para cada página

                //const ruta =  'Ruta activa';
    
                inicios.textContent   =  'Ruta activa';
                tutores.textContent =    'Mensajes';
                rutasGuardadas.textContent  =    'Rutas';
                miMenor.textContent    =    'Mi ruta activa';
    
                // Cambiar el redirigimiento de las páginas
    
                inicios.href   =    '';
                tutores.href = 'https://messages.google.com/intl/es-419/';
                rutasGuardadas.href = 'https://www.waze.com/es-419/live-map/';
                miMenor.href = 'https://eldiariony.com/2014/10/30/ensena-a-los-pequenos-a-cuidarse-en-la-calle/';
    
    
                // Colocar una simulación de ruta activa, reemplazando imagen de presentación
    
                //  welcome.innerHtml(<iframe src="https://www.google.com/maps/dir/Campanario+Centro+Comercial,+Campanario,+Carrera+9,+Comuna+1,+Popay%C3%A1n,+Cauca/SENA,+Pan-American+Highway,+Popay%C3%A1n,+Cauca/@2.4707615,-76.5989052,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x8e30039d7270d777:0xa749ba51fed22c24!2m2!1d-76.5937826!2d2.459386!1m5!1m1!1s0x8e300410eb607c65:0x614545787e90bea6!2m2!1d-76.56227!2d2.4827633?entry=ttu" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>);
    
    
    
    
    
                    // <!-- ======= Cambio de imagen de fondo ======= -->
                imgfondo.style.backgroundImage = "url('assets/img/menor2.jpg')";
        
        
                // <!-- ======= Quiutar botón de registro ======= -->
        
                registrate.remove('registrate');
                    
        
                //    //CAMBIAR COLOR
        
                //     const heading = document.querySelector('h1');
                //     heading.style.backgroundColor = 'red';
        
                //     //CAMBIAR IMG
        
                //     const imagen = document.querySelector('.card img');
                //     imagen.src = 'img/logo.jpg';
        
                console.log(user, pass);    
                window.open("Home.html", "_self");
    
            }

        break; 
        case '3':
            // <!-- ======= Ingreso 3 - CONFIAPP ======= -->


        if(user == '3' && pass == '33333333'){


            
            alert("Bienvenido a ConfiApp");

            document.querySelector('.container h1').textContent = "WELCOME A CONFIAPP";


            // Cambiar el menú para cada página

            tutores.textContent = 'Nosotros';
            rutasGuardadas.textContent = 'Tutores';
            miMenor.textContent = 'Foros';


            // Cambiar el redirigimiento de las páginas

            tutores.href = '';
            rutasGuardadas.href = '';
            miMenor.href = '';

            // <!-- ======= Cambio de imagen de fondo ======= -->

            imgfondo.style.backgroundImage = "url('assets/img/flia1.jpg')";


            // <!-- ======= Cambio contenido de Registra al menor por ======= -->

            registrate.textContent = 'REGISTRATE';


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

        break; 
    }
 
    
}
