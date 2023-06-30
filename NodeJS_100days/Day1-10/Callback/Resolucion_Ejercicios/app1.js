function sumar (num1,num2,callback){
  const suma = num1 + num2;
  callback(suma);
}

function callbackFunc(resultado){
  console.log(`El resultado de la suma es ${resultado}`);
}

sumar(31,25,callbackFunc);