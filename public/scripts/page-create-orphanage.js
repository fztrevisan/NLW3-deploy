//create map
const map = L.map('mapid').setView([-25.427859, -49.2773589], 14.25)

//create tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
})

//create and add marker

let marker;

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat
  document.querySelector('[name=lng]').value = lng
  //remove all icons
  marker && map.removeLayer(marker)
  //add icon layer
  marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// add more pictures
function addPhotoField() {
  //select the #images container
  const container = document.querySelector('#images')
  //select the field to copy
  const fieldContainers = document.querySelectorAll('.new-upload')
  //clone the last added container
  const newFieldContainer = fieldContainers[fieldContainers.length - 1].cloneNode(true)
  //check if the last added field is empty
  const input = newFieldContainer.children[0]
  if (input.value == "") {
    return 0
  }
  //clean field before adding
  input.value = ""
  //add cloned container
  container.appendChild(newFieldContainer)
}

//Delete picture field
function deleteField(event) {
  const deleteButton = event.currentTarget
  const fieldContainers = document.querySelectorAll('.new-upload')

  if (fieldContainers.length < 2) {
    deleteButton.parentNode.children[0].value = ""
    return 0
  }
  deleteButton.parentNode.remove()
}

//toggle yes<>no
function toggleSelect(event) {
  document.querySelectorAll('.button-select button').forEach(button => button.classList.remove('active'))

  const button = event.currentTarget
  button.classList.add('active')

  const input = document.querySelector('[name="open_on_weekends"]')
  input.value = button.dataset.value
}

function validate(event) {

  // Validar se lat e long estão preenchidos
  const latitude = document.querySelector('[name=lat]').value
  const longitude = document.querySelector('[name=lng]').value

  console.log(latitude)
  if (latitude == '' && longitude == '') {
    scroll(0, 0)
    alert('Ops, parece que faltou selecionar a localização no mapa.')
    event.preventDefault() // não deixa enviar o form
  }
}