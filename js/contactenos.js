
vector= []

function procesar(){

    
    
     var nom = document.getElementById('nom').value;
   
    var apel = document.getElementById('apel').value;
    
    var doc = document.getElementById('doc').value;
    
    var ale = document.getElementById('ale').value;
    
    var fec = document.getElementById('fec').value;

    var gen = document.getElementById('gen').value

    var ed = document.getElementById('ed').value;
    
    var tele= document.getElementById('tele').value;
    
    var cel= document.getElementById('cel').value;
    
    var cor= document.getElementById('cor').value;

    var pag = document.getElementById('pag').value
    


    localStorage.setItem('Name',nom);

    localStorage.setItem('Last_name',apel);
    
    localStorage.setItem('Documentos',doc);
    
    localStorage.setItem('Fecha',fec);
    
     localStorage.setItem('Genero',gen);
    
    localStorage.setItem('Edad',ed);
    
    localStorage.setItem('Telefono',tele);
    
    localStorage.setItem('Celular',cel);
    
    localStorage.setItem('Correo',cor);

    localStorage.setItem('Pago',pag);

    localStorage.setItem('Alergia',ale);
    
    
    localStorage.getItem(nom);

    localStorage.getItem(apel);
    
    localStorage.getItem(doc);
    
    localStorage.getItem(fec);
    
     localStorage.getItem(gen);
    
    localStorage.getItem(ed);
    
    localStorage.getItem(tele);
    
    localStorage.getItem(cel);
    
    localStorage.getItem(cor);

    localStorage.getItem(pag);

    localStorage.getItem(ale);



   email= /\w+@\w+\.+[a-z]/;



if (nom==""|| apel==""||  doc==""|| ale==""|| fec==""|| gen==""|| ed=="" || tele==""|| cel==""|| cor=="" || pag==""){

    alert("Obligatorio llenar todos los campos");

    return false;


}else if (isNaN(cel) & isNaN(tele) & isNaN(ed) & isNaN(doc)){


    alert("Celular\nTelefono\nEdad\nDocumento\nDeben ser valores numericos");



}

else if (isNaN(cel )){

    alert("El valor del celular debe ser numero");

    return false;
}

else if(isNaN(ed)){


   
    alert("La edad debe ser numerica");



}else if(isNaN(tele)){



alert("El telefono debe ser numerico");

}else if (isNaN(doc)){

 

 alert("El documento debe ser numero");

    return false;


}else if (!email.test(cor)){


alert("Correo mal escrito");

return false;



} else if(!isNaN(nom)){

    alert("El nombre debe ser alfabetico")
}


else  if(!isNaN(apel)){

    alert("El apellido debe ser alfabetico")
}
else if(!isNaN(nom) && !isNaN(apel)){

    alert("El nombre y apellido debe ser alfabetico")
}
else {


    var variables={


        Nnombre:nom,
        Aapellidos:apel,
        
      
        
        Ddocumentos:doc,
        
        Aalergias:ale,
        
        Ffecha:fec,
    
        Ggenero:gen,
    
        Eedad:ed, 
    
        Ttelefono:tele,
    
        Ccelular:cel,
    
        Ccorreo:cor,
        Ppagos:pag
    
        };
    
    
        
    
        
       vector.push(variables)
    
        dt=
        `<tr>
       <th>Nombre</th>
       <th>Apellidos</th>
       <th>Documento</th>
       <th>Alergias</th>
       <th>Fecha</th>
       <th>Edad</th>
       <th>Telefono</th>
       <th>Celular</th>
       <th>Genero</th>
       <th>Correo</th>
       <th>Pago</th>
      
       </tr>`


for( var i = 0;i<vector.length;i++){



    
      dt += `
  <tr>
     <td>${vector[i].Nnombre}</td>
     <td>${vector[i].Aapellidos}</td>
     <td>${vector[i].Ddocumentos}</td>
     <td>${vector[i].Aalergias}</td>
     <td>${vector[i].Ffecha}</td>
     <td>${vector[i].Eedad}</td>
     <td>${vector[i].Ttelefono}</td>
     <td>${vector[i].Ccelular}</td>
     <td>${vector[i].Ggenero}</td>
     <td>${vector[i].Ccorreo}</td>
     <td>${vector[i].Ppagos}</td>
     <td><button class="form-control btn btn-outline-danger "onclick="eliminar(this)">Eliminar</button></td>
     <td><button class="btn btn-outline-success" onclick="editar(this)">Editar</button></td>
     
  
     </tr> `



    }

    document.getElementById('tabla').innerHTML= dt
 
    alert("Datos enviados correctamente")
    

    


    document.getElementById("nom").value="";
    document.getElementById("apel").value="";
    document.getElementById("doc").value="";
    document.getElementById("fec").value="";
    document.getElementById("ed").value="";
    document.getElementById("tele").value="";
    document.getElementById("cel").value="";
    document.getElementById("cor").value="";

  }
   
}

  function eliminar(eliminar){

    var fila = eliminar.parentNode.parentNode;
    fila.parentNode.removeChild(fila);

    localStorage.removeItem('Name');

    localStorage.removeItem('Last_name');
    
    localStorage.removeItem('Documentos');
    
    localStorage.removeItem('Fecha');
    
     localStorage.removeItem('Genero');
    
    localStorage.removeItem('Edad');
    
    localStorage.removeItem('Telefono');
    
    localStorage.removeItem('Celular');
    
    localStorage.removeItem('Correo');

    localStorage.removeItem('Pago');

    localStorage.removeItem('Alergia');




  }





  







