
function procesar(){


var primero = document.getElementById('primero').value;

var segundo = document.getElementById('segundo').value;

var tercero= document.getElementById('tercero').value;

var cuarto=document.getElementById('cuarto').value;

var quinto = document.getElementById('quinto').value;

var sexto = document.getElementById('sexto').value;

var resultado = parseInt(primero*18000)+parseInt(segundo*13000)+parseInt(tercero*12000)+parseInt(cuarto*15000)+parseInt(quinto*10000)+parseInt(sexto*1000)

document.getElementById('resultado').innerHTML= "Total: "+resultado


}

