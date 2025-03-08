import { getInfoLinks, getParkData} from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

const parkData = getParkData();



function setParkIntro(data){
  const parkIntro = document.querySelector(".intro");
  parkIntro.innerHTML = `<h1>${data.fullName}</h1>
  <p>${data.description}</p>`
}



function setParkInfoLinks(data){
  const parkInfo = document.querySelector(".info");
  const infoHTML = data.map(mediaCardTemplate).join("");
  parkInfo.insertAdjacentHTML("afterbegin", infoHTML);
}

async function init() {
  const parkData = await getParkData();
  const links = getInfoLinks(parkData.images);
  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(links);
}

init();