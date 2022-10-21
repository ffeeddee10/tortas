//funcion ver
function view() {
    const cards = `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                        <img src=${datos.image} class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${datos.name}</h5>
                        <p class="card-text">${datos.cantidad}</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
                    `
    changuito.innerHTML += cards
    return
}
const changuito = document.getElementById("changuito")
//utilizando datos del storage para view
let datos = JSON.parse(localStorage.getItem("usuariostorage"))
datos.forEach((datos) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                        <img src=${datos.image} class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${datos.nombre}</h5>
                        <p class="card-text">${datos.cantidad}</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
                    `
                    changuito.append(div)
});
