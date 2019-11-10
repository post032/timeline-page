"use strict";
var type1 = document.getElementById('type1');
var type2 = document.getElementById('type2');
var type3 = document.getElementById('type3');
var type4 = document.getElementById('type4');
var nameElement = document.querySelector('.timeline__name');
var nameElements = document.querySelectorAll('.timeline__name');
var elementsList = document.querySelectorAll('.timeline__list');


type1.addEventListener('click', function(e) {
  e.preventDefault();
  if (nameElement.classList.contains('timeline__top')) {}
  else {
    nameElements.forEach((el) => {
      el.classList.add("timeline__top");
      el.classList.remove("timeline__topcenter");
      el.classList.remove("timeline__bottom");
      el.classList.remove("timeline__bottomcenter");
    });
  };
  for (var i = 0; i <= 1; i++) {
    elementsList[i].classList.add('finish');
  };
  elementsList[2].classList.add('expect2');
  elementsList[2].classList.remove('expect');
  elementsList[elementsList.length - 1].classList.add('timeline__none');
});

type2.addEventListener('click', function(e) {
  e.preventDefault();
  if (nameElement.classList.contains('timeline__topcenter')) {}
  else {
    nameElements.forEach((el) => {
      el.classList.remove("timeline__top");
      el.classList.add("timeline__topcenter");
      el.classList.remove("timeline__bottom");
      el.classList.remove("timeline__bottomcenter");
    });
  };
  for (var i = 0; i <= 1; i++) {
    elementsList[i].classList.add('finish');
  };
  elementsList[2].classList.add('expect');
  elementsList[2].classList.remove('expect2');
  elementsList[elementsList.length - 1].classList.remove('timeline__none');
});

type3.addEventListener('click', function(e) {
  e.preventDefault();
  if (nameElement.classList.contains('timeline__bottom')) {}
  else {
    nameElements.forEach((el) => {
      el.classList.remove("timeline__top");
      el.classList.remove("timeline__topcenter");
      el.classList.add("timeline__bottom");
      el.classList.remove("timeline__bottomcenter");
    });
  };
  for (var i = 0; i <= 1; i++) {
    elementsList[i].classList.add('finish');
  };
  elementsList[2].classList.add('expect2');
  elementsList[2].classList.remove('expect');
  elementsList[elementsList.length - 1].classList.add('timeline__none');
});

type4.addEventListener('click', function(e) {
  e.preventDefault();
  if (nameElement.classList.contains('timeline__bottomcenter')) {}
  else {
    nameElements.forEach((el) => {
      el.classList.remove("timeline__top");
      el.classList.remove("timeline__topcenter");
      el.classList.remove("timeline__bottom");
      el.classList.add("timeline__bottomcenter");
    });
  };
  for (var i = 0; i <= 1; i++) {
    elementsList[i].classList.add('finish');
  };
  elementsList[2].classList.add('expect');
  elementsList[2].classList.remove('expect2');
  elementsList[elementsList.length - 1].classList.remove('timeline__none');
});
