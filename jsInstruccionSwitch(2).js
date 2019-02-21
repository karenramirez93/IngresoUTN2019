function Mostrar()
{
//tomo el mes 
var mesDelAnio = document.getElementById('mes').value;



switch (mesDelAnio)
{
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
    case "Enero":
    case "Febrero":
     alert("Ya pasamos el frio, ahora calor!!!");
     break;
        case "Julio":
        case "Agosto":
        alert ("Abrigate que hace frio");
        break;
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
        alert("Falta para el invierno");
        break;
    }
    

    






}//FIN DE LA FUNCIÓN