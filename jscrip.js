//Funcion para iniciar juego y desarrollar el juego
function inicioJuego(){
    arrayValPalOculta=[];
    arrayValPalErron=[];
    palabraAdivinar="";
    console.log(arrayValPalErron);
    console.log(arrayValPalOculta);
    dibujoAhorcado(10);//limpio la pantalla;
    dibujoAhorcado(0);//Dibujo la base del ahorcado
    eliminarLista('palabra-oculta');
    tituloFinal("");
    nuevaPalabra.value="";
    document.getElementById('ingreso-palabra').disabled=false;
    document.getElementById('ingreso-palabra').focus();
    //Obtenemos una palabra(oculta) para el juego
    palabraAdivinar=palabraAlAzar(palabrasOcultas);
    //creo un fragmento HTML con la palabra a adivinar
    res=fragmentoHTML(palabraAdivinar);
    let lista=document.getElementById('palabra-oculta');
    lista.appendChild(res);
    //inhabilito el boton y el input para agregar nuevas palabras
    boton.disabled=true;
    nuevaPalabra.disabled=true;
    //capturo el evento del teclado
  
    document.getElementById('ingreso-palabra').addEventListener("input",()=>{
        const tecla=document.getElementById('ingreso-palabra').value;//obtengo el valor del input
        let validador=palMayusculas(tecla);
        //si es mayuscula entonces
        if (validador){
            let existePalabra=palabraAdivinar.includes(tecla);//valido si la letra se encuentra en la palabra
            if (existePalabra){
                if (!arrayValPalOculta.includes(tecla)) {
                    arrayValPalOculta.push(tecla);//agregamos al array para comparar    
                    for (let i = 0; i < lista.childElementCount; i++) {
                        if (lista.childNodes[i].textContent===tecla) {
                            lista.childNodes[i].classList.add('lista_item');
                        }           
                    }
            
                }
            } else {
                if (arrayValPalErron.includes(tecla)) {
                } else {
                    arrayValPalErron.push(tecla);
                    dibujarPalabra(tecla);
                    if (arrayValPalErron.length<10) {
                        dibujoAhorcado(arrayValPalErron.length);  
                    }
                    if(arrayValPalErron.length==9){
                        tituloFinal(`Fin del juego:palabra oculta ${palabraAdivinar}`);
                        document.getElementById('ingreso-palabra').value=""; 
                        document.getElementById('ingreso-palabra').disabled=true;
                        eliminarLista('letra-tirada');
                        eliminarLista('palabra-oculta');
                        boton.disabled=false;
                        nuevaPalabra.disabled=false;
                    }   
                    
                }
            }

            if (convertirString(arrayValPalOculta).length===caracteresUnicos(palabraAdivinar).length) {
                tituloFinal("¡Felicidades ganaste el juego!");
                dibujoAhorcado(10);
                eliminarLista('letra-tirada');
                document.getElementById('ingreso-palabra').value=""; 
                document.getElementById('ingreso-palabra').disabled=true;
                boton.disabled=false;
                nuevaPalabra.disabled=false;  
            }

        }else{
            alert("Solo se permite letras Mayusculas");
        } 
    });

//otro evento para borrar el campo    
document.getElementById('ingreso-palabra').addEventListener("beforeinput",()=>{
    document.getElementById('ingreso-palabra').value="";
    
})

}
//Funcion para dibujar ahorcado
function dibujoAhorcado(tecla){
        let pantalla=document.querySelector("canvas");
        let pincel=pantalla.getContext("2d");
        if(tecla===0){
            pincel.beginPath();
            pincel.moveTo(55,350);
            pincel.fillStyle="lightblue";
            pincel.lineTo(5,395);
            pincel.lineTo(105,395);
            pincel.closePath();
            pincel.fill();
    
        }
        if(tecla===1){
            pincel.beginPath();
            pincel.moveTo(55,350);
            pincel.fillStyle="lightblue";
            pincel.lineTo(55,100);
            pincel.closePath();
            pincel.stroke()
            
        }
        if(tecla===2){
            pincel.beginPath();
            pincel.moveTo(55,100);
            pincel.fillStyle="lightblue";
            pincel.lineTo(155,100);
            pincel.closePath();
            pincel.stroke()
            
        }
        if(tecla===3){
            pincel.beginPath();
            pincel.moveTo(155,100);
            pincel.fillStyle="lightblue";
            pincel.lineTo(155,130);
            pincel.closePath();
            pincel.stroke()
            
        }
        if(tecla==4){
            pincel.beginPath();
            pincel.arc(155,150,20,0,2*3.14);
            pincel.fill();
            
        }
        if(tecla===5){
            pincel.beginPath();
            pincel.strokeStyle="lightblue";
            pincel.moveTo(155,170);
            pincel.lineTo(155,250);
            pincel.closePath();
            pincel.stroke()
            
        }
        if(tecla===6){
            pincel.beginPath();
            pincel.strokeStyle="lightblue";
            pincel.moveTo(155,250);
            pincel.lineTo(195,290);
            pincel.closePath();
            pincel.stroke()
            
        }
        if(tecla===7){
            pincel.beginPath();
            pincel.strokeStyle="lightblue";
            pincel.moveTo(155,250);
            pincel.lineTo(115,290);
            pincel.closePath();
            pincel.stroke()
            
        }
        if(tecla===8){
            pincel.beginPath();
            pincel.strokeStyle="lightblue";
            pincel.moveTo(155,200);
            pincel.lineTo(115,170);
            pincel.closePath();
            pincel.stroke()
            
        }
        if(tecla===9){
            pincel.beginPath();
            pincel.strokeStyle="lightblue";
            pincel.moveTo(155,200);
            pincel.lineTo(195,170);
            pincel.closePath();
            pincel.stroke()
            
        }
        if(tecla===10){
            pincel.beginPath();
            pincel.clearRect(0,0,300,350);
            
        }
    
    }






