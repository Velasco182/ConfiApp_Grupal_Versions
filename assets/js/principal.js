// Aqui trabajaremos los cambios de los 3 perfiles con ( prompt IF / ELSE ).


// <!-- ======= Ingreso de número con prompt ======= -->

let ingreso = parseInt(prompt("DIGITA UN NÚMERO DEL 1 AL 3"));

if (ingreso < 1 || ingreso >3){
    alert("Tu número no cumple el rango de 1 a 3");
}

// if (ingreso !== parseInt){
//     alert("Necesito un número entero, no letras");
// }

// <!-- ======= Ingreso 1 - TUTOR ======= -->

if(ingreso == 1){

    
    document.querySelector('.').textContent = "WELCOME TUTOR";
    console.log (navegacion.children[0].textContent = '');
    console.log (navegacion.children[1].textContent = 'Menores');
    console.log (navegacion.children[2].textContent = 'Rutas');
    console.log (navegacion.children[3].textContent = 'Seguimiento');

    //CAMBIAR COLOR
    const heading = document.querySelector('h1');
    heading.style.backgroundColor = 'blue';

    // CAMBIAR IMG

     const imagen = document.querySelector('.card img');
     imagen.src = 'img/newyork1.jpg';
   

    

}

// <!-- ======= Ingreso 2 - MENOR ======= -->


if(ingreso == 2){
    
    document.querySelector('.').textContent = "WELCOME MENOR";
    console.log (navegacion.children[0].textContent = '');
    console.log (navegacion.children[1].textContent = 'Ruta');
    console.log (navegacion.children[2].textContent = 'Alerta');
    console.log (navegacion.children[3].textContent = 'S.O.S');

   //CAMBIAR COLOR

    const heading = document.querySelector('h1');
    heading.style.backgroundColor = 'red';

    //CAMBIAR IMG

    const imagen = document.querySelector('.card img');
    imagen.src = 'img/logo.jpg';


}

// <!-- ======= Ingreso 3 - CONFIAPP ======= -->


if(ingreso == 3){

    document.querySelector('.contenido-hero h1').textContent = "WELCOME A CONFIAPP";
    document.querySelector('.hospedaje h2').textContent = prompt("CAMBIA Hospedaje por");
   

    //CAMBIAR COLOR
    const heading = document.querySelector('h1');
    heading.style.backgroundColor = 'orange';

   //CAMBIAR IMG
   const imagen = document.querySelector('.card img');
   imagen.src = 'img/lupa.jpg';

}