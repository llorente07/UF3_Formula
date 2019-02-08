/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
  //Guardas el contenido en una variable, aqui puedes realizar las modificaciones pertinentes a tu conveniencia.
  var plantilla = "<form action='/action_page.php'>" +
    "  First name:<br>" +
    "  <input type='text' name='firstname' value='Nom'>" +
    "  <br>" +
    "  Last name:<br>" +
    "  <input type='text' name='lastname' value='Mouse'>" +
    "  <br>" +
    "<br>" +
    "  <input type='submit' value='Submit'>" +
    "</form>";
  //Obtienes el contenedor donde se va a poner el nuevo formulario
  var contenedor = $("#contenedor");
  //Obtienes el boton que acciona el agregado
  var btnAddMore = $("#btnAddMore");
  //Adjuntas un evento click al boton add More
  btnAddMore.click(function() {
    //Agregas el contenido al contenedor cuando se realice el click al boton add more
    contenedor.append(plantilla);

  });
});
 

