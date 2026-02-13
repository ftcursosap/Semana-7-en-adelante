console.log("Conexion con Javascript\n\n");
//Semana 8 - Dia 4
const boton = document.getElementById("btnCargar");
const lista = document.getElementById("lista");
const estado = document.getElementById("estado");

boton.addEventListener("click", function() {
    estado.textContent = "Cargando...";
    lista.innerHTML = "";

    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then( function (response) {
            if(!response.ok){
                throw new Error("Error en la peticion");
            }

            return response.json();
        })
        .then(function (data) {
            estado.textContent = "";

            data.forEach(function (post) {
                const item = document.createElement("li");
                item.textContent = post.title;
                lista.appendChild(item);
            });
        })
        .catch(function (error) {
            estado.textContent = "Ocurrio un error al cargar los datos";
            console.error(error)
        });
});