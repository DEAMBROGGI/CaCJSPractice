
const dataCharacters = []

async function displayCharacters() {

    let arrayToDisplay = ""

    await fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(json => dataCharacters.push(json))

    for (var i = 0; i < dataCharacters[0].results.length; i++) {

        arrayToDisplay += `
        <li>${dataCharacters[0].results[i].name}</li>
        `
    }

    let elementtoDisplay = document.createElement("ul")
    elementtoDisplay.innerHTML = arrayToDisplay

    console.log(dataCharacters)
    return elementtoDisplay
}

let fav = JSON.parse(localStorage.getItem("favorito"))

const addFavoritos = (param) => {

    let seleccionado = dataCharacters[0].results.filter(character => character.id === param)
    fav.push(...seleccionado)

    localStorage.setItem("favorito", JSON.stringify(fav))
    let carrito = JSON.parse(localStorage.getItem("favorito"))
    return carrito
}

const removeFavoritos = (param) => {
    fav = []
    let carrito = JSON.parse(localStorage.getItem("favorito"))
   
     let seleccionado = carrito.filter(character => character.id != param)
     fav.push(...seleccionado)

     localStorage.setItem("favorito", JSON.stringify(fav))
     return fav

}

const clearFavoritos =()=>{

    localStorage.removeItem("favorito")
    fav = []

}

const readCarrito =()=>{
    return fav
} 