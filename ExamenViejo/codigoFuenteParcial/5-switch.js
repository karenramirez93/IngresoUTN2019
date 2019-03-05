//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mes;
    mes = prompt("ingrese mes del Año:").toLowerCase();
    switch (mes)
    {
        case "enero":
        case"febrero":
           alert("Veranito!!!");
           break;
        default:
            alert("Extraño Enero Y Febrero")
            
    }
	
	
}

