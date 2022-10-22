
const carrito = []

class tortas {
    constructor(id, nombre, image, kilos) {
        this.id = id
        this.nombre = nombre
        this.image = image
        this.kilos = kilos

    }
   /* desplegarproductos() {
        const card = `
        <a href=${this.image} target="_blank"><img src=${this.image}
                    alt="..." class="promo_item promo_item_1 imagenes"></a>
                <div class="d-grid gap-2 d-md-block">
					<button class="btn btn-secondary" id=${this.id} type="button" >Agregar</button>
				</div>
        `
        const creaciontorta = document.getElementById('creaciontorta')
        creaciontorta.innerHTML += card
    }*/
    agregarevento() {
        const agregarproducto = document.getElementById(this.id)
        const busquedaid = torta.find(produc => produc.id == this.id)
        agregarproducto.addEventListener('click', () => guardarencarpeta(busquedaid))
    }
}


const torta = []



//para cada elemento has esto

/*
torta.forEach(e => {
    e.desplegarproductos()
})*/
torta.forEach(e => {
    e.agregarevento()
})



//busqueda mediante el id
function guardarencarpeta(tortas) {
    const carrito = []
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
    function carritoDeCompra() {
        localStorage.setItem("usuariostorage", JSON.stringify(carrito))
        if (localStorage.getItem('usuariostorage') == null) {
            localStorage.setItem('usuariostorage', '[]');
        }
    }
    function creandocard() {
        if (localStorage.getItem('carrito') != null) {
            document.getElementById('changuito').innerHTML = JSON.parse(localStorage.getItem("usuariostorage"))
        }
    }
    carritoDeCompra()
    creandocard()
    return
}







