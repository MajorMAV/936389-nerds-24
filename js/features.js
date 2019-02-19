(function(){

  let buttons = document.getElementsByClassName("slides-switch-button");
  for (let i= 0; i<buttons.length; i++){
    buttons[i].addEventListener("click", (event)=>{
      let slider_id = event.currentTarget.getAttribute("data-for");
      if(slider_id)
      {
        Array.prototype.forEach.call(document.getElementsByClassName("active-button"), (element) => {
          element.classList.remove("active-button");
        });
        Array.prototype.forEach.call(document.getElementsByClassName("slides-list-item is-showed"), (element)=>{
          element.classList.remove("is-showed");
        });
        event.currentTarget.classList.add("active-button");
        document.getElementById(slider_id).classList.add("is-showed");
      };
    });
  };

  document.getElementById("write-to-us-button").addEventListener("click", (event)=>{
    if (event.currentTarget.nodeName !="A") return;
    Array.prototype.forEach.call(document.getElementsByClassName("write-to-us"), (element)=>{
      element.classList.add("is-showed")
    });
    event.preventDefault();
  });

  let close_buttons = document.getElementsByClassName("close-form-button");
  Array.prototype.forEach.call(close_buttons, (element)=>{
    element.addEventListener("click", (event)=>{
      if (event.currentTarget.nodeName !="A") return;
      Array.prototype.forEach.call(document.getElementsByClassName("popap is-showed"), (element)=>{
        element.classList.remove("is-showed");
      });
      event.preventDefault();
    });
  });
})()
