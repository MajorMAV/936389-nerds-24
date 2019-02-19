(function(){

  let buttons = document.getElementsByClassName("slides-switch-button");
  for (let i= 0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(event){
      let slider_id = event.currentTarget.getAttribute("data-for");
      if(slider_id)
      {
        Array.prototype.forEach.call(document.getElementsByClassName("active-button"), function(element){
          element.classList.remove("active-button");
        });
        Array.prototype.forEach.call(document.getElementsByClassName("slides-list-item is-showed"), function(element){
          element.classList.remove("is-showed");
        });
        event.currentTarget.classList.add("active-button");
        document.getElementById(slider_id).classList.add("is-showed");
      };
    });
  };

  document.getElementById("write-to-us-button").addEventListener("click", function(event){
    if (event.currentTarget.nodeName !="A") return;
    Array.prototype.forEach.call(document.getElementsByClassName("write-to-us"), function(element){
      element.classList.add("is-showed")
    });
    event.preventDefault();
  });

  let close_buttons = document.getElementsByClassName("close-form-button");
  Array.prototype.forEach.call(close_buttons, function(element){
    element.addEventListener("click", function(event){
      if (event.currentTarget.nodeName !="A") return;
      Array.prototype.forEach.call(document.getElementsByClassName("popap is-showed"), function(element){
        element.classList.remove("is-showed");
      });
      event.preventDefault();
    });
  });

  ymaps.ready(init);
    function init(){
        // Создание карты.
        debugger;
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
