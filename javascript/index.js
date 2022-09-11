//EN LA WEB SE LE MUESTRA UNA SERIE DE FOTOS CON DISEÑO DE TORTAS CON SU RESPECTIVO NOMBRE, SE LE PREGUNTARA SI SU DISEÑO
// ESTA DISPONIBLE

class tortas {
    constructor(nombre, relleno, kilos, recubierto, opinion) {
        this.nombre = nombre
        this.relleno = relleno
        this.kilos = kilos
        this.recubierto = recubierto
    }
}


const torta = []
const torta1 = new tortas("torta kakita", "relleno con dulce de leche y oreo", "4 kg", "ganacheada de chocolate")
torta.push(torta1)
const torta2 = new tortas("torta campeon", "relleno con dulce de leche y fruta a eleccion", "3 kg", "masa dulce")
torta.push(torta2)
const torta3 = new tortas("torta duff", "relleno con dulce de leche y frutilla", "3 kg", "masa dulce")
torta.push(torta3)
const torta4 = new tortas("torta dj", "relleno con dulce de leche y chips de chocolate", "6 kg", "masa dulce")
torta.push(torta4)

console.log(torta)

// BUSCADOR DE DISEÑO DE TORTAS

let busqueda = prompt('¿Que Torta estas buscando de nuestros modelos?')
const buscador = torta.find(objeto => objeto.nombre == busqueda)

if (buscador) {
    alert('tenemos ese modelo de ' + busqueda)
} else {
    alert('no tenemos ese modelo, Pero se puede Diseñar a tu gusto, Contactanos')
}




//ELECCION DE DIFERENTES PRODUCTOS CARACTERISTICOS Y SU POSTERIOR PRECIO

let productoseleccionado = parseInt(
    prompt('Ingresa el numero del producto a elejir 1-torta 2-galletitas 3-git box')
)


let totalcompra = 0
let seguircomprando = true
let desicion
let carrito = []

class productos {
    constructor(nombre, valor) {
        this.nombre = nombre
        this.valor = valor
    }
}
const producto = []
const productotorta = new productos("Valor Por KG de torta", "3000")
producto.push(productotorta)
const productogalletitas = new productos("Valor Por KG de galletitas", "1000")
producto.push(productogalletitas)
const productogifbox = new productos("Valor Por Caja", "4000")
producto.push(productogifbox)


// elijiendo productos

while (seguircomprando === true) {
    if (productoseleccionado === 1) {
        carrito.push(producto[0])
    }
    else if (productoseleccionado === 2) {
        carrito.push(producto[1])
    }
    else if (productoseleccionado === 3) {
        carrito.push(producto[2])
    }
    else {
        productoseleccionado = parseInt(prompt('Ingrese un numero valido'))
        continue
    }

    desicion = parseInt(prompt('quiere seguir comprando marque 1-si 2-no'))
    if (desicion === 1) {
        productoseleccionado = parseInt(prompt('Elija mas producto de 1-torta 2-galletitas 3-git box'))
    }
    else if (desicion === 2) {
        seguircomprando = false
    }
}

//calculadora de productos comprados

for (const produc of carrito) {
    totalcompra = totalcompra + produc.valor
}

alert('el valor es ' + totalcompra)


let cash = prompt('¿Paga en Efectivo? si - no')

function calculandodescuento(precio) {

    let descuento

    if (cash == 'si') {
        descuento = 0.9
    }
    else if (cash == 'no') {
        descuento = 1
    }
    else {
        cash = prompt('ingrese un numero valido')
    }
    let resultado = precio * descuento

    return resultado
}
let preciofinal = calculandodescuento(totalcompra)



alert('tu compra total es ' + preciofinal)


