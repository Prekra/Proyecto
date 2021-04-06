function procesar(){


    var primero = document.getElementById('primero').value;
    var segundo = document.getElementById('segundo').value;
    var tercero = document.getElementById('tercero').value;
    var cuarto = document.getElementById('cuarto').value;
    var quinto = document.getElementById('quinto').value;
    var sexto = document.getElementById('sexto').value;
    var septimo = document.getElementById('septimo').value;
    var octavo = document.getElementById('octavo').value;
    var noveno = document.getElementById('noveno').value;
    var decimo = document.getElementById('decimo').value;
    var undecimo = document.getElementById('undecimo').value;
    var duodecimo = document.getElementById('duodecimo').value;
    var decimotercero = document.getElementById('decimotercero').value;
    var decimocuarto = document.getElementById('decimocuarto').value;


    var total = parseInt(primero*3000)+parseInt(segundo*6000)+parseInt(tercero*2500)+parseInt(5500*cuarto)+parseInt(2000*quinto)+
    parseInt(sexto*5000)+parseInt(septimo*2000)+parseInt(octavo*5000)+parseInt(noveno*2100)+parseInt(decimo*5100)+parseInt(undecimo*2500)+
    parseInt(duodecimo*4500)+parseInt(decimotercero*2500)+parseInt(decimocuarto*45000)


    document.getElementById('resultado').innerHTML="Total: "+total




}