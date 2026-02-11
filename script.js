console.log("Conexion con Javascript\n\n");
//Semana 8 - Dia 2
const boton = document.getElementById("btnCargar");
const titulo = document.getElementById("titulo");
const contenido = document.getElementById("contenido");
const valorId = document.getElementById("valorId");

boton.addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            titulo.textContent = data.name;
            contenido.textContent = data.username;
            valorId.textContent = data.id;
            console.log(data.name);
            console.log(data.username);
            console.log(data.id);
        });
});