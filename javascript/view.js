
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
                            <p class="card-text">${datos.kilos}</p>
                        </div>
                    </div>
                </div>
                <button type="button" class="delete btn btn-outline-danger">Borrar</button>
            </div>
                        `
            changuito.append(div)
            div.querySelector(".delete").addEventListener('click', removeItemChanguito) // selector padre apra borrar todo el contenido que se encuentra dentro de el
        });
    }
    save()
}
viewcarrito()

//funcion remover producto realcioando con boton eliminar
function removeItemChanguito(e) {
    const buttonDelete = e.target
    const div = buttonDelete.closest("div") // elimina el contenido
    const title = div.querySelector('.delete').div; //selector del boton padre para eliminar
    div.remove()
    for (let i = 0; i < carrito.length; i++) {

        if (carrito[i].title.trim() === title.trim()) {
            carrito.splice(i, 1)
        }
    }
}
//funcion sabe global
function save() {
    localStorage.setItem("usuariostorage", JSON.stringify(carrito))
}
//funcion refrescador de pagina
window.onload = function () {
    const storage = JSON.parse(localStorage.getItem('usuariostorage'));
    if (storage) {
        carrito = storage;
        viewcarrito()
    }
}

//boton vaciar todos lso productos
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
