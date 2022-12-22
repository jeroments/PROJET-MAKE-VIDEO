const carrousel = [
    { link: "./videos/video-1.mp4", title: "BAMBOO BEACH 🏝 4K", desc: "Paillote balinaise blottie entre 2 dunes sauvages, face à la mer ! Bienvenue au Bamboo beach, notre paillote balinaise est blottie entre deux dunes avec une ambiance détendue et très familiale. Vous pouvez vous restaurer ou boire un cocktail sur notre terrasse en teck ou les pieds dans la sable. Ou alors lézarder sur nos transats en bord de mer. Cuisine Méditerranéenne, produits frais, menu enfant.", date: "1er juillet 2022" },
    { link: "./videos/video-2.mp4", title: "Agence PIERRES DU GARD", desc: "Cette villa de plain-pied aux belles prestations construite en 1980 à une surface habitable d'environ 180m2 sur un terrain de 4900m2 entièrement clos avec piscine. Impressionnant séjour de 52m2 avec cheminée et mezzanine, une spacieuse cuisine équipée, 4 magnifiques chambres, une salle de bain, une salle d'eau, une buanderie, une véranda, un grand garage d'environ 70m2, une grande terrasse avec piscine ainsi qu'un jardin paysagé. Contactez votre conseillé au : 06 28 52 66 16", date: " 27 septembre 2022" },
    { link: "./videos/video-3.mp4", title: "BUGGY VS DRONE", desc: "Travelling d'un buggy dans la savane vu d'un drone. ", date: "14 octobre 2022" }
]




let nextSlide = document.querySelector(".slider-btn-next");
let prevSlide = document.querySelector(".slider-btn-prev");

let slideToEdit = document.querySelector(".myVideo")
let slideTitle = document.querySelector(".video-titre")
let slideDate = document.querySelector(".video-date")
let slideDesc = document.querySelector(".video-desc")



let curSlide = 0;
let maxSlide = carrousel.length - 1;


nextSlide.addEventListener("click", function () {
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    slideToEdit.src = carrousel[curSlide].link
    slideTitle.textContent = `${carrousel[curSlide].title}`
    slideDate.textContent = `${carrousel[curSlide].date}`
    slideDesc.textContent = `${carrousel[curSlide].desc}`


});

prevSlide.addEventListener("click", function () {
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }
    slideToEdit.src = carrousel[curSlide].link
    slideTitle.textContent = `${carrousel[curSlide].title}`
    slideDate.textContent = `${carrousel[curSlide].date}`
    slideDesc.textContent = `${carrousel[curSlide].desc}`

});


