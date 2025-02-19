import "bootstrap";
import "./style.css";

window.onload = function () {
  function mezcladorDeCarta(numeros, simbolos) {
    let valoresRandom = Math.floor(Math.random() * numeros.length);
    let iconosRandom = Math.floor(Math.random() * simbolos.length);
    return { valores: valoresRandom, iconos: iconosRandom }
  }
  function cartaFinal (){
    let valores = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    let iconos = ["♦", "♥", "♠", "♣"];
  }
};
