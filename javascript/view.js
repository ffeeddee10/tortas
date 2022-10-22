
//funcion para visualizar mis productos en carrito
function viewcarrito() {
    if (localStorage.getItem('usuariostorage') != null) {
        //implantamos informacion y visualizamos mediante dom en carrito
        const changuito = document.getElementById("changuito")
        //utilizando datos del storage para view
        let datos = JSON.parse(localStorage.getItem("usuariostorage"))
        datos.forEach((datos) => {
            const div = document.createElement('div')
            div.innerHTML = `
            <div class="card mb-3 grid text-center" style="max-width: 540px;">
                <div class="row g-col-4">
                    <div class="col-md-4">
                            <img src=${datos.image} class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${datos.nombre}</h5>
                            <p class="card-text">${datos.cantidad}</p>
                            <button onclick = "eliminarproducto(${datos.id})" type="button" class="btn btn-outline-danger">Borrar</button>
                        </div>
                    </div>
                </div>
            </div>
                        `
            changuito.append(div)
        });
    }
}
viewcarrito()
/*
const eliminarDelCarrito = (id) => {
    const item = carrito.find((prod) => prod.id === id)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    viewcarritoactualizado()
}*/
/*
function viewcarritoactualizado() {
    //implantamos informacion y visualizamos mediante dom en carrito
    const changuito = document.getElementById("changuito")
    //utilizando datos del storage para view
    let datos = JSON.parse(localStorage.getItem("usuariostorage"))
    datos.forEach((datos) => {
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="card mb-3 grid text-center" style="max-width: 540px;">
                <div class="row g-col-4">
                    <div class="col-md-4">
                            <img src=${datos.image} class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${datos.nombre}</h5>
                            <p class="card-text">${datos.cantidad}</p>
                            <button onclick = "eliminarproducto(${datos.id})" type="button" class="btn btn-outline-danger">Danger</button>
                        </div>
                    </div>
                </div>
            </div>
                        `
        changuito.append(div)

    });
}*/

//boton vaciar productos
function vaciarproductos() {
    const vaciar = document.getElementById("vaciar")
    const div = document.createElement('div')
    div.innerHTML = `
        <button type="button" class="btn btn-danger">VACIAR PRODUCTOS</button>
    `
    vaciar.append(div)
    vaciar.addEventListener('click', () => {
        localStorage.removeItem('usuariostorage')
        location.reload() //refresca la pagina al borrar todos los productos
        viewcarrito()
    })
}
vaciarproductos()


/*
//funcion para eliminar el id de el array carrito
function eliminar(id){
    let datos = JSON.parse(localStorage.getItem("usuariostorage"))
    let eliminardatosid = datos.findIndex(e => e.id === id )
    eliminardatosid.splice(eliminardatosid, 1)
    localStorage.setItem("usuariostorage", JSON.stringify(eliminardatosid))
}*/
