// ANNIMATION NETWORK ARROUND PICTURE //
let angle = 360 / 4;
let finalAngle = -360;

const circleContainer = document.querySelectorAll(".network");



circleContainer.forEach(circle => {


  finalAngle -= 90;

  circle.style.transform = `rotate(${angle}deg)`;
  circle.style.setProperty("--start-angle-of-rotation", `-${angle}deg`);
  circle.style.setProperty("--end-angle-of-rotation", `${finalAngle}deg`);


  angle += 90;

});

// LOGO ANNIMATION //
const slideOutAnnimationContainer = document.getElementById("about__container__logo-annimation").children;
slideOutAnnimationContainer[0].classList.add("slide-out-fwd-center");
setInterval(() => {
  slideOutAnnimationContainer[2].classList.add("slide-out-fwd-center");
  slideOutAnnimationContainer[0].classList.add("displayNoneAnnimation");
  slideOutAnnimationContainer[2].classList.remove("displayNoneAnnimation");
  slideOutAnnimationContainer[5].classList.add("slide-out-fwd-center");
  slideOutAnnimationContainer[5].classList.remove("displayNoneAnnimation");
}, 3000);
setInterval(() => {
  slideOutAnnimationContainer[3].classList.add("slide-out-fwd-center");
  slideOutAnnimationContainer[3].classList.remove("displayNoneAnnimation");
  slideOutAnnimationContainer[0].classList.add("displayNoneAnnimation");

  slideOutAnnimationContainer[4].classList.remove("displayNoneAnnimation");
  slideOutAnnimationContainer[4].classList.add("slide-out-fwd-center");
}, 4000);
setInterval(() => {
  slideOutAnnimationContainer[1].classList.add("slide-out-fwd-center");
  slideOutAnnimationContainer[1].classList.remove("displayNoneAnnimation");
  slideOutAnnimationContainer[0].classList.add("slide-out-fwd-center");
  slideOutAnnimationContainer[0].classList.remove("displayNoneAnnimation");
}, 5000);
setInterval(() => {
  slideOutAnnimationContainer[7].classList.add("slide-out-fwd-center");
  slideOutAnnimationContainer[0].classList.add("displayNoneAnnimation");
  slideOutAnnimationContainer[7].classList.remove("displayNoneAnnimation");
  slideOutAnnimationContainer[6].classList.add("slide-out-fwd-center");
  slideOutAnnimationContainer[6].classList.remove("displayNoneAnnimation");
}, 6000);

// OPEN ELEMENT INFORMATION ABOUT PROJECT //
const btnInfosOfCardsProject = document.getElementsByClassName("project__container__card__btn-infos");
const infosAboutProjects = [
  {
    name: "React Prayer Times",
    image: "./assets/img/project/react-prayer-times/react-prayer-times-project.JPG",
    technos: [
      "./assets/img/icons/techno/CSS3_logo.svg",
      "./assets/img/icons/techno/react-logo.svg",
      "./assets/img/icons/techno/Sass_Logo_Color.svg",
      "./assets/img/icons/techno/Unofficial_JavaScript_logo_2.svg"
    ],
    ghLink: "https://github.com/Lhourquin/React-Prayer-Times",
    linkProject: "https://react-prayer-times.vercel.app/",
    description: "Application web progressive responsive d'horaires de prières développer avec React JS, utilisation des Service Worker, Web Worker, et plusieurs API.",
    objectif: "Ce projet avait pour objectifs d'acquérir les connaissances de base de cette librairie, SERVICE WORKER et WEB WORKER, et d'utiliser l'API.",
    features: [
      {
        feature: "Mode hors ligne",
        img: "./assets/img/project/react-prayer-times/offline.gif"
      },
      {
        feature: "Instalation mobile",
        img: "./assets/img/project/react-prayer-times/instalation.gif"
      },
      {
        feature: "Localisation",
        img: "./assets/img/project/react-prayer-times/location.gif"
      },
      {
        feature: "Recherche par ville et par pays",
        img: "./assets/img/project/react-prayer-times/search-by-city-country.gif"
      },
      {
        feature: "Avoir les horaires du mois",
        img: "./assets/img/project/react-prayer-times/calendar.gif"
      },
      {
        feature: "Lecture du Coran et de la traduction française",
        img: "./assets/img/project/react-prayer-times/quran.gif"
      }
    ],
    outils: "Figma, GIT, VS code, Trello",
    api: [
      {
        service: "Localisation",
        link: "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=XXXXXX&longitude=XXXXXXX&localityLanguage=fr"
      },
      {
        service: "Horaires du jours",
        link: "https://api.aladhan.com/v1/timingsByCity"
      },
      {
        service: "Horaires du mois",
        link: "https://api.aladhan.com/v1/calendarByCity"
      },
      {
        service: "Coran et Traduction",
        link: "https://quranenc.com/api/translation/sura/french_hameedullah/"
      }
    ],
    // video: "https://www.youtube.com/embed/dQw4w9WgXcQ",


  },
  {
    name: "Advice Generator App",
    image: "./assets/img/project/frontendmentor/advice-app-generator/active-states.jpg",
    technos: [
      "./assets/img/icons/techno/CSS3_logo.svg",
      "./assets/img/icons/techno/Unofficial_JavaScript_logo_2.svg",
      "./assets/img/icons/techno/HTML5_Badge.svg"
    ],
    ghLink: "https://github.com/Lhourquin/advice-generator-app",
    linkProject: "https://lhourquin.github.io/advice-generator-app/",
    objectif: "Challenge frontend mentor, réaliser un générateur de conseils/citation en utilisant une API, et les technos HTML CSS et JAVASCRIPT.",
    outils: "GIT, VS code"



  },
  {
    name: "Interactive Rating Component",
    image: "./assets/img/project/frontendmentor/rating-component/active-states.jpg",
    technos: [
      "./assets/img/icons/techno/CSS3_logo.svg",
      "./assets/img/icons/techno/Unofficial_JavaScript_logo_2.svg",
      "./assets/img/icons/techno/HTML5_Badge.svg"
    ],
    ghLink: "https://github.com/Lhourquin/interactive-rating-component",
    linkProject: "https://lhourquin.github.io/interactive-rating-component/",
    objectif: "Challenge frontend mentor, réaliser un composant interactif de notation en HTML CSS et JAVASCRIPT.",
    outils: "GIT, VS code"


  },
  {
    name: "Christopher Benoit",
    image: "./assets/img/project/christopher-benoit/christopher-benoit.JPG",
    technos: [
      "./assets/img/icons/techno/CSS3_logo.svg",
      "./assets/img/icons/techno/Unofficial_JavaScript_logo_2.svg",
      "./assets/img/icons/techno/HTML5_Badge.svg",
      "./assets/img/icons/techno/Sass_Logo_Color.svg"
    ],
    ghLink: "https://github.com/Lhourquin/Christopher-Benoit-Photographie",
    linkProject: "https://lhourquin.github.io/Christopher-Benoit-Photographie/",
    description: "Site vitrine d'un photographe paysagiste. ( exercice )",
    objectif: "Réaliser un site vitrine responsive.",
    outils: "GIT, VS code, Trello"
  },
  {
    name: "Foodrum",
    image: "./assets/img/project/foodrum/foodrum-connect.JPG",
    technos: [
      "./assets/img/icons/techno/CSS3_logo.svg",
      "./assets/img/icons/techno/Unofficial_JavaScript_logo_2.svg",
      "./assets/img/icons/techno/HTML5_Badge.svg",
      "./assets/img/icons/techno/bootstrap-original-logo.svg"

    ],
    ghLink: "https://github.com/Lhourquin/Login-Simulation_localStorage",
    linkProject: "https://lhourquin.github.io/Login-Simulation_localStorage/index.html",
    description: "Simulation de connexion/inscription à un forum à l'aide du LocalStorage ( exercice )",
    objectif: "Apprendre à utiliser le localStorage.",
    outils: "GIT, VS code, Trello"
  },
  {
    name: "Laurent Ehrlich",
    image: "./assets/img/project/laurent-ehrlich/laurent-ehrlich.JPG",
    technos: [
      "./assets/img/icons/techno/CSS3_logo.svg",
      "./assets/img/icons/techno/Unofficial_JavaScript_logo_2.svg",
      "./assets/img/icons/techno/HTML5_Badge.svg",
      "./assets/img/icons/techno/bootstrap-original-logo.svg",
      "./assets/img/icons/techno/Sass_Logo_Color.svg",


    ],
    ghLink: "https://github.com/axelehrlich59/Laurent-ma-on",
    linkProject: "https://axelehrlich59.github.io/Laurent-ma-on/",
    description: "Site vitrine pour un auto-entrepreneur du batiment.",
    objectif: "Réaliser un site vitrine de A à Z, du cahier des charges, à l'organisations des tâches et de la conception du design, en binomes.",
    outils: "Adobe XD, GIT, VS code, Trello"

  },
  {
    name: "Scrape Masjid",
    image: "./assets/img/project/scrape-masjid/scrapeMasjid.gif",
    technos: [
      "./assets/img/icons/techno/Unofficial_JavaScript_logo_2.svg",
      "./assets/img/icons/techno/HTML5_Badge.svg",
      "./assets/img/icons/techno/Node.js_logo.svg",

    ],
    ghLink: "https://github.com/Lhourquin/ScrapeMasjid",
    objectif: "Scrapper les données d'une API et les afficher sur une page (exercice)",
    outils: "Terminal, GIT, VS code"

  },
  {
    name: "Mon portfolio",
    image: "./assets/img/project/laurent-ehrlich/laurent-ehrlich.JPG",
    technos: [
      "./assets/img/icons/techno/CSS3_logo.svg",
      "./assets/img/icons/techno/Unofficial_JavaScript_logo_2.svg",
      "./assets/img/icons/techno/HTML5_Badge.svg",

    ],
    ghLink: "https://github.com/Lhourquin/mon-portfolio",
    description: "Mon portfolio sur lequel vous naviguez actuellement.",
    outils: "Figma, GIT, VS code"
  },
  {
    name: "Job Static Listings",
    image: "./assets/img/project/frontendmentor/job-listings/active-states.jpg",
    technos: [
      "./assets/img/icons/techno/styled-components-1.svg",
      "./assets/img/icons/techno/react-logo.svg",
    ],
    linkProject: "https://static-job-listings-react-ten.vercel.app/",
    ghLink: "https://github.com/Lhourquin/static-job-listings-master",
    description: "Challenge Frontendmentor qui consiste à créer cette page d'offre d'emploi et à la rendre aussi proche que possible de la maquette.",
    objectif: "Trier les offres selon les tags choisis et aborder les styled components (exercice)",
    outils: "GIT, VS code"
  },
  {
    name: "API pokemons (en cours)",
    image: "./assets/img/project/pokemons-api/pikashu.png",
    technos: [
      "./assets/img/icons/techno/Node.js_logo.svg",
    ],
    ghLink: "https://github.com/Lhourquin/Node-JS-API-Rest-Pokemons",
    objectif: "Objectif de ce projet : Réaliser une API Rest avec Node JS.",
    outils: "Terminal, GIT, VS code, Insomnia"

  },

];

function removeComma(container) {
  container.innerHTML = container.innerHTML.split(",").join("");
  return container;
}

function checkContainerExist(...containers) {
  let arrayOfContainers = [...containers];
  arrayOfContainers.map((container) => {
    if (container) {
      removeComma(container);
    }
  })
}
console.log()
for (let btn of btnInfosOfCardsProject) {
  btn.addEventListener('click', (event) => {
    let btnInfosProject = event.currentTarget;
    let projectContainerCards = btnInfosProject.parentNode;
    let filterBackground = document.createElement("div");

    document.documentElement.style.overflowY = "hidden";
    document.body.prepend(filterBackground);
    filterBackground.classList.add("filterBackground");

    for (let obj of infosAboutProjects) {
      if (obj.name === projectContainerCards.children[0].innerText) {
        let containerExplanation = `
          <div class="containerExplanation" data-aos="fade-up">
            <button id="closeContainerExplanation"><svg class="svg-cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" fill="white"/></svg></button>
              <div >
                <h4 class="containerExplanation-h4">${obj.name}</h4>
                <img class="image-project" src="${obj.image}"/>
                <div class="containerInformation">
                ${obj?.technos ?
                  `<div class="containerExplanation__p__container-techno-icons">
                            <h4><strong>Technologie utiliser :</strong></h4>
                            <div id="container-techno-icons">
                              ${obj.technos.map((icons) => { return `<img class="icons-techno" src="${icons}"/>` })}
                            </div>
                  </div>`
                  : ""}
                      ${obj?.ghLink ? `<h4><strong>Repository github du projet :</strong></h4><p> <a style="text-decoration : underline;" target="”_blank”" href="${obj.ghLink}">${obj.ghLink}</a></p>` : ""}
                      ${obj?.linkProject ? `<h4><strong>Lien du projet :</strong></h4><p> <a style="text-decoration : underline;" target="”_blank”" href="${obj.linkProject}">${obj.linkProject}</a></p>` : ""}
                        ${obj?.api ? `
                          <h4><strong>API utiliser (lien) :</strong></h4><p> ${obj.api.map((key) => {
                    return ` <a style="text-decoration : underline;" target="”_blank”" href="${key.link}">${key.service}</a>`
                  })}
                       </p> ` : ""}
                      ${obj?.description ? ` <h4><strong>Description :</strong></h4><p> ${obj.description}</p>` : ""}
                       ${obj?.objectif ? `<h4><strong>Objectif :</strong></h4><p> ${obj.objectif}</p>` : ""}
                       ${obj?.outils ? `<h4><strong>Outils :</strong></h4><p> ${obj.outils}</p>` : ""}
                      ${obj?.features ? `
                      <div id="container-fonctionality">
                        <h4 class="container-fonctionality__h4">Fonctionalitées : </h4>
                        ${obj.features.map((obj) => {
                    return `
                          
                          <h5>${obj.feature} :</h5>
                          <img src="${obj.img}"/>
                          `
                  }
      
                  )}
                      </div>`: ""}
                      ${obj?.video ?
                  `<div>
                        <h4>Vidéo d'explication :</h4>
                        <iframe  src="${obj.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>` : ""}
                    </div>
                </div>
               
          </div>
      `;

        filterBackground.innerHTML = containerExplanation;
        let closeContainerExplanation = document.getElementById("closeContainerExplanation");

        let containerTechnoIcons = document.getElementById("container-techno-icons");
        let containerFonctionality = document.getElementById("container-fonctionality");
        checkContainerExist(containerFonctionality, containerTechnoIcons)

        closeContainerExplanation.addEventListener('click', () => {
          document.body.removeChild(filterBackground);
          document.documentElement.style.overflowY = "auto";
        });
      }
    }
  })
}