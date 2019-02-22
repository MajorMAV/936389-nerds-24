(function(){

  document.getElementById("write-to-us-button").addEventListener("click", function(evt){
    if (evt.currentTarget.nodeName !="A") return;
    evt.preventDefault();
    let modal_window = document.querySelector(".write-to-us");
    modal_window.classList.add("is-showed");
    modal_window.querySelector("input").focus();
  });

  let close_buttons = document.querySelectorAll(".close-form-button");
  for( let i = 0; i <close_buttons.length; i++) {
    close_buttons[i].addEventListener("click", function(evt){
      if (evt.currentTarget.nodeName !="A") return;
      event.preventDefault();
      document.querySelector(".popap.is-showed").classList.remove("is-showed");
    });
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
        //coordinates: [59.938631, 30.323055]

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
    }
})()

function slider_switch_click_handler(evt){
      debugger;
      let slider_id = evt.currentTarget.getAttribute("data-for");
      if(slider_id)
      {
        let forDeactivateButtons = document.querySelectorAll(".active-button");
        for (let i = 0; i< forDeactivateButtons.length; i++){
          forDeactivateButtons[i].classList.remove("active-button");
        };

        let forDeactivateSlides = document.querySelectorAll(".slides-list-item.is-showed");
        for (let i = 0; i < forDeactivateSlides.length; i++){
          let forDeactivateLinks = forDeactivateSlides[i].querySelectorAll("a");
          for( let j = 0; j < forDeactivateLinks.length; j++){
            forDeactivateLinks[j].setAttribute("tabindex","-1");
          }
          forDeactivateSlides[i].classList.remove("is-showed");
        };

        evt.currentTarget.classList.add("active-button");
        let activeSlide = document.getElementById(slider_id);
        activeSlide.classList.add("is-showed");
        let forActivateLinks = activeSlide.querySelectorAll("a");
        for( let i = 0; i < forActivateLinks.length; i++){
          forActivateLinks[i].setAttribute("tabindex","0");
        }
      };

}
