window.onload= function(){

  var select = document.getElementById('coders');
  select.onchange= function(){
    var classes= document.getElementsByClassName("prom-Laboratoria");

    function mostrar (classe){
      if(select.value=="classe"){
        for(var i = 0; i<classes.length;i++){
          if(classes[i]=="classe"){
            classes[i].classList.add("classe");
          }else{
            classes[i].classList.remove();
          }
        }
      }
    }

    switch (classes.value) {
      case prom-Laboratoria.prom4-Chile: mostrar(prom-Laboratoria.prom4-Chile);

        break;
      case prom-Laboratoria.prom5-lima: mostrar(prom-Laboratoria.prom5-Lima);

        break;
      case prom-Laboratoria.prom6-lima: mostrar(prom-Laboratoria.prom6-Lima);

        break;
      }
   }
  }
