const data = []

async function getData() {
    await fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(json=>data.push(json))
}

async function initApp(){
    await getData()
    
    console.log(data)
}

initApp()

function compareCharacter(arrayDeCharacters){
    //https://rickandmortyapi.com/api/character/1,183
    console.log("Mi funcion es comparar los personajes que reciba en el array como parametros, e identificar cuantos episodios comparten entre ellos, debo poder comparara N personajes")
}

function getEpisodeName(urlEpisode){
    https://rickandmortyapi.com/api/episode/10,28
    console.log("Mi funcion es ir a la api con los datos del array que recibo como parametro y devolver a quien me invoco el nombre del episodio")
}

