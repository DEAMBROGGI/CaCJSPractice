const data = []

async function getData() {
    await fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(json => data.push(json))
}

async function initApp() {
    await getData()
    sharedEpisodes(data)
}

initApp()

//Comparacion de caracteres
let compareEpisodes

async function sharedEpisodes(compare) {
    let auxiliar = []
    await compare[0].results.map(charA =>
        compare[0].results.forEach(charB => {
            if (charA.name !== charB.name) {
                auxiliar.push({
                    character: charA.name,
                    sharedEpisode: {
                        comparewith: charB.name,
                        repeatEpisode: charB.episode.map(compareB =>
                            charA.episode.filter(repeat => repeat === compareB)).flat()
                    }
                })
            }
        })
    )
    try {
        compareEpisodes = groupByCharacter(auxiliar)
    } catch (err) {
        console.log(err)
    }
}

function groupByCharacter(array) {
    const gruposPorCharacter = {}
    array.forEach(personaje => {
        const { character, sharedEpisode } = personaje
        if (!gruposPorCharacter[character]) {
            gruposPorCharacter[character] = [];
        }
        gruposPorCharacter[character].push(sharedEpisode);
    })
    console.log(gruposPorCharacter)
    return gruposPorCharacter
}

function filterObjectCompareCharacters(propName) {
    return compareEpisodes[propName]
}
console.log(compareEpisodes)








