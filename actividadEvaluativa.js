//---------------------------------------------------------------------------------------------
// 1.	Crea una simulación simple de procesamiento de una lista de
// tareas usando un arreglo. Utiliza unshift() para agregar
// tareas al principio de la lista y shift() para procesar y
// eliminar tareas de la lista.
// •	Imprimiendo un mensaje cuando se agregue la tarea.
// •	Imprime un mensaje cuando se termine la tarea y se elimine de la lista.
// •	Imprime el arreglo antes y después del procesamiento

let list = ["Mercar", "Pasea a Max", "Regar las matas"];
console.log("Esta es la lista de tareas actual, inicio", list);
function listaTareas(tareas) {
  tareas.unshift("Hacer merienda");
  console.log("Esta es la lista de tareas actual,agregando elemento ", tareas);

  tareas.shift();
  console.log(
    "Esta es la lista de tareas actual, eliminando el elemento agregado:",
    tareas
  );
}

listaTareas(list);
console.log("--------------Siguiente ejercicio--------------");
//---------------------------------------------------------------------------------------------

// 2.	Crea una matriz con 10 usuarios(nombre,edad), con una función filtra los usuarios mayores de edad creando una segunda matriz.
// •	Imprime ambos matrices

let usuarios = [
  { nombre: "Mario", edad: 35 },
  { nombre: "Camila", edad: 25 },
  { nombre: "Sofia", edad: 15 },
  { nombre: "Carlos", edad: 50 },
  { nombre: "Felipe", edad: 30 },
  { nombre: "Karla", edad: 16 },
  { nombre: "MariaJose", edad: 30 },
  { nombre: "Pepe", edad: 40 },
  { nombre: "Pablo", edad: 50 },
  { nombre: "Carolina", edad: 10 },
];

function filtrarUsuarios(users) {
  let usuariosMayores = [];
  for (i = 0; i < users.length; i++) {
    if (users[i].edad >= 18) {
      usuariosMayores.push(users[i]);
    }
  }
  console.log("Los usuarios mayores: ", usuariosMayores);
}
filtrarUsuarios(usuarios);
console.log("--------------Siguiente ejercicio--------------");
//---------------------------------------------------------------------------------------------
// 3.	Realiza los pedidos de un restaurante, dándole precio a cada artículo. Estos pedidos irán a una Matriz y al finalizar el día calcularemos lo que se realizo en total.
// •	Cada pedido se imprimirá un mensaje que diga, su pedido ha sido tomado exitosamente

let articulos = [
  { articulo: "Salchipapa", precio: 5000 },
  { articulo: "Cerveza", precio: 8000 },
  { articulo: "Mandingas", precio: 7000 },
];

let suma = 0;
articulos.forEach((el) => {
  console.log(`Su pedido de ${el.articulo} ha sido tomado exitosamente`);
  suma += el.precio;
});

console.log("El total del pedido es de: ", suma);
console.log("--------------Siguiente ejercicio--------------");

//---------------------------------------------------------------------------------------------
//4.	Con la ayuda de .forEach le vamos a Incrementar la edad de todos los usuarios en un arreglo y modifica el arreglo original.
let users = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 28 },
];
console.log("El arreglo original es: ", users);

let sumEdad = 0;
let nuevaEdad = [];
users.forEach((el) => {
  sumEdad = el.edad + 10;
  nuevaEdad.push(sumEdad);
  el.edad = sumEdad;
});
console.log("La edad incrementada de los usuarios es: ", nuevaEdad);
console.log("El arreglo modificado es: ", users);
console.log("--------------Siguiente ejercicio--------------");
//---------------------------------------------------------------------------------------------
// 5.	Utilizando el Dom crea una función que me agregue colores en una lista .
//NOTA: Ejercicio en el archivo app.js
