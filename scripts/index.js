import Getdata from "./helpers/getData.js";
import { PELICULAS } from "./helpers/urls.js";
import ShowCardPopulares from "./modules/showPopulares.js";
import ShowCardInfantiles from "./modules/showInfantiles.js";
import ShowCardAdultos from "./modules/showAdultos.js";
import posterRandom from "./modules/posterRandom.js";

const templateFragment1 = document.getElementById("templatePopulares").content;
const containerCards1 = document.getElementById("containerMasPopulares");

const templateFragment2 = document.getElementById("templateInfantiles").content;
const containerCards2 = document.getElementById("containerInfatiles");

const templateFragment3 = document.getElementById("templateAdultos").content;
const containerCards3 = document.getElementById("containerAdultos");

const posterPrincipal = document.getElementById("posterPrincipal")
const listaPosters = []



document.addEventListener("DOMContentLoaded", async () => {
    const result = await Getdata(PELICULAS);
    
    //posterRandom(posterPrincipal, listaPosters, result);
    ShowCardPopulares(templateFragment1, containerCards1, result);
    ShowCardInfantiles(templateFragment2, containerCards2, result);
    ShowCardAdultos(templateFragment3, containerCards3, result);
});

