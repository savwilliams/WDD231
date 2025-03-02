import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

const parkData = getParkData();



function setParkIntro(data){
  const parkIntro = document.querySelector(".intro");
  parkIntro.innerHTML = `<h1>${parkData.fullName}</h1>
  <p>${data.description}</p>`
}



function setParkInfoLinks(data){
  const parkInfo = document.querySelector(".info");
  const infoHTML = data.map(mediaCardTemplate).join("");
  parkInfo.insertAdjacentHTML("afterbegin", infoHTML);
}



setHeaderFooter(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkInfoLinks);
