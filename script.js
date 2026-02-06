console.log("Conexion con Javascript\n\n");
//Creacion de un array
let tareas = ["Estudiar", "Practicar", "Descansar"];

//Bucle for
for (let i = 0; i < tareas.length; i++) {
    console.log(tareas[i]);    
}

//Bucle ForEach
tareas.forEach(function (tarea) {
    console.log(tarea);
})