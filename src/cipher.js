const cipher = {
  encode: function (mensaje,desplazamiento) {
    var encoded = "";
    for (let i = 0; i < mensaje.length; i++) {
      let letraAscii = mensaje.charCodeAt(i);
      if(letraAscii >= 65 && letraAscii <= 90){
      encoded += String.fromCharCode(((letraAscii - 65 + desplazamiento) % 26) + 65);
      }else{
        encoded += String.fromCharCode(letraAscii);
      }
    } //console.log(encoded,"resultado")
    return encoded;
  } //,
  //decode: function (mensaje,desplazamiento) {
  //  var decoded= "";
  //for (let i = 0; i < mensaje.length; i++) {
  //  let letraAscii = mensaje.charCodeAt(i);
  //  if(letraAscii >= 65 && letraAscii <= 90){
  //  decoded += String.fromCharCode(((letraAscii - 65 - desplazamiento) % 26) + 65);
  //  }else{
  //    decoded += String.fromCharCode(letraAscii);
  //  }
  //} console.log(decoded,"resultado")
  //return decoded;
//}
};
export default cipher;
