// En el siguiente ejercicio debéis sacar por consola (console.log) una lista con el nombre de los usuarios.
// Dicha la lista la obtendréis del documento "users.json" haciendo uso de la función "fetch". Una vez tengáis el array de usuarios, debéis generar otro array con la función "filter" para que solo estén los usuarios que tengán más de 500 en la propiedad "money".
// Teniendo la lista ya filtrada, la recorreréis con el método "forEach" para mostrar por consola el nombre de cada usuario.

let buttonShowList = document.getElementById("showList");
buttonShowList.addEventListener("click", getUsers);

function getUsers() {
  fetch("./users.json")
    .then(response => response.json())

    .then(data => {
      console.log("Lista completa del array original")
      console.log(data)
      console.log("Lista de nombres del array original")
      data.forEach(function(elemento, indice, data) {
        console.log(elemento.name);
      });

      console.log("Usuarios que tengán más de 500 array nuevo")
      let arrayFilter = data.filter(elemento => elemento.money > 500);
      arrayFilter.forEach(function(elemento, indice, data) {
        console.log(elemento.name);
      });
      console.log("Lista completa del array filtrado")
      console.log(arrayFilter)
    });
}

function showMessage(data) {
  console.log(`El nombre del usuario es ${data}`);
}
function esSuficientementeGrande(data) {
  data.forEach(function(elemento, indice, data) {
    console.log(elemento, indice);
  });

  //return data[1]>= 500;
}
