//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {

var numero;
var maximo;
var minimo;
var promedio;
var suma = 0;
var pares = 0;
var flag =0;
var respuesta;
var contador = 0;
 do
 {
     numero = parseInt(prompt("ingrese un numero Positivo:"));
     while (numero<=0 || isNaN(numero))
     {
        numero = parseInt(prompt("ERROR. ingrese un numero Positivo:")); 
     }
    suma = suma + numero;
    contador++;
    if ( numero % 2==0)
    {
        pares++;
    }
    if(flag==0||numero>maximo)
    {
        maximo=numero;
    }
    if (flag==0||numero<minimo)
    {
        minimo=numero;
        flag=1
    }
    respuesta = confirm("Desea continuar?:");

 }while (respuesta);
 promedio = suma / contador;
 document.write("a) la cantidad de números pares es: "+ pares + "<br>");
 document.write("b) el promedio de todos los números ingresados es: "+ promedio.toFixed(2) + "<br>");
 document.write("c) la suma de todos los números es: "+ suma + "<br>");
 document.write("d) El número máximo es: "+ maximo + "<br>");
 document.write("   El número minimo es: "+ minimo + "<br>");

 

}

