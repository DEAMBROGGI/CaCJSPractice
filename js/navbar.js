
function displayNavBar() {

    var buttonsNav = ["Home", "Characters", "Locations", "Episodes"]
    //Buscamos una etiqueta en el dome
    var navBar = document.getElementById("navBar")

    //Creamos elementos dinamicamente con tempalte strings
    navBar.innerHTML =
        `
        <div class="navbar-menu" ></div >
        <div class="navbar" >
            <label class="navbar-toggle" id="">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </label>
            <div id="navBarsubmenu"></div>    
        </div>

        `

    //Creamos el array con los botones a mostrar

    let nav = document.querySelectorAll(".navbar-menu")

    //Mapeo el array
    for (let i = 0; i < buttonsNav.length; i++) {
        //Crea el elemento de boton
        let button = document.createElement('button')
        //le agrega el texto
        button.innerHTML = buttonsNav[i]
        //Agrega el boton al nav
        nav[0].appendChild(button)

        button.addEventListener("click", (e) => {

            let arrayButtonNav = document.querySelectorAll('button')

            for (let i = 0; i < arrayButtonNav.length; i++) {
                if (e.target.innerHTML === arrayButtonNav[i].innerHTML) {
                    e.target.classList.add("active")
                } else {
                    arrayButtonNav[i].classList.remove("active")
                }
            }

            pageToDisplay(e.target.innerHTML)
        })

    }

    //Sub menu responsive

    let menuResponsive = document.getElementById("navBarsubmenu")
    menuResponsive.addEventListener("click", (e) => {
        e.target.innerHTML = `<ul></ul>`
        let menuList = document.querySelector("ul")
        menuList.classList.toggle("showMenuResponsive")

        let buttonsHTML=""
        buttonsNav.map(button=>{
            buttonsHTML += `<li >${button}</li>`
            menuList.innerHTML = buttonsHTML
            console.log(buttonsHTML)

        })

        let li = document.querySelectorAll("li")
        console.log(li)
        li.forEach(listaMenu =>{
            listaMenu.addEventListener("click", (e)=>{
                pageToDisplay(e.target.innerHTML)
            })
        })
        

        // for (let i = 0; i < buttonsNav.length; i++) {
        //     let li = document.createElement('li')
        //     li.innerHTML = buttonsNav[i]
        //     menuList.appendChild(li)

        //     li.addEventListener("click", (e) => {

        //         pageToDisplay(e.target.innerHTML)

        //     })

        // }
    })

    pageToDisplay("Home")
}

displayNavBar()

async function pageToDisplay(pagefromClick) {
    let page = document.getElementById("root")
    page.innerHTML = ""
    switch (pagefromClick) {
        case "Characters":
            let characters = await displayCharacters()
            page.appendChild(characters)
            break;
        case "Locations":
            page.innerHTML="<h1>ESTOY EN LOCATIONS</h1>"
            break;
        case "Episodes":
            page.innerHTML="<h1>ESTOY EN EPISODE</h1>"
            break;
        default:
            page.innerHTML= displayHome()
            break;
    }

}