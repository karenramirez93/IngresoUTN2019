function Mostrar()
{

	
	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

	
	
		while(numero<0||numero>10||isNaN(numero))
		{
			numero=parseInt(prompt("el numero es incorrecto"));
			
			
		}

		document.getElementById("Numero").value=numero;
		




}//FIN DE LA FUNCIÓN