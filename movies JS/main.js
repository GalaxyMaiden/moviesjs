"use strict";

function buyMovie1(element) {
  let poster = document.querySelector(".poster1");

  poster.style.background =
    'url("img/movie-bought.png") center / cover no-repeat';

  element.innerText = "Bought";

  element.setAttribute("disabled", "disabled");

  element.style.cursor = "default";

  let close = document.querySelector(".price1").innerText;

  let price = Number(close.substring(1));

  let total = document.querySelector(".total-spent");

  let totalNum = Number(total.innerText);

  total.innerText = totalNum + price;

  let moviesBought = document.querySelector(".movies-bought");

  let movBought = Number(moviesBought.innerText);

  moviesBought.innerText = movBought + 1;
}

function buyMovie2(element) {
  let poster = document.querySelector(".poster2");

  poster.style.background =
    'url("img/movie-bought.png") center / cover no-repeat';

  element.innerText = "Bought";

  element.setAttribute("disabled", "disabled");

  element.style.cursor = "default";

  let close = document.querySelector(".price2").innerText;

  let price = Number(close.substring(1));

  let total = document.querySelector(".total-spent");

  let totalNum = Number(total.innerText);

  total.innerText = totalNum + price;

  let moviesBought = document.querySelector(".movies-bought");

  let movBought = Number(moviesBought.innerText);

  moviesBought.innerText = movBought + 1;
}

function buyMovie3(element) {
  let poster = document.querySelector(".poster3");

  poster.style.background =
    'url("img/movie-bought.png") center / cover no-repeat';

  element.innerText = "Bought";

  element.setAttribute("disabled", "disabled");

  element.style.cursor = "default";

  let close = document.querySelector(".price3").innerText;

  let price = Number(close.substring(1, 3));

  let total = document.querySelector(".total-spent");

  let totalNum = Number(total.innerText);

  total.innerText = totalNum + price;

  let moviesBought = document.querySelector(".movies-bought");

  let movBought = Number(moviesBought.innerText);

  moviesBought.innerText = movBought + 1;
}

function buyMovie4(element) {
  let poster = document.querySelector(".poster4");

  poster.style.background =
    'url("img/movie-bought.png") center / cover no-repeat';

  element.innerText = "Bought";

  element.setAttribute("disabled", "disabled");

  element.style.cursor = "default";

  let close = document.querySelector(".price4").innerText;

  let price = Number(close.substring(1, 3));

  let total = document.querySelector(".total-spent");

  let totalNum = Number(total.innerText);

  total.innerText = totalNum + price;

  let moviesBought = document.querySelector(".movies-bought");

  let movBought = Number(moviesBought.innerText);

  moviesBought.innerText = movBought + 1;
}
