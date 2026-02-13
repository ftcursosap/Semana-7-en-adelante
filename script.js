console.log("Conexion con Javascript\n\n");
//Semana 8 - Dia 4
const boton = document.getElementById("btnCargar");
const lista = document.getElementById("lista");
const estado = document.getElementById("estado");

boton.addEventListener("click", cargarPosts);

async function cargarPosts() {
    estado.textContent = "Cargando...";
    lista.innerHTML =  "";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=8");

        if(!response.ok) {
            throw new Error("Error en la peticion");
        }

        const data = await response.json();

        estado.textContent = "";

        data.forEach(function (posts) {
            const item = document.createElement("li");
            item.textContent = posts.title;
            lista.appendChild(item);
        });
    }   catch(error) {
        estado.textContent = "Ocurrio un error al cargar los datos";
        console.error(error);
    }
}