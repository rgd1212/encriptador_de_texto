const ingresoTexto = document.getElementById("textEncriptar");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("buttonCopiar");
const mensajeFinal = document.getElementById("mensaje_final");
const muneco = document.getElementById("muneco");
const rigthInfo = document.getElementById("rigthInfo");
const rigth = document.getElementById("rigth");

let reemplazar = [
  ["e","enter"],
  ["i","imes"],
  ["a","ai"],
  ["o","ober"],
  ["u","ufat"]
];

botonEncriptar.addEventListener("click",()=>{
  const texto = ingresoTexto.value.toLowerCase();
  if(texto !=""){

    function encriptar(newText){
      for (let i = 0; i < reemplazar.length; i++) {
        if(newText.includes(reemplazar[i][0])){
          newText = newText.replaceAll(reemplazar[i][0],reemplazar[i][1]);
        };
      };
      return newText;
    }
  }else{
    alert("Ingrese un texto a encriptar")
  }
  const textoEncriptado = encriptar(texto);

  mensajeFinal.innerHTML = textoEncriptado;
  ingresoTexto.value="";
  muneco.classList.add("oculto");
  rigthInfo.style.display = "none";
  botonCopiar.style.display = "block"
  rigth.classList.add("ajustar");
  mensajeFinal.classList.add("ajustar")
})


botonDesencriptar.addEventListener("click",()=>{
  const texto = ingresoTexto.value.toLowerCase();
  function desencriptar(newText) {
    for (let i = 0; i < reemplazar.length; i++) {
      if (newText.includes(reemplazar[i][1])) {
        newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
      }
      
    }
    return newText;
  }
  const textDesencriptado = desencriptar(texto);
  mensajeFinal.innerHTML = textDesencriptado;

  muneco.classList.add("oculto");
  ingresoTexto.value = "Ningún Mensaje fue encontrado";
  
  rigthInfo.style.display = "none";
  botonCopiar.style.display = "block"
  rigth.classList.add("ajustar");
  mensajeFinal.classList.add("ajustar")
})


botonCopiar.addEventListener("click",()=>{
  let texto = mensajeFinal;
    texto.select();
    document.execCommand("copy");
    alert("Texto Copiado");

    mensajeFinal.innerHTML = "";

    muneco.classList.remove("oculto");
    rigthInfo.style.display = "block";
    botonCopiar.style.display = "none"
    rigth.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar")
    ingresoTexto.focus();
})