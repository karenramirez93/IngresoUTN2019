function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta=true;


while (respuesta==true)
{
	numero=parseInt(prompt("Ingrese un numero"));
	 
	while (isNaN(numero))
	{
		alert("No es un numero");
		numero=parseInt(prompt("Ingrese un numero"));
	}
	if (numero>=0)
	{
		positivo=positivo+numero;

	}
    else {
		negativo=negativo*numero;
		contador=contador+1;

	}
	respuesta=confirm("desea continuar?");
}

document.getElementById('suma').value=positivo;
if (contador==0)
{
	negativo=0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN