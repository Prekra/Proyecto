
vector=[]



function enviar(){
    totalperro=0

var cantidad1= document.getElementById('cantidad1').value;
cantidad1=parseInt(cantidad1)
var perros = document.getElementById('opcionesperros').value;

localStorage.getItem(perros)
localStorage.getItem(cantidad1)
localStorage.setItem('Perros',perros)
localStorage.setItem('Cantidad_Perros',cantidad1)





 
if(perros=="Mexicano"){


  totalperro= cantidad1*7000
 
 

}else if(perros=="Suizo")
{

    
    totalperro=cantidad1*5000
}else if(perros=="Doble")
{

    totalperro=cantidad1*6000
}else if(perros=="Sencillo")
{
totalperro=cantidad1*3000

}

totalhamburguesas=0
var cantidad2= document.getElementById('cantidad2').value;
cantidad2=parseInt(cantidad2)
var hamburguesas = document.getElementById('opcioneshamburguesas').value;

localStorage.getItem(hamburguesas)
localStorage.getItem(cantidad2)
localStorage.setItem('Hamburguesas',hamburguesas)
localStorage.setItem('Cantidad_Hamburguesas',cantidad2)
 

if(hamburguesas=="Mexicana"){

    totalhamburguesas = cantidad2*8000
    
}
else if(hamburguesas=="Beacon")
{
    totalhamburguesas= cantidad2*9000
}
else if(hamburguesas=="Lafina")
{
    totalhamburguesas= cantidad2*10000
}
else if(hamburguesas=="Mcdomal")
{

    totalhamburguesas=cantidad2*11000
}
else if(hamburguesas=="Mixta")
{

    totalhamburguesas=cantidad2*12000
}
else if(hamburguesas=="Queso")
{
    totalhamburguesas=cantidad2*13000
}
else if(hamburguesas=="Laparea")
{
    totalhamburguesas=cantidad2*14000
}
else if(hamburguesas=="Elmedio")
{
    totalhamburguesas=cantidad2*15000
}

totalpizza=0
var cantidad3= document.getElementById('cantidad3').value;
cantidad3=parseInt(cantidad3)
var pizza = document.getElementById('opcionespizza').value;

localStorage.getItem(pizza)
localStorage.getItem(cantidad3)
localStorage.setItem('Pizzas',pizza)
localStorage.setItem('Cantidad_Pizzas',cantidad3)

if(pizza=="Currambera"){

    totalpizza=cantidad3*20000
}
else if(pizza=="4sabores")
{
    totalpizza=cantidad3*25000
}
else if(pizza=="Caprichosa")
{
    totalpizza=cantidad3*30000
}
else if(pizza=="Jamon"){

    totalpizza= cantidad3*15000
}


totalsalchipapa=0
var cantidad4= document.getElementById('cantidad4').value;
cantidad3=parseInt(cantidad3)
var salchipapa = document.getElementById('opcionessalchi').value;

localStorage.getItem(salchipapa)
localStorage.getItem(cantidad4)
localStorage.setItem('Salchipapa',salchipapa)
localStorage.setItem('Cantidad_Salchipapa',cantidad4)

if(salchipapa=="Salchipollo"){

    totalsalchipapa=cantidad4*12000
}
else if(salchipapa=="Combinada")
{
    totalsalchipapa=cantidad4*20000
}
else if(salchipapa=="Hawaiana")
{
    totalsalchipapa=cantidad4*15000
}
else if(salchipapa=="Sencilla"){

    totalpizza= cantidad4*7000
}



var p=document.getElementById('opcionesperros');
var h = document.getElementById('opcioneshamburguesas');
var pi=document.getElementById('opcionespizza');
var s = document.getElementById('opcionessalchi');

total=0
total=totalsalchipapa+totalperro+totalpizza+totalhamburguesas



if(p.value==0 &&  h.value==0 && pi.value==0 && s.value==0 )
{
    alert("Escoja algún producto");

} else


{
var productos={

    producto1:perros,
    cantidadp:cantidad1,
    pago: totalperro,

    producto2:hamburguesas,
    cantidadh:cantidad2,
    pago2:totalhamburguesas,

    producto3:pizza,
    cantidadpi:cantidad3,
    pago3:totalpizza,

    producto4:salchipapa,
    cantidadsa:cantidad4,
    pago4:totalsalchipapa,

    total:total

};



 /*if(perros=="Sencillo" && cantidad1==0)
{
    alert("Ingrese la cantidad de perros sencillos")
}
else if(perros=="Doble" && cantidad1==0 )
{
    alert("Ingrese la cantidad de perros doble")
}else if(perros=="Suizo" && cantidad1==0)
{

    alert("Ingrese la cantidad de perros suizo")
}else if(perros=="Mexicano" && cantidad1==0){

    alert("Ingrese la cantidad de perros mexicano")

} else



if(pizza=="Currambera" && cantidad2==0)
{
    alert("Ingrese la cantidad de pizza currambera")
}
else if(pizza=="4sabores" && cantidad2==0 )
{
    alert("Ingrese la cantidad de pizza 4sabores")
}else if(pizza=="Caprichosa" && cantidad2==0)
{

    alert("Ingrese la cantidad de pizza caprichosa")
}else if(pizza=="Jamon" && cantidad2==0){

    alert("Ingrese la cantidad de pizza de jamon")

} else



if(hamburguesas=="Mexicana" && cantidad2==0)
{
    alert("Ingrese la cantidad de hamburguesas Mexicana")
}
else if(hamburguesas=="Beacon" && cantidad3==0 )
{
    alert("Ingrese la cantidad de hamburguesas Beacon")
}else if(hamburguesas=="Lafina" && cantidad3==0)
{

    alert("Ingrese la cantidad de hamburguesas Lafina")
}else if(hamburguesas=="Mcdomal" && cantidad3==0){

    alert("Ingrese la cantidad de hamburguesas  Mcdomal")

}else if(hamburguesas=="Mixta" && cantidad3==0){

    alert("Ingrese la cantidad de hamburguesas mixta")

}else if(hamburguesas=="Queso" && cantidad3==0){

    alert("Ingrese la cantidad de hamburguesas de queso")

}else if(hamburguesas=="Laparea" && cantidad3==0){

    alert("Ingrese la cantidad de hamburguesas laparea")

}else if(hamburguesas=="Elmedio" && cantidad3==0){

    alert("Ingrese la cantidad de hamburguesas elmedio")

}else{

*/


vector.push(productos)
dt=
`

<table class="table">

<tr>
<th>Perros</th>
<th>Cantidad</th>
<th>Total</th>

<th>Hamburguesas</th>
<th>Cantidad</th>
<th>Total</th>

<th>Pizza</th>
<th>Cantidad</th>
<th>Total</th>

<th>Salchipapa</th>
<th>Cantidad</th>
<th>Total</th>

<th>Total a pagar</th>

</tr>

</table>`
for(var i=0; i<vector.length;i++){


 

    dt += `

   
    
    <table class="table">
    <tr class="text-center" id="fila">
       <td>${vector[i].producto1}</td>
       <td>${vector[i].cantidadp}</td>
       <td>${vector[i].pago}</td>

       <td>${vector[i].producto2}</td>
       <td>${vector[i].cantidadh}</td>
       <td>${vector[i].pago2}</td>

       <td>${vector[i].producto3}</td>
       <td>${vector[i].cantidadpi}</td>
       <td>${vector[i].pago3}</td>

        <td>${vector[i].producto4}</td>
       <td>${vector[i].cantidadsa}</td>
       <td>${vector[i].pago4}</td>

       <td>${vector[i].total}</td>

       <td><button class="form-control btn btn-outline-danger "onclick="eliminar(this)">Eliminar</button></td>
       <td><button class="btn btn-outline-success" onclick="editar(this)">Editar</button></td>
       
    </tr>
    
    </table>`
    
}

document.getElementById('tabla').innerHTML= dt



document.getElementById('cantidad1').value=0

document.getElementById('cantidad2').value=0

document.getElementById('cantidad3').value=0

document.getElementById('cantidad4').value=0

}
}


function eliminar(eliminar){
    var fila = eliminar.parentNode.parentNode;
    fila.parentNode.removeChild(fila);

localStorage.removeItem('Perros')
localStorage.removeItem('Cantidad_Perros')
localStorage.removeItem('Pizzas')
localStorage.removeItem('Cantidad_Pizzas')
localStorage.removeItem('Hamburguesas')
localStorage.removeItem('Cantidad_Hamburguesas')

}

function editar(nodo){
 

}


