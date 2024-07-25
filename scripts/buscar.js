import Getdata from "./helpers/getData.js";
import { PELICULAS } from "./helpers/urls.js";
import ShowCards from "./modules/show.js";
import PostData from "./helpers/postData.js"

const templateFragment = document.getElementById("template").content;
const containerCards = document.getElementById("cardPeliculas");
const formPeliculas = document.getElementById("formPeliculas");

document.addEventListener("DOMContentLoaded", async () => {
    const result = await Getdata(PELICULAS);
    
    ShowCards(templateFragment, containerCards, result);
})

formPeliculas.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    let nuevaPelicula = {
      "id": crypto.randomUUID(),
      "Type": document.getElementById("tipo").value,
      "Title": document.getElementById("titulo").value,
      "Year": document.getElementById("año").value,
      "Value": document.getElementById("valoracion").value,
      "Description": document.getElementById("descripcion").value,
      "Carrusel": document.getElementById("carrusel").value,
      "Trailer": document.getElementById("trailer").value,
      "Poster": document.getElementById("poster").value
    }
  
    await PostData(PELICULAS, nuevaPelicula); 
    formPeliculas.reset();
  })