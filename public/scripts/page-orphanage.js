
const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

// Get lat x long values from DB-->HTML-->span
const spanLat = document.querySelector('span[data-lat]').dataset.lat
const spanLng = document.querySelector('span[data-lng]').dataset.lng
//create map
const map = L.map('mapid', options).setView([spanLat, spanLng], 16)

//create tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

//create and add marker
L.marker([spanLat, spanLng], { icon }).addTo(map)

// Image gallery

function selectImage(event) {
  const buttonClicked = event.currentTarget /* Salvando quem disparou o evento */

  // remover a classe .active de todos os botões
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach((button) => {
    button.classList.remove("active")
  })
  // adiciona .active bo botão clicado
  buttonClicked.classList.add("active")

  // selecionar a imagem clicada
  const image = buttonClicked.children[0] /* Pega o 'filho' do botão que nesse caso é uma img */
  const imageContainer = document.querySelector(".orphanage-details > img")

  imageContainer.src = image.src
}