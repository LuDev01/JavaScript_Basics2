function changeColor() {
  let lista = document.getElementById("lista");
  let color = document.getElementById("color");

  color.onchange = () => {
    lista.innerHTML += `<li>${color.value}</li>`;
  };
}
changeColor()
