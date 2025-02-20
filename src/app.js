import "bootstrap";
import "./style.css";

window.onload = function () {
  function mezcladorDeCarta(numeros, simbolos) {
    let valoresRandom = Math.floor(Math.random() * numeros.length);
    let iconosRandom = Math.floor(Math.random() * simbolos.length);//genera un numero entre 0 y 4
    let valorFinal = numeros[valoresRandom];
    let iconoFinal = simbolos[iconosRandom];//busca el elemento random ejl: simbolos[1] => devuelve el corazon


    let primerSimbolo = document.getElementsByClassName("iconos")[0];

    if (iconoFinal === "♥" || iconoFinal === "♦") {
      primerSimbolo.style.color = 'red';
    }
    else {
      primerSimbolo.style.color = 'black';
    }

    primerSimbolo.innerText = iconoFinal;

    let segundoSimbolo = document.getElementsByClassName("iconos2")[0];

    if (iconoFinal === "♥" || iconoFinal === "♦") {
      segundoSimbolo.style.color = 'red';
    }
    else {
      segundoSimbolo.style.color = 'black';
    }

    segundoSimbolo.innerText = iconoFinal;

    let numeroAleatorio = document.getElementsByClassName("valores")[0];
    if (iconoFinal === "♥" || iconoFinal === "♦") {
      numeroAleatorio.style.color = 'red';
    }
    else {
      numeroAleatorio.style.color = 'black';
    }

    numeroAleatorio.innerText = valorFinal;
  }

  function cartaFinal() {
    let valores = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    let iconos = ["♦", "♥", "♠", "♣"];
    mezcladorDeCarta(valores, iconos)
  }
  cartaFinal()
};
