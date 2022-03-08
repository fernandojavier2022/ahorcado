
//Defino variables a utilizar
let palabrasOcultas=["ALURA","CASA"];
let boton = document.getElementById('btn-altaPalabra');
let nuevaPalabra=document.getElementById('texto');
let arrayValPalOculta=[];
let arrayValPalErron=[];
let palabraAdivinar;

//funcion para convertir un array a un string
    let convertirString=function(arr){
        return arr.join('');
    };
//Funcion para obtener una palabra del array al azar
function palabraAlAzar(arr) {
    var palabraAleatoria=arr[Math.floor(Math.random()*arr.length)];
    //console.log(palabraAleatoria);
    return palabraAleatoria;
}
//funcion para agregar fragmento de codigo al DOM(una lista)
function fragmentoHTML(str) {
    const fragment=document.createDocumentFragment();
    for (const letra of str) {
        const itemList=document.createElement('li');
        itemList.textContent=letra;
        itemList.setAttribute("class","milista");
        fragment.appendChild(itemList);
    }
    return fragment;
}

//funcion para eliminar una lista
function eliminarLista(str) {
    const listaOculta=document.getElementById(str);
    if (listaOculta.hasChildNodes()) {
        while (listaOculta.childNodes.length>=1) {
            listaOculta.removeChild(listaOculta.firstChild);
        }
        
    }

}
//funcion str para caracteres unicos
function caracteresUnicos(str){
    let unicos="";
    for(letra of str){
        if (!unicos.includes(letra)){
            unicos=unicos+letra;
        }
    }
    return unicos;
}

//funcion para reiniciar juego
function reiniciarJuego(){
    location.reload();
}


//Funcion para validar un string en mayusculas
function validarString(str){
    const expReg=/^[A-Z,Ñ]*[A-Z,Ñ]$/;
    const salidaReg=expReg.test(str);
    return salidaReg;
}
//Funcion para agregar texto si ganaste o perdiste el juego
function tituloFinal(str){
    const titulo=document.getElementById('titulo');
    titulo.textContent=str    
}
//funcion para dibujar palabra perdedora
function dibujarPalabra(str) {
    const listaPerdedora=document.getElementById('letra-tirada');
    const letraDibujo=document.createElement('li');
    const palabraPintar=str;
    letraDibujo.textContent=palabraPintar;
    listaPerdedora.appendChild(letraDibujo)
}
//funcion para juego ahorcado solo mayusculas
function palMayusculas(key){
    let salida=["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
    "Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z",""].includes(key);
    return salida;
}
//funcion para agregar palabra al array en mayusculas
const agregarPalabra=()=>{ 
    const valorPalabra=nuevaPalabra.value;//obtengo el texto ingresado del input
    if (valorPalabra==""){
        alert("Introduzca una palabra en Mayusculas")
        nuevaPalabra.focus();
    }else {
        const resultadoValidador=validarString(valorPalabra);
        console.log(resultadoValidador);
        //si validador es true comparo las palabras en el array con la nueva
        if (resultadoValidador) {
            let flag=false;
            for (let i = 0; i < palabrasOcultas.length; i++) {
                if (palabrasOcultas[i]==valorPalabra) {
                    flag=true;
                    break;
                }
            }
            if (flag==false){
                palabrasOcultas.push(valorPalabra);
                nuevaPalabra.value="";
                nuevaPalabra.focus();
                console.log(palabrasOcultas);
                alert(`palabra: ${valorPalabra}  fue agregada exitosamente`);
            }else{
                alert(`La palabra: ${valorPalabra} ya existe`)
                nuevaPalabra.value="";
                nuevaPalabra.focus();
            }    
            
        } else {
            alert("Solo se admite palabras en Mayusculas");
            nuevaPalabra.value="";
            nuevaPalabra.focus();
        }

    }
};

boton.addEventListener("click",agregarPalabra);
let btnIniciarJuego=document.getElementById('btn-juego');
btnIniciarJuego.addEventListener("click",inicioJuego);
let btnReiniciarJuego=document.getElementById('btn-reiniciar');
btnReiniciarJuego.addEventListener("click",reiniciarJuego);






