
let modal_window = document.querySelector(".write-to-us");
document.querySelector("#write-to-us-button").addEventListener("click", function(evt){
  evt.preventDefault();
  modal_window.classList.add("is-showed");
  modal_window.querySelector("input").focus();
});


document.querySelector(".close-form-button").addEventListener("click", function(evt){
  event.preventDefault();
  document.querySelector(".popap.is-showed").classList.remove("is-showed");
});


let template_items = document.querySelectorAll(".templates-item");
for( let i = 0; i < template_items.length; i++){
  template_items[i].addEventListener("focus",onfocus_template,true);
  template_items[i].addEventListener("blur",onblur_template,true);
};

ymaps.ready(init);
function init(){
  // Создание карты.
  // debugger;
  let myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [59.939000, 30.321600],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 17
  });
  //coordinates: [59.938631, 30.323055
  myPlacemark = new ymaps.Placemark(
    [59.938750, 30.323155]
    , {
      hintContent: "Б.Конюшенная, д. 19/8",
      balloonContent: "Б.Конюшенная, д. 19/8"
    }
    , {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map-marker.png',
      // Размеры метки.
      iconImageSize: [260, 200],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-55, -200]
    }
  );
  myMap.geoObjects.add(myPlacemark);
};

function onfocus_template(evt) {
  //debugger;
    this.querySelector(".templates-item-hover").classList.add("hover-showed");
}
function onblur_template(evt){
  //debugger;
  this.querySelector(".templates-item-hover").classList.remove("hover-showed");
}

let slides = document.querySelectorAll(".slides-list-item");
let slideButtons = document.querySelectorAll(".slides-switch-button");
let slideLinks = document.querySelectorAll(".slides-list-item .button");
function sliderSwitchClickHandler(num){
  debugger;
  for( let i = 0; i<slides.length; i++){
    slides[i].classList.remove("is-showed");
  }
  for( let i = 0; i < slideButtons.length; i++){
    slideButtons[i].classList.remove("active-button");
  }
  for( let i = 0; i< slideLinks.length; i++){
    slideLinks[i].setAttribute("tabindex","-1");
  }

  slides[num].classList.add("is-showed");
  slideButtons[num].classList.add("active-button");
  slideLinks[num].setAttribute("tabindex","0");

}
