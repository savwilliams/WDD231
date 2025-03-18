export function parkInfoTemplate(info) {
    return `<a href="/" class="park-banner-title">${info.name}</a>
    <p class="park-banner-subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
}


export function mediaCardTemplate(info){
  return `<div class="media-card">
  <a href="${info.link}"><img src="${info.image}" alt="#" class="park-info-img">
  <h3 class="park-info-name">${info.name}</h3></a>
  <p class="park-info-description">${info.description}</p>
  </div>`;
  
}


function getMailingAddress(addresses) {
    const mailing = addresses.find((address) => address.type === "Mailing");
    return mailing;
  }
    
  
function getVoicePhone(numbers){
    const voice = numbers.find((number) => number.type.toLowerCase() === "voice");
    return voice.phoneNumber;
}
  
  
export function footerTemplate(info) {
    const mailing = getMailingAddress(info.addresses);
    const voice = getVoicePhone(info.contacts.phoneNumbers)
    
    return `<section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div><p>${mailing.line1}<p>
    <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
    <h4>Phone:</h4>
    <p>${voice}</p>
    </section>`;
}
  

export function alertTemplate(alert) {
  let alertType = "";
  switch (alert.category) {
    case "Park Closure":
      alertType = "closure";
      break;
    default:
      alertType = alert.category.toLowerCase();
  }  
 
  return `<li class="alert">
  <svg class="icon" focusable="false" aria-hidden="true">
    <use xlink:href="/images/sprite.symbol.svg#alert-${alertType}"></use>
  </svg>
  <div>
    <h3 class="alert-${alertType}">${alert.title}</h3>
    <p>${alert.description}</p>
  </div></li>`;
}