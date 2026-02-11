console.log("Conexion con Javascript\n\n");
//Semana 8 - Dia 1
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.body);
    })