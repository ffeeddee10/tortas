//ZONA DE CLASES

class tortas {
    constructor(id, nombre, precio, relleno, kilos, recubierto, opinion) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.relleno = relleno
        this.kilos = kilos
        this.recubierto = recubierto
    }
    agregarevento() {
        const agregarproducto = document.getElementById(this.id)
        const busquedaid = torta.find(produc => produc.id == this.id)
        agregarproducto.addEventListener('click', () => guardarencarpeta(busquedaid))
    }
}

// FUNCIONES


//saludar con toastify
function saludotoastify(cliente) {
    Toastify({
        text: ` Hola ${cliente.nombre} elije tus productos y te cotizamos`
    }).showToast()
}


//busqueda mediante el id
function guardarencarpeta(tortas) {
    const encarrito = carrito.find(prod => prod.id == tortas.id)

    //creando carrito con las cantidad para que no sean muchos objetos con el mismo dato
    if (!encarrito) {
        carrito.push({ ...tortas, cantidad: 1 }) // crea un item de cantidad y le suma 1
    } else {
        const carritofiltro = carrito.filter(prod => prod.id != tortas.id)
        carrito = [
            ...carritofiltro,
            { ...encarrito, cantidad: encarrito.cantidad + 1 }
        ]
    }
    //guardando en un console.log
    console.log(carrito)
}


//varios
let carrito = []

//ZONA LLAMADOS A DOCUMENTOS
const datosnombre = document.getElementById('datosnombre')
const datoscelular = document.getElementById('datoscelular')
const ingresardatos = document.getElementById('ingresardatos')
const removedatos = document.querySelector('.container')
const container = document.querySelector('.container')
const resultado = document.querySelector('resultado')
const buscador = document.getElementById('buscador')
const boton = document.getElementById('boton')


//ZONA DE FOTOS, PRECIOS,ETC DE LOS PRODUCTOS

const torta = []
const torta1 = new tortas("001", "torta Planta vs Zombie", 12000, "relleno con dulce de leche y oreo", "4 kg", "ganacheada y cubierta con masa de azucar")
const torta2 = new tortas("002", "torta Piña", 6000, "relleno con dulce de leche y fruta a eleccion", "3 kg", "ganacheada y cubierta con masa de azucar")
const torta3 = new tortas("003", "torta Blanca Nieve", 15000, "relleno con dulce de leche y frutilla", "6 kg", "ganacheada y cubierta con masa de azucar")
const torta4 = new tortas("004", "torta Campeon", 15000, "relleno con dulce de leche y chips de chocolate", "6 kg", "ganacheada y cubierta con masa de azucar")
const torta5 = new tortas("005", "galletitas perros", 1500, "masa dulce cubierta con masa de ezucar", "6 kg", "#")
const torta6 = new tortas("006", "galletitas perros 2", 1500, "masa dulce cubierta con masa de ezucar", "6 kg", "#")
const torta7 = new tortas("007", "paletas de colores", 1000, "paleta relleno de oreo", "6 kg", "chocolate blanco y masa de azucar")
const torta8 = new tortas("008", "box de girasol", 1000, "rellna con dulce de leche ", "1 kg", "cubierta con masa de azucar")
const torta9 = new tortas("009", "box cupcackes", 3000, "bañado con crema ", "12u", "cubierta con masa de azucar")
torta.push(torta1, torta2, torta3, torta4, torta5, torta6, torta7, torta8, torta9)

//BUSCADOR


//zona eventos

ingresardatos.onclick = () => {
    const usuario = {
        nombre: datosnombre.value,
        celular: datoscelular.value,
    };
    localStorage.setItem('usuariostorage', JSON.stringify(usuario))
    removedatos.remove()

    saludotoastify(usuario)
}

//para cada uno de los productos torta hace esa funcion

torta.forEach(e => {
    e.agregarevento()
});







