// Aqui trabajaremos los cambios de los 3 perfiles con ( prompt IF / ELSE ).


// <!-- ======= Ingreso de número con prompt ======= -->
let user, pass;
let inicio;
let tutores ;
let rutasGuardadas ;
let miMenor ;
let imgfondo ;
let registrate ;
// let welcome;

function comenzar (user, inicio, tutores, rutasGuardadas, miMenor, imgfondo, registrate){ 
user = document.getElementById('inicioDocumento').value;
pass = document.getElementById('inicioContraseña').value;

console.log(user, pass);    


// if (user < 1 || ingreso >3){
//     alert("Tu número no cumple el rango de 1 a 3");
// }

// if (ingreso !== parseInt){
//     alert("Necesito un número entero, no letras");
// }

// <!-- ======= Ingreso 1 - TUTOR ======= -->


// -------------------------------------------------------------------------------------------------------- //

// <!-- ======= Dar la condición a cada variable  ======= -->

inicio = document.getElementById('inicio');
tutores = document.getElementById('tutores');
rutasGuardadas = document.getElementById('rutasGuardadas');
miMenor = document.getElementById('miMenor');
imgfondo = document.getElementById('hero');
registrate = document.getElementById('registrate');
welcome = document.getElementById('welcome');


   if(user == 2556678 && pass == 'adso2023'){

       // alert("Bienvenido Tutor");

       window.open("Home.html", "_self");
       console.log("Bienvenido Tutor");

       document.querySelector('.container h1').textContent = "WELCOME TUTOR";
       inicio.textContent   =    'Inicio';
       tutores.textContent =    'Tutores';
       rutasGuardadas.textContent  =    'Rutas guardadas';
       miMenor.textContent    =    'Menor a cargo';
   
       registrate.remove('registrate');
   

       console.log(user, pass);    

}

// <!-- ======= Ingreso 2 - MENOR ======= -->


   else if(user == 2 && pass == '2'){
    
    // alert("Bienvenido Adolecente");

    window.open("Home.html", "_self");
    console.log("Bienvenido Menor");

    document.querySelector('.container h1').textContent = "WELCOME Adolecente";


     // Cambiar el menú para cada página

    inicio.textContent   =    'Ruta activa';
    tutores.textContent =    'Mensajes';
    rutasGuardadas.textContent  =    'Rutas';
    miMenor.textContent    =    'Mi ruta activa';

    // Cambiar el redirigimiento de las páginas

    inicio.href   =    '';
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


}

// <!-- ======= Ingreso 3 - CONFIAPP ======= -->


else if(user == 3 && pass == '3'){


    window.open("Home.html", "_self");
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

}
}