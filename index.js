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
    image : "./assets/img/project/react-prayer-times/rpt-192.svg",
    technos: [
      "./assets/img/icons/techno/CSS3_logo.svg",
      "./assets/img/icons/techno/react-logo.svg",
      "./assets/img/icons/techno/Sass_Logo_Color.svg",
      "./assets/img/icons/techno/Unofficial_JavaScript_logo_2.svg"
    ],
    ghLink: "https://github.com/Lhourquin/React-Prayer-Times",
    description: "Application web progressive responsive d'horaires de prières développer avec React JS, utilisation des Service Worker, Web Worker, et plusieurs API.",
    objectif : "ce projet avait pour objectifs d'acquérir les connaissances de base de cette librairie, SERVICE WORKER et WEB WORKER, et d'utiliser l'API.",
    features : [
      {
        feature : "Mode hors ligne",
        img : "./assets/img/project/react-prayer-times/rpt-192.svg"
      },
      {
        feature : "Mode hors ligne",
        img : ""
      },
      {
        feature : "Mode hors ligne",
        img : ""
      }
    ]
  },
  {
    name: "Advice Geneartor App",
    image : "./assets/img/project/frontendmentor/advice-app-generator/active-states.jpg",
    technos: [
      "./assets/img/icons/techno/CSS3_logo.svg",
      "./assets/img/icons/techno/Unofficial_JavaScript_logo_2.svg",
      "./assets/img/icons/techno/HTML5_Badge.svg"
    ],
    ghLink: "https://github.com/Lhourquin/advice-generator-app",
    objectif : "Challenge frontend mentor, réaliser un générateur de conseils/citation en utilisant une API, et les technos HTML CSS et JAVASCRIPT.",
  


  },
  {
    name: "Interactive Rating Component",
    image : "./assets/img/project/frontendmentor/rating-component/interactive-rating-desktop-preview.jpg",
    technos: [
      "./assets/img/icons/techno/CSS3_logo.svg",
      "./assets/img/icons/techno/Unofficial_JavaScript_logo_2.svg",
      "./assets/img/icons/techno/HTML5_Badge.svg"
    ],
    ghLink: "https://github.com/Lhourquin/interactive-rating-component",
    objectif : "Challenge frontend mentor, réaliser un composant interactif de notation en HTML CSS et JAVASCRIPT.",


  },
];

for (let btn of btnInfosOfCardsProject) {
  btn.addEventListener('click', (event) => {
    let btnInfosProject = event.currentTarget;
    let projectContainerCards = btnInfosProject.parentNode;
    let filterBackground = document.createElement("div");

    document.body.style.overflowY = "hidden";
    document.body.prepend(filterBackground);
    filterBackground.classList.add("filterBackground");

    for (let obj of infosAboutProjects) {
      if (obj.name === projectContainerCards.children[0].innerText) {
        let containerExplanation = `
          <div class="containerExplanation" data-aos="fade-up">
            <button id="closeContainerExplanation">cross</button>
              <div style="color:red;">
                <h5>${obj?.name}</h5>
                <img src="${obj?.image}"/>
                <p> ${obj?.technos ? `Technos utiliser : ${obj.technos.map((icons) => { return `<img src="${icons}"/>` })}` : ""}</p>
                <p>${obj?.ghLink ? `Lien du projet : <a href="${obj.ghLink}">${obj.ghLink}</a>` : ""}</p>
                <p> ${obj?.description ? `Description : ${obj.description}` : ""}</p>
              </div>
          </div>
      `;
        filterBackground.innerHTML = containerExplanation;
        let closeContainerExplanation = document.getElementById("closeContainerExplanation");

        closeContainerExplanation.addEventListener('click', () => {
          document.body.removeChild(filterBackground)
          document.body.style.overflowY = "auto";
        });
      }
    }
  })
}