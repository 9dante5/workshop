const ShowCardAdultos = (template, container, datos) => {
    let fragment = document.createDocumentFragment();
    datos.forEach((item) => {
        const { id, Title, Poster, Type } = item;
        if (Type === "Adulto") {
            template.querySelector("img").setAttribute("src", Poster);
            template.querySelector("img").setAttribute("alt", Title);
            template.querySelector("img").setAttribute("id", id);

            const clone = template.cloneNode(true);
            fragment.appendChild(clone);
        }
    });
    container.appendChild(fragment);
};

export default ShowCardAdultos;