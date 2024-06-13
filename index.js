function edad (anioActual, anioDeNacimiento) {
    resultado = anioActual - anioDeNacimiento
}
edad ( 2024, prompt("ingrese su Ano de nacimiento")) 
let edadPermitida = 18
function producto (id, name, stock, price){
    this.id=id;
    this.name=name;
    this.stock=stock;
    this.price=price;
}
const producto_1 = new producto ("aaa000", 'vodka', 4, 3000)
const producto_2 = new producto ("baa000", 'whisky', 8, 7000)
const producto_3 = new producto ("caa000", 'gin', 9, 4000)
const producto_4 = new producto ("daa000", 'fernet', 3, 6000)
const producto_5 = new producto ("eaa000", 'coca cola', 50, 1500)
const producto_6 = new producto ("faa000", 'sprite', 27, 1500)
const producto_7 = new producto ("gaa000", 'jugo de naranja', 40, 1000)
const producto_8 = new producto ("haa000", 'bebidaa energetica', 70, 800)
let alcohol = ['\n 1 Vodka', '\n 2 whisky', '\n 3 gin', '\n 4 fernet'];
let bebidasSinAlcohol = ['\n 5 Coca cola', '\n 6 sprite', '\n 7 Juego de Naranja', '\n 8 bebida energetica'];
let permisoAceptado = alcohol.concat(bebidasSinAlcohol);
while ( resultado >= edadPermitida){
    option = prompt ("eres mayor de 18, Ingrese una opcion: " + permisoAceptado + '\n 0 gracias vuelva pronto');
    if (option == 1){
        const venta1 = prompt("Vodka $3000, cauntos desea llevar?");
        producto_1.stock -= venta1;
        if (venta1 > 0) {
            alert('quedan ' + producto_1.stock)
            }else if(venta1 < 0){
                alert("no haay stock")
            }
    }else if(option == 2){
        const venta2 = prompt("Whisky $7000, cuanto desea llevar?");
        producto_2.stock -= venta2;
        if (venta2 > 0) {
            alert('quedan ' + producto_2.stock)
            }else if(venta2 < 0){
                alert("no haay stock")
            }
    }else if(option == 3){
        const venta3 = prompt("Gin $4000, cuanto desea llevar?");
        producto_3.stock -= venta3;
        if (venta3 > 0) {
            alert('quedan ' + producto_3.stock)
            }else if(venta3 < 0){
                alert("no haay stock")
            }
    }else if(option == 4){
        const venta4 = prompt("Fernet $6000, cuanto desea llevar?");
        producto_4.stock -= venta4;
        if (venta4 > 0) {
            alert('quedan ' + producto_4.stock)
            }else if(venta4 < 0){
                alert("no haay stock")
            }
    }else if(option == 5){
        const venta5 = prompt("Coca cola $1500, cuanto desea llevar?");
        producto_5.stock -= venta5;
        if (venta5 > 0) {
            alert('quedan ' + producto_5.stock)
            }else if(venta5 < 0){
                alert("no haay stock")
            }
    }else if(option == 6){
        const venta6 = prompt("sprite $1500, cuanto desea llevar?");
        producto_6.stock -= venta6;
        if (venta6 > 0) {
            alert('quedan ' + producto_6.stock)
            }else if(venta6 < 0){
                alert("no haay stock")
            }
    }else if(option == 7){
        const venta7 = prompt("Jugo de naranja $1000, cuanto desea llevar?");
        producto_7.stock -= venta7;
        if (venta7 > 0) {
            alert('quedan ' + producto_7.stock)
            }else if(venta7 < 0){
                alert("no haay stock")
            }
    }else if(option == 8){
        const venta8 = prompt("bebida energetica $800, cuanto desea llevar?");
        producto_8.stock -= venta8;
        if (venta8 > 0) {
            alert('quedan ' + producto_8.stock)
            }else if(venta8 < 0){
                alert("no haay stock")
            }
    }else if(option == 0){
        alert ("Gracias vuelva pronto");
    }else {
        alert("el valor ingresado no corresponde a nignuna opciona, Gracias")
    }
}
while (resultado < edadPermitida){
    alert("usted todavia no es mayor de edad, vuelva pronto")
}