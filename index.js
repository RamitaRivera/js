const aniodeNacimiento = prompt('ingrese su ano de nacimiento:');
let edad = 2024 - aniodeNacimiento;
if (edad < 18){
   option = prompt('Usted es menor de edad, ingrese una opcion:  1. Jugos  2. Bebidas Energeticas  0. salir');
if (option == 1){
    alert("Jugo $500");
} else if (option == 2){
    alert("Bebidas energeticas $100 c/u");
}
} else  if (edad >= 18)  {
 option = prompt('Usted es mayor de edad, ingrese una opcion:  1. Jugos  2. Bebidas Energeticas  3. Vodka  4. Whisky  0. salir ');
 if (option == 1){
    alert("Jugo $500");
} else if (option == 2){
    alert("Bebidas energeticas $100 c/u");
} else if( option == 3){
    alert("Vodka $2000");
} else if( option == 4){
    alert("Whisky $7000")
} else if (option == 0){
    alert("Gracias por visitar nuestra paguina, Vuelva pronto!")
} 
}