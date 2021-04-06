
function facturar(){

    total1=0
    cantidad1=0
    cantidad2=0
    cantidad3=0
    cantidad4=0
    cantidad5=0
    cantidad6=0
    cantidad7=0
    cantidad8=0
    cantidad9=0

    precio1=0
    precio2=0
    precio3=0
    precio4=0
    precio5=0
    precio6=0
    precio7=0
    precio8=0
    precio9=0

cantidad1=document.getElementById('cantidad1').value;
precio1=document.getElementById('precio1').value;

cantidad2=document.getElementById('cantidad2').value;
precio2=document.getElementById('precio2').value;

cantidad3=document.getElementById('cantidad3').value;
precio3=document.getElementById('precio3').value;

cantidad4=document.getElementById('cantidad4').value;
precio4=document.getElementById('precio4').value;

cantidad5=document.getElementById('cantidad5').value;
precio5=document.getElementById('precio5').value;

cantidad6=document.getElementById('cantidad6').value;
precio6=document.getElementById('precio6').value;

cantidad7=document.getElementById('cantidad7').value;
precio7=document.getElementById('precio7').value;

cantidad8=document.getElementById('cantidad8').value;
precio8=document.getElementById('precio8').value;

cantidad9=document.getElementById('cantidad9').value;
precio9=document.getElementById('precio9').value;


total1= parseInt(cantidad1)*parseInt(precio1)

total2= parseInt(cantidad2)*parseInt(precio2)

total3= parseInt(cantidad3)*parseInt(precio3)

total4= parseInt(cantidad4)*parseInt(precio4)

total5= parseInt(cantidad5)*parseInt(precio5)

total6= parseInt(cantidad6)*parseInt(precio6)

total7= parseInt(cantidad7)*parseInt(precio7)

total8= parseInt(cantidad8)*parseInt(precio8)

total9= parseInt(cantidad9)*parseInt(precio9)


document.getElementById('total1').value="$"+total1
document.getElementById('total2').value="$"+total2
document.getElementById('total3').value="$"+total3
document.getElementById('total4').value="$"+total4
document.getElementById('total5').value="$"+total5
document.getElementById('total6').value="$"+total6
document.getElementById('total7').value="$"+total7
document.getElementById('total8').value="$"+total8
document.getElementById('total9').value="$"+total9

total=total1+total2+total3+total4+total5+total6+total7+total8+total9
iva=parseInt(total)-parseInt(total*0.19)
pagar=parseInt(total)+parseInt(iva)

document.getElementById('subtotal').value="$"+total
document.getElementById('iva').value=19+"%"
document.getElementById('tiva').value="$"+iva
document.getElementById('pagar').value="$"+pagar



}