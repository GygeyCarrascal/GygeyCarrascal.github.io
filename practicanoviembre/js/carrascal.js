
let boton1=document.getElementById("iconbook");
let boton2=document.getElementById("iconbook1");
let boton3=document.getElementById("iconbook2");
let boton4=document.getElementById("iconbook3");

let fecha=document.getElementById("botoncultura");
let divborrar=document.getElementById("imagenaborrar");
let imgturismo=document.getElementById("turismo");


let p1=document.getElementById("lect");
let p2=document.getElementById("lect2");
let p3=document.getElementById("lect3");
let p4=document.getElementById("lect4");

flag1=0;

document.getElementById("iconbook").addEventListener('click', function(){
    boton1.onclick=Cambiar(p1);
    
});

document.getElementById("iconbook1").addEventListener('click', function(){
    boton2.onclick=Cambiar(p2);
    flag1=1;
    
});

document.getElementById("iconbook2").addEventListener('click', function(){
    boton3.onclick=Cambiar(p3);
    
});

document.getElementById("iconbook3").addEventListener('click', function(){
    boton4.onclick=Cambiar(p4);
    
});

document.getElementById("botoncultura").addEventListener('click', function(){   
    fecha.onclick=Crearfecha()
});

document.getElementById("imagenaborrar").addEventListener('click', function(){   
    divborrar.onclick=Crearpanel()
});



function Cambiar(var1){    
    var texto = "Lectura finalizada"
    var1.innerHTML = texto;
    console.log("Sdfsd")
}

function Crearpanel(){   
    console.log("dfdf");
    var contenedor=document.createElement('div');
    contenedor.innerHTML=" <div class='row'>"+
    "<div class='col-md-4'><img src='./img/turismo.jpg' alt='Responsive image' class='img-fluid'></div>"+
    "<div class='col-md-4'><img src='./img/turismo.jpg' alt='Responsive image' class='img-fluid'></div>"+
    "<div class='col-md-4'><img src='./img/turismo.jpg' alt='Responsive image' class='img-fluid'></div>"+
    "<div class='col-md-4'><img src='./img/turismo.jpg' alt='Responsive image' class='img-fluid'></div>"+
    "<div class='col-md-4'><img src='./img/turismo.jpg' alt='Responsive image' class='img-fluid'></div>";
    divborrar.appendChild(contenedor);
    divborrar.removeChild(imgturismo);
}


flag=0
function Crearfecha(){
  if(flag1==0){
        if(flag==0){
           
            let fecha= fecha11();
           /* var texto = " Lectura de 2 mins</p></div> <p>"+fecha+"</p>";
            p2.innerHTML = texto; */
            var contenedor=document.createElement('p');
            contenedor.id="fechacreada"
            contenedor.innerText=fecha;
            p2.appendChild(contenedor);
               flag=1;            
            
        }else{
            
           /* var texto = "Lectura de 2 mins</p>";
            p2.innerHTML = texto;*/
            var miparraf=document.getElementById("fechacreada");
            p2.removeChild(miparraf);
            flag=0;
        }
    }else{
        if(flag==0){
                     
            let fecha= fecha11();
           /* var texto = " Lectura de 2 mins</p></div> <p>"+fecha+"</p>";
            p2.innerHTML = texto; */
            var contenedor=document.createElement('p');
            contenedor.id="fechacreada"
            contenedor.innerText=fecha;
            p2.appendChild(contenedor);
               flag=1;
        }else{
            
            var texto = "Lectura finalizada</p>";
            p2.innerHTML = texto;
            flag=0;
        }
}  
    
}

function fecha11(){
    let fecha= new Date();
    let diaa=fecha.getDate();   
    let mes=fecha.getMonth()+1;
    let annio=fecha.getFullYear();
    return diaa+"/"+mes+"/"+annio
}