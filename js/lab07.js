
let boton1=document.getElementById("btnextraer");
let boton2=document.getElementById("btncolorear");
let boton3=document.getElementById("btnlimpiar");

/*Input inicio*/
let labapeynomb=document.getElementById("apeynomb");
let labfechnaci=document.getElementById("fechnaci");    
let labapellidopat=document.getElementById("apellidopat");
let lablongap=document.getElementById("longap");    
let labapellidomat=document.getElementById("apellidomat");
let labedad=document.getElementById("edad");    
let labnombre=document.getElementById("nombre");
let labmesletras=document.getElementById("mesletras");
/*Input fin */

document.getElementById("btnextraer").addEventListener('click', function(){
   boton1.onclick=Validar(labapeynomb, labfechnaci, labapellidopat,lablongap,labapellidomat,labedad,labnombre,labmesletras);
  });

  document.getElementById("btncolorear").addEventListener('click', function(){
    boton2.onclick=colorear();
   });

   document.getElementById("btnlimpiar").addEventListener('click', function(){
    boton3.onclick=limpiar(labapeynomb, labfechnaci, labapellidopat,lablongap,labapellidomat,labedad,labnombre,labmesletras);
   });



function Validar(var1,var2,var3,var4,var5,var6,var7,var8){
    let labapeynomb=document.getElementById("apeynomb");
    let labfechnaci=document.getElementById("fechnaci");  

    if(labapeynomb.value==""){
        alert('Complete todos los campos');
    }else{
        if(labfechnaci.value==""){
            alert('Complete todos los campos');
        }else{

            extraer(var1,var2,var3,var4,var5,var6,var7,var8);

        }
    }
}


function extraer(var1,var2,var3,var4,var5,var6,var7,var8){
    var3.value=SepararApellidoPat(var1.value);
    var5.value=SepararApellidoMat(var1.value);
    var7.value=SepararNombre(var1.value);
    var4.value=(var3.value.length+var5.value.length) ;
    var6.value=CalEdad(var2.value);
    var8.value=MesLetr(var2.value);  
}

function SepararApellidoPat(var1){
 let espacio=" ";

let apellidop=var1.substring(0,var1.indexOf(espacio));
return apellidop;
}

function SepararApellidoMat(var1){
    let espacio=" ";
   let nuevoap=var1.substring(var1.indexOf(espacio)+1,var1.length);
   let apellidom1=nuevoap.substring(0,nuevoap.indexOf(espacio)); 

   return apellidom1;
}

function SepararNombre(var1){
    let espacio=" ";
   let nuevoap=var1.substring(var1.indexOf(espacio)+1,var1.length);
   let nombre1=nuevoap.substring(nuevoap.indexOf(espacio)+1,nuevoap.length); 
   return nombre1;
}

function CalEdad(var1){
    var hoy = new Date();
    var cumpleanos= new Date(var1);
    cumpleanos.setDate(cumpleanos.getDate()+1);

    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}

function MesLetr(var1){
    var cumpleanos= new Date(var1);
    cumpleanos.setDate(cumpleanos.getDate()+1);
    console.log(cumpleanos);
    var meslet= cumpleanos.getMonth();
    console.log(meslet);
    let letra
    switch(meslet){
        case 0:
            letra="Enero"
            break;
            
        case 1:
            letra="Febrero"
            break;

        case 2:
            letra="Marzo"
            break;

        case 3:
            letra="Abril"
            break;

        case 4:
            letra="Mayo"
            break;

        case 5:
            letra="Junio"
            break;

        case 6:
           letra="Julio"
            break;

        case 7:
            letra="Agosto"
            break;

        case 8:
            letra="Septiembre"
            break;

        case 9:
            letra="Octubre"
            break;

        case 10:
            letra="Noviembre"
            break;

        case 11:
            letra="Diciembre"
            break;
        
        default:
            letra="Error"    
        break;
    }

   return letra;

}


/*colorear inicio*/
let flag=0;
function colorear(){
    console.log(flag);
    let azul=document.getElementById("labapynom");
    let azul1=document.getElementById("labapellidopat");
    let azul2=document.getElementById("labapellidomat");
    let azul3=document.getElementById("labnombre");
    let azul4=document.getElementById("labfechnaci");
    let rojo=document.getElementById("lablongap");  
    let rojo1=document.getElementById("labedad");  
    let rojo2=document.getElementById("labmesletras");  

    if(flag==0){
        colocarcolorAzul(rojo);
        colocarcolorAzul(rojo1);
        colocarcolorAzul(rojo2);
        colocarcolorRojo(azul);
        colocarcolorRojo(azul1);
        colocarcolorRojo(azul2);
        colocarcolorRojo(azul3);
        colocarcolorRojo(azul4);
        flag=1;
    }else{

        colocarcolorRojo(rojo);
        colocarcolorRojo(rojo1);
        colocarcolorRojo(rojo2);
        colocarcolorAzul(azul);
        colocarcolorAzul(azul1);
        colocarcolorAzul(azul2);
        colocarcolorAzul(azul3);
        colocarcolorAzul(azul4);

        flag=0;
    }
    console.log(flag);

    function colocarcolorAzul(var1){
        var1.style.backgroundImage= "-moz-linear-gradient(0deg, #00263b 0%, #9ab3f5 100%)";
        var1.style.backgroundImage= "-webkit-linear-gradient(0deg, #00263b 0%, #9ab3f5 100%)";
        var1.style.backgroundImage= "-ms-linear-gradient(0deg, #00263b 0%, #9ab3f5 100%)";
    }

    function colocarcolorRojo(var1){
        var1.style.backgroundImage= "-moz-linear-gradient(0deg, #931a25 0%, #ffcb8e 100%)";
        var1.style.backgroundImage= "-webkit-linear-gradient(0deg, #931a25 0%, #ffcb8e 100%)";
        var1.style.backgroundImage= "-ms-linear-gradient(0deg, #931a25 0%, #ffcb8e 100%)";
    }

}

/*Colorear fin */

/*Limpiar inicio*/
function limpiar(var1,var2,var3,var4,var5,var6,var7,var8){    
    var1.value="";
    var2.value="";
    var3.value="";
    var4.value="";
    var5.value="";
    var6.value="";
    var7.value="";
    var8.value="";
}

/*Limpiar fin */
