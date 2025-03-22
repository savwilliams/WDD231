import "../css/home.css"; 
import "../css/style.css";
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

function enableNavigation() {
  const menuButton = document.querySelector("#global-nav-toggle");
  const subMenuToggles = document.querySelectorAll(".global-nav__split-button__toggle");

  menuButton.addEventListener("click", (ev) => {
    let target = ev.target;
    document.querySelector(".global-nav").classList.toggle("show");

    if (target.tagName != "BUTTON") {
      target = target.closest("button");
    }
    if (document.querySelector(".global-nav").classList.contains("show")) {
      target.setAttribute("aria-expanded", true);
    } else {
      target.setAttribute("aria-expanded", false);
    }

    console.log("toggle");
  });
}


init();
enableNavigation();