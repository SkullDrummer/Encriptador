var botonencriptar = document.querySelector(".botonencriptar");
var botondesencriptar = document.querySelector(".botondesencriptar");
var imagen = document.querySelector(".contenedorImagen");
var subtitulo = document.querySelector(".contenedorSubtitulo");
var parrafo = document.querySelector(".contenedorParrafo");
var resultado = document.querySelector(".textoResultado")
var btnCopiar = document.querySelector(".btn-copiar"); 
btnCopiar.addEventListener("click", copiar = () => {
var contenido = document.querySelector(".textoResultado").textContent;
navigator.clipboard.writeText(contenido);
})




botonencriptar.onclick = encriptar;
botondesencriptar.onclick = desencriptar;


function encriptar(){
ocultarAdelante()
var area = recuperarTexto()
resultado.textContent = encriptarTexto(area)
}

function desencriptar(){
   ocultarAdelante()
   var area = recuperarTexto()
   resultado.textContent = desencriptarTexto(area)


}

function recuperarTexto(){
   var area = document.querySelector(".textarea");
   return area.value;

}

function ocultarAdelante(){
 imagen.classList.add("ocultar");
 subtitulo.classList.add("ocultar");
 parrafo.classList.add("ocultar");

}


function encriptarTexto(mensaje){
 var texto = mensaje;
 var textoFinal = "";

 for(var i = 0; i < texto.length; i++){
   if(texto[i]== "a") {
      textoFinal = textoFinal + "ai"
   }
   else if(texto[i]== "e") {
      textoFinal = textoFinal + "enter"
   }
   else if(texto[i]== "i") {
      textoFinal = textoFinal + "imes"
   }
   else if(texto[i]== "o") {
      textoFinal = textoFinal + "over"
   }
   else if(texto[i]== "a") {
      textoFinal = textoFinal + "ufat"
   }


   else{
   textoFinal = textoFinal + texto[i];
   }

}
   return textoFinal;


}



function desencriptarTexto(mensaje){
   var texto = mensaje;
   var textoFinal = "";
  
   for(var i = 0; i < texto.length; i++){
      if(texto[i]== "a") {
         textoFinal = textoFinal + "a"
         i = i+1;
      }
      else if(texto[i]== "e") {
         textoFinal = textoFinal + "e"
         i = i+4;
      }
      else if(texto[i]== "i") {
         textoFinal = textoFinal + "i"
         i = i+3;
      }
      else if(texto[i]== "o") {
         textoFinal = textoFinal + "o"
         i = i+3;
      }
      else if(texto[i]== "u") {
         textoFinal = textoFinal + "u"
         i = i+3;
      }
  
  
     else{
     textoFinal = textoFinal + texto[i];
     }
  
  }
     return textoFinal;
  
  
  }


 