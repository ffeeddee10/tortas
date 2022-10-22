//saludar
/*
function saludo(cliente) {
    const saludar = document.createElement('h8')
    saludar.innerText = ` Hola ${cliente.nombre} elije tus productos y te cotizamos`
    saludousuario.append(saludar)
}
*/


// //guardar por las dudas

// contadorcarrito.innerhtml = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)

// //contador
// const contadorcarrito = document.querySelector('contador')
// contadorcarrito.innerhtml = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)

const emoji = document.getElementById('emoji')

const archivos = async () => {

    const info = await fetch('./tortas.json')
    const infojson = await info.json()
    const arrayConcatenado = infojson.concat(imagenes)
        .then(response => response.json())
        .then(info => {
            const tortas = info.name
            tortas.forEach(tortajson => {
                const li = document.createElement('li')
                li.innerHTML = `<img src=${tortajson.name}>`
                lista.append(li)
            });
        })
    console.log(archivos)
}

boton.onclick = (e) => {
    e.preventDefault()
    function busqueda(buscador) {
        const buscadores = torta.find(objeto => objeto.nombre = busqueda)
        buscador = buscadores ? 'si tenemos' : 'no tenemos'
    }
    const datos = {
        nombretorta: busqueda.value
    }
    localStorage.setItem('busquedausuario', JSON.stringify(datos)),
        console.log(busquedausuario)
}

const filtrar = (e) => {
    e.preventDefault()
    encontrado.innerHTML = ''
    const texto = buscador.value.toLowerCase()
    for (let productos of torta) {
        let nombre = productos.nombre.toLowerCase()
        if (nombre.indexOf(texto) !== -1)
            encontrado.innerHTML += `
        <li>${productos}</li>
        `
        localStorage.setItem('busquedausuario', JSON.stringify(productos))
    }

    if (encontrado.innerHTML = '') {
        encontrado.innerHTML += `
        <li> nooo </li>
        `
    }
}
boton.addEventListener('click', filtrar)

const encontrado = document.getElementById('encontrado')


/*
datoUsuarioStorage.forEach(e => {
    let probando = document.getElementById("probando")
    let div = document.createElement("div")
    div.innerHTML = e.name
    probando.appendchild(div)
}
)
*/
/*
let nombre = ''

datoUsuarioStorage.forEach((dato) => {
    if (dato.nombre==='nombre'){
        nombre = dato.nombre
        
        console.log('nombre',nombre)
    }
})*/