function Mostrar()
{
//tomo la edad  
var edad;
edad=parseInt(document.getElementById("edad").value);
if (edad<13)
{
    alert("Es un niño");

}
else if (edad<17)
{
    alert("Sos Adolescente");

}

else{
    alert("sos adulto");
}

}//FIN DE LA FUNCIÓN
