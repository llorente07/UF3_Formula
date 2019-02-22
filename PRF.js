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
    
    var eliminar = document.createElement("button");
    eliminar.setAttribute("class","eli");
    texteliminar = document.createTextNode("ELIMINAR");
    eliminar.appendChild(texteliminar);
    Formulari.appendChild(eliminar);

    botoeliminar = eliminar;
    botoeliminar.addEventListener("click",borrarformu(Formulari.id));
}


function borrarformu(id){
    var Formulario = id.target;
    var borrar = Formulario.parentNode;
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
	($('input:num[id = Num]').val());
	//saco el valor accediendo al id del input = nombre
	($("#Num").val());
	// saco el valor accediendo al class del input = nombre   
	});
});

var nextinput = 0;

function CampoText() {
    nextinput++;
    campo = '<id = "rut' + nextinput + '"> <br> ' + $("input:text[id = Sacar]").val() + ' : <input type = "text" size="25" maxlength="10" id="campo' + nextinput + '"&nbsp; name = "text' + nextinput + '"&nbsp; />';
    $("#Formulari0").append(campo);
}

function CampoPass() {
    nextinput++;
    campo = '<id = "rut' + nextinput + '"> <br> ' + $("input:text[id = Sacar]").val() + ' : <input type = "password" size="25" maxlength="9" id="campo' + nextinput + '"&nbsp; name = "Pass' + nextinput + '"&nbsp; +  placeholder = "MAX 9" />';
    $("#Formulari0").append(campo);
    }
 
function CampoDate() {
    nextinput++;
    campo = '<id = "rut' + nextinput + '"> <br> ' + $("input:text[id = Sacar]").val() + ' : <input type = "date" size="25" id="campo' + nextinput + '"&nbsp; name = "date' + nextinput + '"&nbsp; />';
    $("#Formulari0").append(campo);
}

function CampoEmail() {
    nextinput++;
    campo = '<id = "rut' + nextinput + '"> <br> ' + $("input:text[id = Sacar]").val() + ' : <input type = "email" size="40" id="campo' + nextinput + '"&nbsp; name = "email' + nextinput + '"&nbsp; +  placeholder = "micorreo@gmail.com"/>';
    $("#Formulari0").append(campo);
}

function CampoEdat() {
    nextinput++;
    campo = '<id = "rut' + nextinput + '"> <br> ' + $("input:text[id = Sacar]").val() + ' : <input type = "number" size="40" min="18" max="35" id="campo' + nextinput + '"&nbsp; name = "edat' + nextinput + '"&nbsp; +  placeholder = "18 a 35"/>';
    $("#Formulari0").append(campo);
}

function CampoArchivo() {
    nextinput++;
    campo = '<id = "rut' + nextinput + '"> <br> ' + $("input:text[id = Sacar]").val() + ' : <input type = "file" size="40" min="18" max="35" id="campo' + nextinput + '"&nbsp; name = "file' + nextinput + '"&nbsp; +  placeholder = "18 a 35"/>';
    $("#Formulari0").append(campo);
}

function CampoRadio() {
    nextinput++;
    campo = '<id = "rut' + nextinput + '"> <br> ' + $("input:text[id = Sacar]").val() + ' : <input type = "radio" id="campo' + nextinput + '"&nbsp; name = "radio' + nextinput + '"&nbsp;/>';
    $("#Formulari0").append(campo);
}

function CampoCheck() {
    nextinput++;
    campo = '<id = "rut' + nextinput + '"> <br> ' + $("input:text[id = Sacar]").val() + ' : <input type = "checkbox" id="campo' + nextinput + '"&nbsp; name = "check' + nextinput + '"&nbsp;/>';
    $("#Formulari0").append(campo);
}
 
 








//FUNCION PARA CREAR CAMPOS
//    
//    function AgregarCampos(){
//    nextinput++;
//    campo = '<li id="rut'+nextinput+'"><br>Campo:<input type="email" size="20" id="campo' + nextinput + '"&nbsp; name="campo' + nextinput + '"&nbsp; /></li>';
//    $("#campos").append(campo);
//    }