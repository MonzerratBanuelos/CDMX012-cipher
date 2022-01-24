import cipher from './cipher.js';
const clickSaludo = document.getElementById("clickSaludo")
const titulo = document.getElementById("titulo")

clickSaludo.addEventListener("click",function(){ 
  titulo.innerHTML = cipher.saludar()
});
//AQUI SE CONFIGURA EL BOTON QUE MUESTRA PAGINA DE CIFRADO 
let btnCifrator = document.getElementById("startCifrator"); 
function showCipherPage(){
  let cipherPage = document.getElementById("cipherpage").style.display='block';
  document.getElementById("root").style.display="none";
  return cipherPage
}
  btnCifrator.addEventListener("click",showCipherPage);
  //AQUI SE CONFIGURA EL BOTON QUE MUESTRA PAGINA DE INICIO 
let btnReturn = document.getElementById("btnReturn"); 
function backtoMenu(){
  let cipherPage = document.getElementById("root").style.display='block';
  document.getElementById("cipherpage").style.display="none";
  return cipherPage
}
  btnReturn.addEventListener("click",backtoMenu);
//AQUI SE CONFIGURA LA PAGINA DE CIFRADO
  //donde se esta diciendo que encode llama a mensaje y desplazamiento 
  /*function encode(mensaje,desplazamiento) {
    var encoded = "";
    for (let i = 0; i < mensaje.length; i++) {
      let letraAscii = mensaje.charCodeAt(i);
      if(letraAscii >= 65 && letraAscii <= 90){
      encoded += String.fromCharCode(((letraAscii - 65 + desplazamiento) % 26) + 65);
      }else{
        encoded += String.fromCharCode(letraAscii);
      }
    } console.log(encoded,"resultado")
    return encoded;
  } */
//AQUÍ SE CONFIGURA LA FORMULA DE DESCIFRADO  
 /* function decode(mensaje,desplazamiento) {
    let decoded = "";
    for (let i = 0; i < mensaje.length; i++) {
      let letraAscii = mensaje.charCodeAt(i);
      if(letraAscii >= 65 && letraAscii <= 90){
      decoded += String.fromCharCode(((letraAscii - 65 - desplazamiento) % 26) + 65);
      }else{
        decoded += String.fromCharCode(letraAscii);
      }
    } console.log(decoded,"resultado")
    return decoded;
  } */
//AQUÍ SE CONFIGURA BOTÓN QUE MUESTRA TEXTO EN PANTALLA Y EN MAYUSCULAS 
  let btncifrar = document.getElementById("btn1");
  function showText(){
    let mensaje = document.getElementById("textToCipher").value
    //mensaje = mensaje.toUpperCase()
   // console.log(mensaje);
    let desplazamiento = document.getElementById("displacement").value
    desplazamiento = parseInt(desplazamiento);
    //console.log(desplazamiento);
    
    // decode(mensaje,desplazamiento);
    let mensajeCifrado = document.getElementById("cipherText");
    mensajeCifrado.innerHTML=cipher.encode(mensaje,desplazamiento);
    }
btncifrar.addEventListener("click",showText);
//btncifrar.addEventListener("click",encoded);
//Lo de arriba es el manager que dice que al escuchar click muestre la función 

  //PASOS POR HACER
  //CONVERTIR A ASCII
  //AUMENTAR EL DESPLAZAMIENTO
