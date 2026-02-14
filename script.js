console.log("JavaScript conectado correctamente\n\n\nPowered By Alan");

const btn = document.getElementById("btnCargar");
const lista = document.getElementById("lista");
const estado = document.getElementById("estado");

btn.addEventListener("click", cargarPost);

async function cargarPost() {
    estado.textContent = "Cargando datos, espere un momento...";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        if(!response.ok){
            throw new Error("Error al cargar la informacion");
        }

        lista.innerHTML = "";
        estado.textContent = "";

        const data = await response.json();
        data.forEach(function(posts) {
            const item = document.createElement("li");
            item.textContent = posts.title;
            lista.appendChild(item);
        });
    } catch (error) {
        estado.textContent = "Error al cargar la informacion";
        console.error(error);
    }
}