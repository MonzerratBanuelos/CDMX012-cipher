import cipher from './cipher.js';
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
  document.getElementById("textToCipher").value="";
  document.getElementById("cipherText").value="";
  return cipherPage
}
  btnReturn.addEventListener("click",backtoMenu);


//AQUI SE CONFIGURA EL BOTON DE DESCIFRAR
  let btndecode = document.getElementById("btn2");
  function showDecode() {
    let mensaje = document.getElementById("textToCipher").value
    let offset = document.getElementById("offset").value
    offset = parseInt(offset);
    let mensajeCifrado = document.getElementById("cipherText");
    mensajeCifrado.innerHTML=cipher.decode(offset,mensaje);
  }
  btndecode.addEventListener("click",showDecode);

//AQUÍ SE CONFIGURA BOTÓN QUE MUESTRA TEXTO EN PANTALLA 
  let btncifrar = document.getElementById("btn1");
  function showText(){
    let mensaje = document.getElementById("textToCipher").value
    let offset = document.getElementById("offset").value
    offset = parseInt(offset);
    let mensajeCifrado = document.getElementById("cipherText");
    mensajeCifrado.innerHTML=cipher.encode(offset,mensaje);
    }
btncifrar.addEventListener("click",showText);
//btncifrar.addEventListener("click",encoded);
