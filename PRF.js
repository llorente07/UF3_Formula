/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var cont = 0;

function Crear() {
    
    Nom = document.getElementById("Nom").value;
                        
    var Formulari = document.createElement("form");
    Formulari.setAttribute("id","Formulari"+cont);
    document.body.appendChild(Formulari);
    
    var contenido = document.createTextNode(Nom);
    Formulari.appendChild(contenido);
    
    Formulari.appendChild(borrarformu(Formulari.id));
    Formulari.appendChild(SUBMIT());
    cont++;
}

function borrarformu(idF) {
  var boto = document.createElement("button");
  var textBoto = document.createTextNode("DELETE");

  boto.setAttribute("class", "eli");
  boto.setAttribute("id", idF);
  boto.setAttribute("type", "button");
  boto.appendChild(textBoto);

  var botoE = boto;
  botoE.addEventListener("click", Eliminar);

  return boto;
}

function Eliminar(idF) {
  var form = idF.target;
  var borrar = form.parentNode;
  borrar.remove();
  }

$(document).ready(function()
	{
	$("#Extraer").click(function () {
	//saco el valor accediendo a un input de tipo text y name = nombre
	($('input:text[id = Sacar]').val());
	//saco el valor accediendo al id del input = nombre
	($("#Sacar").val());
	// saco el valor accediendo al class del input = nombre   
	});
});

$(document).ready(function()
	{
	$("#Extraer1").click(function () {
	//saco el valor accediendo a un input de tipo text y name = nombre
	($('input:num[id = NumF]').val());
	//saco el valor accediendo al id del input = nombre
	($("#NumF").val());
	// saco el valor accediendo al class del input = nombre   
	});
});

var nextinput = 0;

function CampoText() {
    nextinput++;
    campo = '<id = "rut' + nextinput + '"> <br> ' + $("input:text[id = Sacar]").val() + ' : <input type = "text" size="25" maxlength="15" id="campo' + nextinput + '"&nbsp; name = "text' + nextinput + '"&nbsp; />';
    $("#Formulari" + $("#NumF").val()).append(campo);
}

function CampoPass() {
    nextinput++;
    campo = '<id = "rut' + nextinput + '"> <br> ' + $("input:text[id = Sacar]").val() + ' : <input type = "password" size="25" maxlength="9" id="campo' + nextinput + '"&nbsp; name = "Pass' + nextinput + '"&nbsp; +  placeholder = "MAX 9" />';
    $("#Formulari" + $("#NumF").val()).append(campo);
    }
 
function CampoDate() {
    nextinput++;
    campo = '<id = "rut' + nextinput + '"> <br> ' + $("input:text[id = Sacar]").val() + ' : <input type = "date" size="25" id="campo' + nextinput + '"&nbsp; name = "date' + nextinput + '"&nbsp; />';
    $("#Formulari" + $("#NumF").val()).append(campo);
}

function CampoEmail() {
    nextinput++;
    campo = '<id = "rut' + nextinput + '"> <br> ' + $("input:text[id = Sacar]").val() + ' : <input type = "email" size="40" id="campo' + nextinput + '"&nbsp; name = "email' + nextinput + '"&nbsp; +  placeholder = "micorreo@gmail.com"/>';
    $("#Formulari" + $("#NumF").val()).append(campo);
}

function CampoEdat() {
    nextinput++;
    campo = '<id = "rut' + nextinput + '"> <br> ' + $("input:text[id = Sacar]").val() + ' : <input type = "number" size="40" min="18" max="35" id="campo' + nextinput + '"&nbsp; name = "edat' + nextinput + '"&nbsp; +  placeholder = "18 a 35"/>';
    $("#Formulari" + $("#NumF").val()).append(campo);
}

function CampoArchivo() {
    nextinput++;
    campo = '<id = "rut' + nextinput + '"> <br> ' + $("input:text[id = Sacar]").val() + ' : <input type = "file" size="40" min="18" max="35" id="campo' + nextinput + '"&nbsp; name = "file' + nextinput + '"&nbsp; +  placeholder = "18 a 35"/>';
    $("#Formulari" + $("#NumF").val()).append(campo);
}

function CampoRadio() {
    nextinput++;
    campo = '<id = "rut' + nextinput + '"> <br> ' + $("input:text[id = Sacar]").val() + ' : <input type = "radio" id="campo' + nextinput + '"&nbsp; name = "CampoRad' + nextinput + '"&nbsp;/>';
    $("#Formulari" + $("#NumF").val()).append(campo);
}

function TRadio  () {
    nextinput++;
    campo = '<id = "rut' + nextinput + '"> <br> ' + $("input:text[id = Sacar]").val() + '&nbsp:';
    $("#Formulari" + $("#NumF").val()).append(campo);
}

function CampoCheck() {
    nextinput++;
    campo = '<id = "rut' + nextinput + '"> <br> ' + $("input:text[id = Sacar]").val() + ' : <input type = "checkbox" id="campo' + nextinput + '"&nbsp; name = "check' + nextinput + '"&nbsp;/>';
   $("#Formulari" + $("#NumF").val()).append(campo);
}

function TCheck  () {
    nextinput++;
    campo = '<id = "rut' + nextinput + '"> <br> ' + $("input:text[id = Sacar]").val() + '&nbsp:';
    $("#Formulari" + $("#NumF").val()).append(campo);
}
 
 
function SUBMIT() {
  var boto = document.createElement("button");
  boto.setAttribute("class", "sub");
  boto.setAttribute("id", "boto");
  boto.setAttribute("type", "submit");
  boto.appendChild(document.createTextNode("SUBMIT"));

  return boto;
}

$(document).ready(function() {
  $('#limpiar').click(function() {
    $('input:text[id = Sacar]').val('');
  });
});

//FUNCION PARA CREAR CAMPOS
//    
//    function AgregarCampos(){
//    nextinput++;
//    campo = '<li id="rut'+nextinput+'"><br>Campo:<input type="email" size="20" id="campo' + nextinput + '"&nbsp; name="campo' + nextinput + '"&nbsp; /></li>';
//    $("#campos").append(campo);
//    }