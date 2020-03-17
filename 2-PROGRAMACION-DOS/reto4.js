var personas=22;
var totalcuenta=0;
var totalaPagar =0;


personas =promt("ingrese su nombre");
totalcuenta=prompt(parseInt("ingrese el total de la cuenta"));

function totalaPagar(personas,totalcuenta) {
    if (personas === "Ana" && totalCuenta ===120) {
        totalaPagar = (totalcuenta/9)+2;
    }else if (personas !="Ana" && totalcuenta ===128) {
        totalaPagar = totalcuenta/9;
    }
        
    }
    Console.log(personas+" "+" debes pagar"+" "+totalaPagar); 
