
//saludar con toastify cliente
function saludotoastify(cliente) {
    Toastify({
        text: ` Hola ${cliente.nombre} elije tus productos y te cotizamos`
    }).showToast()
}

//ZONA LLAMADOS A DOCUMENTOS
const datosnombre = document.getElementById('datosnombre')
const datoscelular = document.getElementById('datoscelular')
const ingresardatos = document.getElementById('ingresardatos')
const removedatos = document.querySelector('.container')
const container = document.querySelector('.container')
const resultado = document.querySelector('resultado')
const buscador = document.getElementById('buscador')
const boton = document.getElementById('boton')


//datos del cliente

ingresardatos.onclick = () => {
    const usuario = {
        nombre: datosnombre.value,
        celular: datoscelular.value,
    };
    localStorage.setItem('usuariostorage', JSON.stringify(usuario))
    removedatos.remove()

    saludotoastify(usuario)

}

// utilizando informacion del localstorage

const datoUsuarioStorage = JSON.parse(localStorage.getItem('usuariostorage'))
console.log(datoUsuarioStorage)




