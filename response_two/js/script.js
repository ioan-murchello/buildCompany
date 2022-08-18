function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }
    else{
    document.querySelector('body').classList.add('no-webp');
    }
    });

    
    //************************************ spoilers__

    let spollers = document.querySelectorAll('.answers_main_title');
   
    let answers_container = document.querySelector('.answers_container');

    /*всё тоже самое, кроме...*/

          spollers.forEach((elem)=>{
              elem.addEventListener('click', function(){
                  
                  let descActive = document.querySelectorAll('.answers_text_info.s_class');
                  
                  if(elem.nextElementSibling.classList.contains("s_class")) {
                    elem.nextElementSibling.classList.remove('s_class');
                  }
                  else {
                    elem.nextElementSibling.classList.add('s_class');
                  }
              })
          })

        


   
              

