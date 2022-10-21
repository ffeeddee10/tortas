//funcion ver
function view() {
    let datos = JSON.parse(localStorage.getItem("usuariostorage"))
    const changuito = document.getElementById("changuito")
    const cards = `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                        <img src=${datos[0].image} class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${datos[0].nombre}</h5>
                        <p class="card-text">${datos[0].id}</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
                    `
    changuito.innerHTML += cards
    return
}
//utilizando datos del storage para view
let datos = JSON.parse(localStorage.getItem("usuariostorage"))
for (const datostorage of datos) {
    view(datostorage)
}
