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
    try {
        titulo.innerText = "Estructuras de Control Repetitivas y Objetos"
        parrafos[1].innerText = "Bienvenidos al curso Fullstack Javascript 0086"
        listaTareas[1].innerText = "Modelar el sistema"
    } catch (e) {
        console.log("Error detallado", e);
        alert("Ocurrió un error, intente más tarde")
    }
    
}, 5000);


var tbody = document.querySelector("#tabla-personas tbody")

// ciclo FOR
// for (var index = 0; index < personas.length; index++) {
//     tbody.innerHTML += `
//         <tr>
//             <td>${personas[index].rut}</td>
//             <td>${personas[index].nombre}</td>
//             <td>${personas[index].apellido}</td>
//             <td>${personas[index].edad}</td>
//             <td>${personas[index].activo}</td>
//         </tr>`
// }



//Ciclo For IN
// for (const item in personas) {
//     tbody.innerHTML += `
//         <tr>
//             <td>${personas[item].rut}</td>
//             <td>${personas[item].nombre}</td>
//             <td>${personas[item].apellido}</td>
//             <td>${personas[item].edad}</td>
//             <td>${personas[item].activo}</td>
//         </tr>`
// }


//Ciclo For OF
for (const item of personas) {
    tbody.innerHTML += `
        <tr>
            <td>${item.rut}</td>
            <td>${item.nombre}</td>
            <td>${item.apellido}</td>
            <td>${item.edad}</td>
            <td>${item.activo}</td>
        </tr>`
}


for (const key in persona1) {
    console.log(key);
}






