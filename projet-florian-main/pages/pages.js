const galerieVideos = {
    "temoignages": [
        { title: "activ crea Témoignage service à la personne", link: "https://www.youtube.com/embed/cL-vFp-mFNg" },
        { title: "ACTIV CREA Témoignage par rv maroquinerie", link: "https://www.youtube.com/embed/7hFqKwN6Gu4" }

    ],
    "paysage": [
        { title: "BUGGY VS DRONE", link: "https://www.youtube.com/embed/Y7KJiTWenXQ" }

    ],
    "mobilier": [
        { title: "Présentation de la cuisine Cindy en 4k", link: "https://www.youtube.com/embed/pAkPRO1PV5k" },
        { title: "ACOBOIS construction bois & couverture", link: "https://www.youtube.com/embed/BcxGQ0EZAcA" },
        { title: "INSIDE BY SP gamme salle de bain & cuisine", link: "https://www.youtube.com/embed/rXcC_mt3d5c" },
    ]
}


let galerieBtn = document.querySelectorAll(".galerie-select-btn")
let galerieSelect = document.querySelector(".galerie-categorie")
let galerieGrid = document.querySelector(".galerie-grid")


galerieBtn.forEach(button => {
    button.addEventListener("click", function () {
        if (!button.getAttribute("value")) return
        let categorieChoosen = button.getAttribute("value")
        galerieGrid.innerHTML = ""
        galerieVideos[categorieChoosen].forEach(video => {

            let newDiv = document.createElement("div")
            let newTitle = document.createElement("h1")
            let newVideo = document.createElement("iframe")
            newDiv.setAttribute("style",
                "display: flex; " +
                "flex-direction: column; " +
                "align-items: center;" +
                "width: 500px;" +
                "height: 300px;" +
                "background-color: #c2ccce;" +
                "border-radius: 10px;"
                // "transition-duration: 2s;"
            )
            newTitle.textContent = video.title
            newVideo.src = video.link

            newDiv.append(newTitle, newVideo)
            galerieGrid.append(newDiv)
        })
    })
})

