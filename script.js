console.log("Conexion con Javascript\n\n");
//Semana 8 - Dia 3
const boton = document.getElementById("btnCargar");
const lista = document.getElementById("lista");

boton.addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {


            lista.innerHTML = "";

            data.forEach(function (post) {
                const item = document.createElement("li");
                item.textContent = post.name;
                lista.appendChild(item);
            });
        });
});