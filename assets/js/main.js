var numeros = [5,6,9,1,0,3,15]
var nombres = ["José", "María", "Juan", 100]


var persona1 = {
    rut: "11.111.111-1",
    nombre: "José",
    apellido: "Roa",
    edad: 25,
    activo: true
}

console.log(persona1.rut);
console.log(persona1["rut"]);

var persona2 = {
    rut: "22.222.222-2",
    nombre: "María",
    apellido: "López",
    edad: 30,
    activo: true
}

var persona3 = {
    rut: "33.333.333-3",
    nombre: "Juan",
    apellido: "Duran",
    edad: 20,
    activo: false
}

var personas = [ 
    persona1, 
    persona2, 
    persona3,
    {
        rut: "44.444.444-4",
        nombre: "Luisa",
        apellido: "Pérez",
        edad: 18,
        activo: true
    }
]

console.log(personas);

// Manipulación de la estructura HTML.
var titulo = document.getElementById("titulo")
var parrafos = document.getElementsByClassName("parrafo")
var listaTareas = document.querySelectorAll("li")



setTimeout(() => {
    titulo.innerText = "Estructuras de Control Repetitivas y Objetos"
    parrafos[1].innerText = "Bienvenidos al curso Fullstack Javascript 0086"
    listaTareas[1].innerText = "Modelar el sistema"
}, 5000);


