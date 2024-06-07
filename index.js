function edad (anioActual, anioDeNacimiento) {
    resultado = anioActual - anioDeNacimiento
}
edad ( 2024, prompt("ingrese su Ano de nacimiento")) 
let edadPermitida = 18
while ( resultado >= edadPermitida){
    option = prompt ("eres mayor de 18, Ingrese una opcion: \n 1. Vodka \n 2. whisky \n 3.Gin \n 4. Fernet \n 0.salir");
    if (option == 1){
        alert("Vodka $3000");
    }else if(option == 2){
        alert("Whisky $7000");
    }else if(option == 3){
        alert("Gin $4000");
    }else if(option == 4){
        alert("Fernet $6000");
    }else if(option == 0){
        alert ("Gracias vuelva pronto");
    }else {
        alert("el valor ingresado no corresponde a nignuna opciona, Gracias")
    }
}
while (resultado < edadPermitida){
    alert("usted todavia no es mayor de edad, vuelva pronto")
}