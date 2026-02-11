console.log("Conexion con Javascript\n\n");
//Semana 7 - Dia 6
let contador = 0;
let usuarios = [
    {nombre: "Alan", edad: 29, activo: true},
    {nombre: "Alma", edad: 31, activo: true},
    {nombre: "Emma", edad: 2, activo: false},    
    {nombre: "Irma", edad: 24, activo: false}  
];
console.log(usuarios);

//2
usuarios.forEach(function (usuario) {
    console.log(usuario.nombre);
    if(usuario.activo === true) {
        console.log(usuario);
        contador++;
    }
});
console.log("Numero de usuarios activos es: "+contador)

//3
usuarios[0].edad = 30;
usuarios[3].activo = true;

usuarios.push({
    nombre: "Itzel",
    edad: 16,
    activo: true
});
console.log(usuarios);
console.log("El numero de usuarios es: "+usuarios.length);

//4
usuarios.pop();
console.log(usuarios);

console.log("El numero de usuarios es: "+usuarios.length);