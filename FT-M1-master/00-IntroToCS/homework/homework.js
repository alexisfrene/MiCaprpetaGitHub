'use strict'

function BinarioADecimal(num) {//Ingresan un numero "10011"
  // tu codigo aca
  var posicion = num.length-1;//"10011" daria 4 = ultimo 1;
  var resultado=0;
  //console.log(num[2]);
  for(let i = 0; i < num.length-1; i++){// 2 4 
    //aca toma el ultimo 1, lo multiplica por
    
    var dada = Number(num[posicion])*2**i;
    //console.log("dada  " +Number(num[posicion]) );
    //console.log("Exponenete " + i);
    //console.log(dada);
    posicion--;
    resultado = resultado + dada;
    //console.log("resultado " +resultado);
  }
  return resultado;

}

function DecimalABinario(num) {
  // tu codigo aca


}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}