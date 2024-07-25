const ShowCardPopulares = (template, container, datos) => {
    let fragment = document.createDocumentFragment();
    datos.forEach((item) => {
        const { id, Title, Poster, Value } = item;
        if (Value >= 8) {
            template.querySelector("img").setAttribute("src", Poster);
            template.querySelector("img").setAttribute("alt", Title);
            template.querySelector("img").setAttribute("id", id);
            template.querySelector("img").setAttribute("data-bs-toggle", "modal");
            template.querySelector("img").setAttribute("data-bs-target", "#exampleModal");

            const clone = template.cloneNode(true);
            fragment.appendChild(clone);
        }
    });
    container.appendChild(fragment);
};

export default ShowCardPopulares;

