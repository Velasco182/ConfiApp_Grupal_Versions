// <!-- ======= Aqui trabajaremos los cambios de los 3 perfiles con ( Switch ) ======= -->


// <!-- ======= Inicializar las variables que se van a usar  ======= -->



// 


let inicio;
let tutores ;
let rutasGuardadas ;
let miMenor ;
let imgfondo ;
let registrate ;

inicio = document.getElementById('inicio');
tutores = document.getElementById('tutores');
rutasGuardadas = document.getElementById('rutasGuardadas');
miMenor = document.getElementById('miMenor');
imgfondo = document.getElementById('hero');
registrate = document.getElementById('registrate');

let user, pass;

function comenzar(user){ 

user = document.getElementById('inicioDocumento').value;
pass = document.getElementById('inicioContraseña').value;
user.toString();
console.log(user);
console.log(pass);

switch(user){
    case "2556678":

        // alert("Bienvenido Tutor");
        console.log("Bienvenido Tutor")
        document.querySelector('.container h1').textContent = "WELCOME TUTOR";
        inicio.textContent   =    'Inicio';
        tutores.textContent =    'Tutores';
        rutasGuardadas.textContent  =    'Rutas guardadas';
        miMenor.textContent    =    'Menor a cargo';
    
        registrate.remove('registrate');

    
        break;
        
    case "2":
        // alert("Bienvenido Adolecente");
        console.log("Bienvenido Menor")
        document.querySelector('.container h1').textContent = "WELCOME Adolecente";
        inicio.textContent   =    'MENOR';
        tutores.textContent =    'MENOR';
        rutasGuardadas.textContent  =    'MENOR';
        miMenor.textContent    =    'MENOR';
    
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
    
        break;
        
    case "3":

        alert("Bienvenido a ConfiApp");
        document.querySelector('.container h1').textContent = "WELCOME A CONFIAPP";
        tutores.textContent = 'Nosotros';
        tutores.href = 'nosotros.html';
    
        rutasGuardadas.textContent = 'Tutores';
        rutasGuardadas.href = 'tutores.html';
    
        miMenor.textContent = 'Foros';
        miMenor.href = 'foros.html';
    
       // <!-- ======= Cambio de imagen de fondo ======= -->
    
       imgfondo.style.backgroundImage = "url('assets/img/flia1.jpg')";
    
    
       // <!-- ======= Cambio contenido de Registra al menor por ======= -->
    
       registrate.textContent = 'REGISTRATE';

    
        //CAMBIAR COLOR
        // const heading = document.querySelector('h1');
        // heading.style.backgroundColor = 'orange';
    
       //CAMBIAR IMG
       const imagen = document.querySelector('.card img');
       imagen.src = 'img/lupa.jpg';



        break;

    default:
        break;
}
}