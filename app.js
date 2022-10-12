const URL = "https://thesimpsonsquoteapi.glitch.me/quotes"

const btn = document.getElementById("btn-generate")
const nombre = document.getElementById("name")
const frase = document.getElementById("frase")
const img = document.getElementById("img")

btn.addEventListener("click", getApi)

function getApi(){

    fetch(URL).then(
        response => response.json()
    ).then(data => {
        img.src = data[0].image,
        nombre.textContent = data[0].character.toUpperCase() ,
        frase.textContent = data[0].quote
    }
    )
}