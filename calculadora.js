

function inserir(numeros ){

   var numero = document.getElementById("visor-texto").innerHTML;
    
   document.getElementById("visor-texto").innerHTML = numero + numeros;


}

function linpando(){
  document.getElementById('visor-texto').innerHTML = " ";
}

function apagark(){
    var caractere = document.getElementById("visor-texto").innerHTML;
    document.getElementById("visor-texto").innerHTML = caractere.substring(0, caractere.length - 1);
}

function calculo(){

    var resultado = document.getElementById("visor-texto").innerHTML;
    if(resultado){
        document.getElementById("visor-texto").innerHTML = eval(resultado);
    } else {
        document.getElementById("visor-texto").innerHTML = ""
    }
        
}