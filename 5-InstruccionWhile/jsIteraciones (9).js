function Mostrar()
{

	var flag=0;
	// declarar variables
	var maximo;
	var minimo;
	var numero;

	
	var respuesta=true;

	while(respuesta!=false);
	{
		numero=parseInt(prompt("ingrese un numero"));
		while (isNaN(numero))
		{
			numero=parseInt(prompt("no es un numero ,ingrese un numero"));
		}
	if (flag==0||numero>maximo)
	{
		maximo=numero;

	}

	if (flag==0||numero<minimo)
	{
		minimo=numero;
		flag=1;

	}
	respuesta=confirm("desea continuar?");

	}
	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo;




}//FIN DE LA FUNCIÓN