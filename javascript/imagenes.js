
fetch('./tortas.json')
    .then(response => response.json())
    .then((data) => {
        data.forEach((cakes) => {
            const informacion = `
                             <img src="${cakes.image}" class="d-block w-100" alt="torta1">
                             `
            const cards = document.getElementById('creacion');
            cards.innerHTML += informacion
        });

    })
