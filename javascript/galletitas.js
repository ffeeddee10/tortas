
//implementando fetch y utilizando api interna, y renderizando mediante dom a la page galletitas

fetch('../galletitas.json')
    .then(response => response.json())
    .then((data) => {
        data.forEach((cakes) => {
            const informacion = `
                             <a href="${cakes.image}" target="_blank" class="promo-margin"><img src="${cakes.image}" alt="..." id="${cakes.id}"
                                class="promo_item promo_item_1 imagenes"></a>
                             `
            const promogalletitas = document.getElementById('promogalletitas');
            promogalletitas.innerHTML += informacion
        });
    })