
let boton1=document.getElementById("btnextraer")

document.getElementById("btnextraer").addEventListener('click', function(){
   boton1.onclick=Validar();
  })

function Validar(){
    let labapeynomb=document.getElementById("apeynomb");
    let labfechnaci=document.getElementById("fechnaci");  

    if(labapeynomb.value==""){
        alert('Complete todos los campos');
    }else{
        if(labfechnaci.value==""){
            alert('Complete todos los campos');
        }else{
            extraer()
        }
    }
}

function extraer(){
    let labapeynomb=document.getElementById("apeynomb");
    let labfechnaci=document.getElementById("fechnaci"); 
    let labapellidopat=document.getElementById("apellidopat");
    let lablongap=document.getElementById("longap");    
    let labapellidomat=document.getElementById("apellidomat");
    let labedad=document.getElementById("edad");    
    let labnombre=document.getElementById("nombre");
    let labmesletras=document.getElementById("mesletras");  
   
    labedad.value=CalEdad(labfechnaci.value);
    labmesletras.value=MesLetr(labfechnaci.value);  
    labapellidopat.value=SepararApellidoPat(labapeynomb.value);
    labapellidomat.value=SepararApellidoMat(labapeynomb.value);
    labnombre.value=SepararNombre(labapeynomb.value);      
    lablongap.value=(labapellidopat.value.length+labapellidomat.value.length) ;

}

function SepararApellidoPat(var1){
 let espacio=" ";

let apellidop=var1.substring(0,var1.indexOf(espacio));
let nuevoap=var1.substring(var1.indexOf(espacio)+1,var1.length);
let apellidom=nuevoap.substring(0,nuevoap.indexOf(espacio));
let nombre=nuevoap.substring(nuevoap.indexOf(espacio)+1,nuevoap.length);

return apellidop;
}

function SepararApellidoMat(var1){
    let espacio=" ";
   let nuevoap=var1.substring(var1.indexOf(espacio)+1,var1.length);
   let apellidom=nuevoap.substring(0,nuevoap.indexOf(espacio));
   
   return apellidom;
}

function SepararNombre(var1){
    let espacio=" ";
   let nuevoap=var1.substring(var1.indexOf(espacio)+1,var1.length);
   let nombre=nuevoap.substring(nuevoap.indexOf(espacio)+1,nuevoap.length);
   
    return nombre;
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