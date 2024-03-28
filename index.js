"use strict";
let infos;

fetch('./infos.json')
  .then((response => response.json()))
  .then((data) => {
    infos = data.data
  })
  .catch(error => console.error("Erreur lors du chargement du JSON:", error));

// OPEN ELEMENT INFORMATION ABOUT PROJECT //
const btnInfosOfCardsProject = document.getElementsByClassName("project__container__card__btn-infos");

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

    for (let obj of infos) {
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