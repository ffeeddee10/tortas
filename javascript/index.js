//ZONA DE CLASES

class tortas {
    constructor(nombre, precio, relleno, kilos, recubierto, opinion) {
        this.nombre = nombre
        this.precio = precio
        this.relleno = relleno
        this.kilos = kilos
        this.recubierto = recubierto
    }
    /*
    cardproductos() {
        const card = `
        <div class="card">
            <p>hola</p>
            <img src="./image/tortas/torta_17.jpg" alt="destacadas" class="destacadas-img">
            <button class="boton">${this.precio}</button>
        div>
     `
        const destacadas = document.querySelector('#destacadas')
    destacadas.innerHTML += card

    }
    */
}



//ZONA LLAMADOS A DOCUMENTOS
const datosnombre = document.getElementById('datosnombre')
const datoscelular = document.getElementById('datoscelular')
const ingresardatos = document.getElementById('ingresardatos')
const removedatos = document.querySelector('.container')
const container = document.querySelector('.container')


//ZONA DE FOTOS, PRECIOS,ETC DE LOS PRODUCTOS

const torta = []
const torta1 = new tortas("torta Planta vs Zombie", 12000, "relleno con dulce de leche y oreo", "4 kg", "ganacheada y cubierta con masa de azucar")
const torta2 = new tortas("torta Piña", 6000, "relleno con dulce de leche y fruta a eleccion", "3 kg", "ganacheada y cubierta con masa de azucar")
const torta3 = new tortas("torta Blanca Nieve", 15000, "relleno con dulce de leche y frutilla", "6 kg", "ganacheada y cubierta con masa de azucar")
const torta4 = new tortas("torta Campeon", 15000, "relleno con dulce de leche y chips de chocolate", "6 kg", "ganacheada y cubierta con masa de azucar")
const torta5 = new tortas("galletitas perros", 1500, "masa dulce cubierta con masa de ezucar", "6 kg", "#")
const torta6 = new tortas("galletitas perros 2", 1500, "masa dulce cubierta con masa de ezucar", "6 kg", "#")
const torta7 = new tortas("paletas de colores", 1000, "paleta relleno de oreo", "6 kg", "chocolate blanco y masa de azucar")
const torta8 = new tortas("box de girasol", 1000, "rellna con dulce de leche ", "1 kg", "cubierta con masa de azucar")
const torta9 = new tortas("box cupcackes", 3000, "bañado con crema ", "12u", "cubierta con masa de azucar")
torta.push(torta1, torta2, torta3, torta4, torta5, torta6, torta7, torta8, torta9)

//zona eventos

ingresardatos.onclick = () => {
    const usuario = {
        nombre: datosnombre.value,
        celular: datoscelular.value,
    };
    localStorage.setItem('usuariostorage', JSON.stringify(usuario))
    removedatos.remove()
    saludo(usuario)
}

// FUNCIONES

function saludo(cliente) {
    const saludar = document.createElement('h8')
    saludar.innerText = ` Hola ${cliente.nombre} elije tus productos y te cotizamos`
    container.append(saludar)
}

/*
torta.forEach(e => {
    e.cardproductos
});
*/


/*
const boton = document.getElementsByClassName('boton')

boton.onclick = () => {
    const productoselecionado = tortas[torta.selectedIndex]
    console.log(productoselecionado)
}

*/



/*
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


// creando boton de compra en mi pagina

const boton = document.createElement('button')
boton.innerText = 'Agregame Bien Sabroso'
document.boton.append(boton)
*/