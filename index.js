/* function viaje(costo = Number) {


    alert(`el total de su viajees de ${costo}`)
    let metodoPago = parseInt(prompt("seleccione metodo de pago \n 1- credito \n 2- debito \n"));

    //*metodo de pago para seleccion credito
    if (metodoPago === 1) {

        let pago = parseInt(prompt(`el total de su compra es ${costo} \n en cuantas cuotas desea pagar? \n 3 - 6 - 12`));


        if (pago === 3) {


            total = costo / 3

            alert(`su total a pagar por ${pago} cuotas es de ${total * 1.35}`);

            pagar();
        }


        else if (pago === 6) {

            total = costo / 6

            alert(`su total a pagar por ${pago} cuotas es de ${total * 1.85}`)
            pagar();

        }
        else if (pago === 12) {

            total = costo / 12

            alert(`su total a pagar por ${pago} cuotas es de ${total * 1.95}`)
            pagar();

        }



    }
    //*metodo de pago selccion  debito
    else if (metodoPago === 2) {

        alert(" seleccione su banco para realizar su pago")

        let banco = parseInt(prompt("1- banco estado \n 2- banco de chile"));

        if (banco === 1) {

            alert("bienvenido a banco estado")

            let usuario = prompt("ingresa tu nombre de usuario")
            alert(`bienvenido ${usuario}`)

            contraseña = parseInt(prompt("ingresa tu clave de 4 digitos"));

            alert("dirigiendo al pago")

            pagar();


        } else if (banco === 2) {
            alert("bienvenido a banco de chile")

            let usuario = prompt("ingresa tu nombre de usuario")
            alert(`bienvenido ${usuario}`)

            contraseña = parseInt(prompt("ingresa tu clave de 4 digitos"));

            alert("dirigiendo al pago")


            pagar();

        }


    }


    function pagar() {

        let pagar = prompt("desea pagar ahora? \n si \n no")

        if (pagar === "si") {
            let usuario = prompt("ingrese su usuario");
            alert(`bienvenido ${usuario}`)

            let password = prompt("ingrese su contraseña")

            if (password == 1234) {

                alert("procesando pago...")
                alert("pagado con exito¡¡")

            } else {
                alert("contraseña incorrecta, cerrando ventana de pago")
            }

        } else {
            alert(" cerrando ventana de pagos")
        }
    }
}



let pais = prompt("Que pais te gustaria visitar? \n Moscu - Plaza roja \n Nueva Zelanda \n Croacia \n escribe esc para salir").toLocaleLowerCase();


while (pais != "esc") {

    switch (pais) {


        case "moscu":

            viaje(12000);


            break
        case "nueva zelanda":

            viaje(28990)

            break;

        case "croacia":
            viaje(48990)

            break;

        default:

            alert("opcion ingresada no es valida")
            break;
    }
    pais = prompt("Que pais te gustaria visitar? \n Moscu - Plaza roja \n Nueva Zelanda \n Croacia escribe esc para salir").toLocaleLowerCase();

} */


// VARIABLES GLOBALES

const precioGibson = 44500;
const precioFender = 20480;
const precioIbanez = 17600;
const precioJackson = 15300;
const precioGretsch = 19260;

function guitarraPrecio(precio=Number){

    alert(`Su guitarra tiene un valor de ${precio}`);

    // PAGO DIFERIDO A MESES
    let total = parseInt(prompt(`El monto total de su compra es de $${precio} m.x.n \n ¿Desea pagar a meses? \n 3 \n 6 \n 12 \n 1`))

    if (total === 3) {
        let precioFinal=((precio/3)* 0.16);
        alert (`Su total a pagar a ${total} mensualidades es de $${(precioFinal).toFixed(2)} m.x.n con iva incluido`);

    }

        else if (total === 6) {
            precioFinal=((precio/6)* 0.16);
            alert (`Su total a pagar a ${total} mensualidades es de $${(precioFinal).toFixed(2)} m.x.n con iva incluido`);
        
        }

        else if (total === 12) {
            precioFinal=((precio/12)* 0.16);
            alert (`Su total a pagar a ${total} mensualidades es de $${(precioFinal).toFixed(2)} m.x.n con iva incluido`);
    
        }

        else if (total === 1) {
            precioFinal=(precio * 0.16)
            alert (`Su total a pagar es de $${precioFinal} m.x.n con iva incluido`);
        }

    return false;
}

let modeloGuitarra = prompt("Selecciona el modelo de guitarra que te gustaría comprar \n Gibson Sg \n Fender Telecaster \n Ibanez Rg \n Jackson Js \n Gretsch Hollow \n Escribe salir para terminar").toLocaleLowerCase();

    while (modeloGuitarra != "salir") {
        switch (modeloGuitarra) {
            case "gibson sg":
            guitarraPrecio (precioGibson);
            break;

            case "fender telecaster":
            guitarraPrecio (precioFender);
            break;

            case "ibanez rg":
            guitarraPrecio (precioIbanez);
            break;

            case "jackson js":
            guitarraPrecio (precioJackson);
            break;

            case "gretsch hollow":
            guitarraPrecio (precioGretsch);
            break;

            default: 
            alert ("¡¡Datos no válidos!!");
            modeloGuitarra = prompt("Selecciona el modelo de guitarra que te gustaría comprar \n Gibson Sg \n Fender Telecaster \n Ibanez Rg \n Jackson Js \n Gretsch Hollow \n Escribe salir para terminar").toLocaleLowerCase();
        }

        alert(`¡¡Gracias por su compra!!`)

    
    }

    alert ("¡¡Gracias por tu visita, te esperamos pronto!!");