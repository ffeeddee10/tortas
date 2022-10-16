
class tortas {
    constructor(id, nombre, image, kilos) {
        this.id = id
        this.nombre = nombre
        this.image = image
        this.kilos = kilos

    }
    desplegarproductos() {
        const card = `
        <a href=${this.image} target="_blank"><img src=${this.image}
                    alt="..." class="promo_item promo_item_1 imagenes"></a>
                <div class="d-grid gap-2 d-md-block">
					<button class="btn btn-secondary" id=${this.id} type="button" >Agregar</button>
				</div>
        `
        const creaciontorta = document.getElementById('creaciontorta')
        creaciontorta.innerHTML += card
    }
    agregarevento() {
        const agregarproducto = document.getElementById(this.id)
        const busquedaid = torta.find(produc => produc.id == this.id)
        agregarproducto.addEventListener('click', () => guardarencarpeta(busquedaid))
    }
}


//informacion e imagenes de las tortas

const torta = []

let torta1 = new tortas("001", "torta Planta vs Zombie", "../image/tortas/torta_1.jpg", "4kg")
let torta2 = new tortas("002", "torta Planta vs Zombie", "../image/tortas/torta_2.jpg", "4kg")
let torta3 = new tortas("003", "torta Planta vs Zombie", "../image/tortas/torta_3.jpg", "4kg")
let torta4 = new tortas("004", "torta Planta vs Zombie", "../image/tortas/torta_4.jpg", "4kg")
let torta5 = new tortas("005", "torta Planta vs Zombie", "../image/tortas/torta_5.jpg", "4kg")
let torta6 = new tortas("006", "torta Planta vs Zombie", "../image/tortas/torta_6.jpg", "4kg")
let torta7 = new tortas("007", "torta Planta vs Zombie", "../image/tortas/torta_7.jpg", "4kg")
let torta8 = new tortas("008", "torta Planta vs Zombie", "../image/tortas/torta_8.jpg", "4kg")
let torta9 = new tortas("009", "torta Planta vs Zombie", "../image/tortas/torta_9.jpg", "4kg")
let torta10 = new tortas("010", "torta Planta vs Zombie", "../image/tortas/torta_10.jpg", "4kg")
let torta11 = new tortas("011", "torta Planta vs Zombie", "../image/tortas/torta_11.jpg", "4kg")
let torta12 = new tortas("012", "torta Planta vs Zombie", "../image/tortas/torta_12.jpg", "4kg")
let torta13 = new tortas("013", "torta Planta vs Zombie", "../image/tortas/torta_13.jpg", "4kg")
let torta14 = new tortas("014", "torta Planta vs Zombie", "../image/tortas/torta_14.jpg", "4kg")
let torta15 = new tortas("015", "torta Planta vs Zombie", "../image/tortas/torta_15.jpg", "4kg")
let torta16 = new tortas("016", "torta Planta vs Zombie", "../image/tortas/torta_16.jpg", "4kg")
let torta17 = new tortas("017", "torta Planta vs Zombie", "../image/tortas/torta_17.jpg", "4kg")
let torta18 = new tortas("018", "torta Planta vs Zombie", "../image/tortas/torta_18.jpg", "4kg")
let torta19 = new tortas("019", "torta Planta vs Zombie", "../image/tortas/torta_19.jpg", "4kg")
let torta20 = new tortas("020", "torta Planta vs Zombie", "../image/tortas/torta_20.jpg", "4kg")
let torta21 = new tortas("021", "torta Planta vs Zombie", "../image/tortas/torta_21.jpg", "4kg")
let torta22 = new tortas("022", "torta Planta vs Zombie", "../image/tortas/torta_22.jpg", "4kg")
let torta23 = new tortas("023", "torta Planta vs Zombie", "../image/tortas/torta_23.jpg", "4kg")
let torta24 = new tortas("024", "torta Planta vs Zombie", "../image/tortas/torta_24.jpg", "4kg")
torta.push(torta1, torta2, torta3, torta4, torta5, torta6, torta7, torta8, torta9, torta10, torta11, torta12, torta13, torta14, torta14, torta15, torta16, torta17, torta18, torta19, torta20, torta21, torta22, torta23, torta24)




//para cada elemento has esto


torta.forEach(e => {
    e.desplegarproductos()
})
torta.forEach(e => {
    e.agregarevento()
})


//busqueda mediante el id
function guardarencarpeta(tortas) {
    let carrito = []
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
    //guardando en localstorage
    function bringInfo() {
        let almacenar = localStorage.setItem("carrito", JSON.stringify(carrito))
        return almacenar
    }
    function usandojson() {
        let almacenarjson = JSON.parse(localStorage.getItem("carrito"))
        console.log(almacenarjson)
        //utlizando el localstorage

        const probar = document.getElementById("probar")
        const cards = `
                    <p>${almacenarjson[0].nombre}</p>
                    `
        probar.innerHTML += cards
        console.log(cards)
        return almacenarjson
    }
    bringInfo()
    usandojson()
}


/*
    //guardando en localstorage
    localStorage.setItem("carrito", JSON.stringify(carrito))
    const almacenar = JSON.parse(localStorage.getItem("carrito"))
    console.log(almacenar)*/
/*
function guardoCarrito() {
    if ("carrito".id > 0) {
        localStorage.setItem("carrito", JSON.stringify(carrito))
        console.log("nose")
    }
    else { (miCarrito = JSON.parse(localStorage.getItem("carrito"))) 
    console.log(miCarrito.id)
}
}*/
/*
function recuperoCarrito() {
    let miCarrito
    if (miCarrito = JSON.parse(localStorage.getItem("carrito"))) {
        console.log(miCarrito.id)
    }
    else {localStorage.setItem("carrito", JSON.stringify(carrito))}
}*/


/*
//utlizando el localstorage
const probar=document.getElementById("probar")
const cards = `
<p>${almacenar}</p>
` 
probar.innerHTML  += cards*/
