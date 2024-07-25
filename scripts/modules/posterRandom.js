const posterRandom = (container, lista, datos) => {

    datos.forEach(element => {
        const { id, Carrusel, Title } = element;
        const obj = {
            id: id,
            name: Title,
            img: Carrusel
        }
        lista.push(obj);
    });

    const imgPoster = lista[Math.floor(Math.random() * lista.length)]

    container.innerHTML = `
    <img class="imgPosterPrincipal" src="${imgPoster.img}"
            alt="...">
        <div class="informacionPosterPrincipal">
            <h1 class="tituloImagenPosterPrincipal">${imgPoster.name}</h1>
            <div class="botonesPosterPrincipal">
                <button class="botonReproducirPosterPrincipal" id="rep${imgPoster.id}">Reproducir</button>
                <button class="botonInfoPosterPrincipal" id="inf${imgPoster.id}">Mas informacion</button>
            </div>
        </div>
    `

    console.log(imgPoster)
}

export default posterRandom;


