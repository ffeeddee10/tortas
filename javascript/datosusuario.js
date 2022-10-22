
//saludar con toastify a cliente

function saludotoastify(cliente) {
    Toastify({
        text: ` Hola ${cliente.nombre} elije tus productos y te cotizamos`    
    }).showToast()
}

//LLAMADOS A DOCUMENTOS

const datosnombre = document.getElementById('datosnombre')
const datoscelular = document.getElementById('datoscelular')
const ingresardatos = document.getElementById('ingresardatos')
const removedatos = document.querySelector('.container')

//datos del cliente onclick

ingresardatos.onclick = () => {
    const usuario = {
        nombre: datosnombre.value,
        celular: datoscelular.value,
    };
    localStorage.setItem('usuario', JSON.stringify(usuario))
    removedatos.remove()  
    saludotoastify(usuario) 
}

// utilizando informacion del localstorage
const datoUsuarioStorage = JSON.parse(localStorage.getItem('usuario'))