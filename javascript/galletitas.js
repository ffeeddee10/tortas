fetch('../tortas.json')
    .then(response => response.json())
    .then((data) => {
        data.forEach((cakes) => {
            const informacion = `
                             <a href="${cakes.image}" target="_blank" class="promo-margin"><img src="${cakes.image}" alt="..." id="${cakes.id}"
                                class="promo_item promo_item_1 imagenes"></a>
                             `
            const cards = document.getElementById('creaciontorta');
            cards.innerHTML += informacion
        });

    })