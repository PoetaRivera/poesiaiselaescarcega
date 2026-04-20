
//Código para presentar cada una de las doce frases
$(document).ready(function () {

    imag1.addEventListener("click", cambiar);
    imag2.addEventListener("click", cambiar);

    var i = 0;
    var imagen1 = "pensamientos/frase1.html";
    var imagen2 = "pensamientos/frase2.html";
    var imagen3 = "pensamientos/frase3.html";
    var imagen4 = "pensamientos/frase4.html";
    var imagen5 = "pensamientos/frase5.html";
    var imagen6 = "pensamientos/frase6.html";
    var imagen7 = "pensamientos/frase7.html";
    var imagen8 = "pensamientos/frase8.html";
    var imagen9 = "pensamientos/frase9.html";
    var imagen10 = "pensamientos/frase10.html";
    var imagen11 = "pensamientos/frase11.html";
    var imagen12 = "pensamientos/frase12.html";

    var ruta="#pensamientos #textopoemas iframe";

    function cambiar(e) {
      var bandera = false;
      if (e.target == imag1) {
        if (i == 12) {
          i = 0;
        }
        i = i + 1;
        var bandera = true;
      } else if (e.target == imag2) {
        i = i - 1;
        if (i <= 0) {
          i = 12;
        }


        var bandera = true;
      }

      if (bandera == true) {
        
        switch (i) {
          case 1:
            $(ruta).attr("src", imagen1);
            break;
          case 2:
            $(ruta).attr("src", imagen2);
            break;
          case 3:
            $(ruta).attr("src", imagen3);
            break;
          case 4:
            $(ruta).attr("src", imagen4);
            break;
          case 5:
            $(ruta).attr("src", imagen5);
            break;
          case 6:
            $(ruta).attr("src", imagen6);
            break;
          case 7:
            $(ruta).attr("src", imagen7);
            break;
          case 8:
            $(ruta).attr("src", imagen8);
            break;
          case 9:
            $(ruta).attr("src", imagen9);
            break;
          case 10:
            $(ruta).attr("src", imagen10);
            break;
          case 11:
            $(ruta).attr("src", imagen11);
            break;
          case 12:
            $(ruta).attr("src", imagen12);
            break;
        }
      }
    }
  });