console.log("Conexion con Javascript\n\n");
//Creacion de un Array de objetos
let tareas = [
    {titulo: "Estudiar", completada: false},
    {titulo: "Practicar", completada: true},
    {titulo: "Descansar", completada: false}
];

console.log(tareas);

//Recorrer array de objetos
tareas.forEach(function (tarea) {
    console.log(tarea.titulo);
    console.log(tarea.completada);
});

//Acceder a un objeto especifico
console.log(tareas[0].titulo);

//Modificar un objeto dentro del array
tareas[0].completada = true;
console.log(tareas);

//Ejercicios de prueba
//1
let personas = [
    {nombre: "Alan", edad: 29},
    {nombre: "Alma", edad: 31},
    {nombre: "Emma", edad: 2},
    {nombre: "Irma", edad: 24}
]
console.log(personas);

//2
personas.forEach(function (persona) {
    console.log(persona.nombre);
});

//3
personas[0].edad = 30;
console.log(personas);

//4
personas.push({
    nombre: "Itzel",
    edad: 16
});
console.log(personas);