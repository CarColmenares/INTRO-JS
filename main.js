

var nombre="Carlos Colmenares";
let edad=12;

let titulo=document.getElementById('titulo')
let mensaje="Mi nombre es "+ nombre + "y mi edad es " + (edad + 10);
console.log(mensaje);
    
titulo.innerHTML= mensaje;
titulo.style.color= '#0000ee';
titulo.style.textTransform= 'UpperCase';

titulo.onclick=function() {
    titulo.innerHTML="Le diste clic";
    titulo.style.textTransform= 'LowerCase';
};