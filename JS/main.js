
let continuar=true 
alert("para ingresar a la calculadora ingrese los siguiemtes datos")
while(continuar){


let nombre = "luca"
let apellido = "molina"
let edad = "19"

if(nombre == prompt(" Ingrese su nombre")&& apellido ==prompt("Ingrese su apellido")&& edad ==prompt("Ingrese su edad")  )
    {
        alert("calculadora abierta")
        while(continuar){
        function sumar (){
            let numeroa= parseInt(prompt("Primer numero"))
            let numerob= parseInt(prompt("Segundo numero"))
            let resultado= numeroa + numerob
            alert("El resultado es "+ resultado)
            let confirmacion = prompt("Deseas hacer otra suma? (si/no)")
            if(confirmacion == "no"){
                continuar=false
             alert("chau") }
             
          
          }
          sumar()}break}
   
else {alert("no esta registrado")}



let confirmacion = prompt("reintentar? (si/no)")
    if(confirmacion == "no"){
        continuar=false
    alert("chau")}
    } 





