
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
            /*changuito.querySelector(".delete").addEventListener('click', removeItemChanguito)*/
        });
    }
}
viewcarrito()
/*
function removeItemChanguito(e) {
    const buttonDelete = e.target
    const div = buttonDelete.closest("div")
    const title = div.querySelector('.title').textContent;
    div.remove()
    for (let i = 0; i < carrito.length; i++) {

        if (carrito[i].title.trim() === title.trim()) {
            carrito.splice(i, 1)
        }
    }
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
