const ShowCards = (template, container, datos) => {
    let fragment = document.createDocumentFragment();
    datos.forEach((item) => {
        const { id, Title, Poster } = item;

        template.querySelector("img").setAttribute("src", Poster);
        template.querySelector("img").setAttribute("class", "todasImagenes");
        template.querySelector("img").setAttribute("alt", Title);
        template.querySelector("button").setAttribute("class", "btnInfo");
        template.querySelector("button").setAttribute("id", id);

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });
    container.appendChild(fragment);
};

export default ShowCards;