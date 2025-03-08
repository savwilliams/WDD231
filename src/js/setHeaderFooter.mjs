import { parkInfoTemplate, footerTemplate } from "./templates.mjs";

function setHeaderInfo(data) {
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;
    document.querySelector("head > title").textContent = data.fullName;
    document.querySelector(".hero-img").src = data.images[12].url;
    document.querySelector(".park-banner-content").innerHTML =
      parkInfoTemplate(data);
}


function setParkFooter(data){
    const parkFooter = document.querySelector("#park-footer");
    parkFooter.innerHTML = footerTemplate(data);
}

  
export default function setHeaderFooter(parkData){
    setHeaderInfo(parkData);
    setParkFooter(parkData);
}