var fs = require('fs');
function fibonazi(n){
  if (n <= 1) return n;
  return fibonazi(n - 1) + fibonazi(n - 2);
}
try {
    var data = fs.readFileSync('number.txt', 'utf8');
    let n = data.toString();
    console.log("Ingrese un numero: "+n);
    let num = fibonazi(n);
    console.log("F("+n+") = "+num);
} catch(error) {
    console.log("Ha habido un error con la lectura del archivo, intente nuevamente.");
}