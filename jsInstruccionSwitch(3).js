function Mostrar()
{
//tomo el mes 
var mesDelAnio = document.getElementById('mes').value;

//alert (mesDelAnio);
switch (mesDelAnio)
{
    case "Enero":
    case "Marzo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
    case "Mayo":
    alert("Este mes tiene 31 dias");
    break;

    case "Abril":
    case "Junio":
    case "Septienbre":
    case "Noviembre":
    alert("Este mes tiene 30 dias");
    break;

    case "Febrero":
    alert("Este mes no tiene mas de 29 dias");
    break;



}
	
	


}//FIN DE LA FUNCIÓN