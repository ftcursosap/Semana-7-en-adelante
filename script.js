console.log("Conexion con Javascript\n\n");
//Creacion de un objeto
let tarea = {
    titulo: "Estudiar JavaScript",
    completada: false,
    prioridad: 1
};

console.log(tarea);


//Acceder a propiedades
console.log(tarea.titulo);
console.log(tarea.completada);

//Modificar propiedades
tarea.completada = true;
tarea.prioridad = 2;

console.log(tarea);

//Agregar nueva propiedad
tarea.fecha = "2026-02-09";
console.log(tarea);

//Ejercicios de prueba

let persona = {
    nombre: "Alan",
    edad: 29,
    activo: true
}

console.log(persona);
console.log(persona.nombre);

persona.nombre = "Alan Javier";
console.log(persona);

persona.altura = 1.71;
console.log(persona);
