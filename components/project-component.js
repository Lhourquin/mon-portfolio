import './../assets/data'
export class ProjectComponent extends HTMLElement {


    constructor() {
        super();
        this.infos = [];
        this.attachShadow({ mode: 'open' });

    }

    connectedCallback() {
        this.getInfos();
        this.openProjectExplanation();
        // this.closeProjectExplanation();
    }

    getInfos() {
        fetch('./../assets/data/infos.json')
            .then((res) => res.json())
            .then((data) => {
                this.infos = data.data;
                this.render();
            })
            .catch((error) => console.error("Erreur de chargement du fichier JSON:", error));
    }

    render() {
        const infos = this.infos.reverse();
        const style = `@import './../assets/css/project.css';`;
        const cardHTML = infos.map(
            info => `
            <style>${style}</style>
                <div class="project__container__card" data-aos="${info.fade}">
                ${info.isNew ? '<div class="loader__element">En cours</div>':''}
                    <h4 class="project__container__card-name">${info.projectName}</h4>
                    <div class="project__container__card-techno">
                    ${info.technoLogos.map(technoLogo => `
                        <img class="project__container__card-techno__logo" src="${technoLogo.src}"
                            alt="${technoLogo.name}">
                        `).join('')
                }
                        
                    </div>
                    <img class="project__container__card__img-presentation"
                        src="${info.img}" />
                    <button id="project_id-${info.id}" class="project__container__card__btn-infos">En savoir plus</button>
                </div>
                `
        ).join('');
        this.shadowRoot.innerHTML = cardHTML;
    }

    openProjectExplanation() {
        this.shadowRoot.addEventListener("click", (e) => {
            if (e.target.id.includes('project_id-')) {
                const id = e.target.id;
                fetch('./../assets/data/explanation.json')
                    .then((res) => res.json())
                    .then((explanations) => {
                        const explanationsResult = explanations.data.find((obj) => obj.id == id);
                        const explanationContainer = `
                        <div class="containerExplanation" data-aos="fade-up">
                            <button id="closeContainerExplanation">
                            </button>
                            <div >
                              <h4 class="containerExplanation-h4">${explanationsResult.name}</h4>
                              <img class="image-project" src="${explanationsResult.image}"/>
                              <div class="containerInformation">
                              ${explanationsResult?.technos ?
                                `<div class="containerExplanation__p__container-techno-icons">
                                          <h4><strong>Technologie utiliser :</strong></h4>
                                          <div id="container-techno-icons">
                                            ${explanationsResult.technos.map((icons) => { return `<img class="icons-techno" src="${icons}"/>` }).join('')}
                                          </div>
                                </div>`
                                : ""}
                                    ${explanationsResult?.ghLink ? `<h4><strong>Repository github du projet :</strong></h4><p> <a style="text-decoration : underline;" target="”_blank”" href="${explanationsResult.ghLink}">${explanationsResult.ghLink}</a></p>` : ""}
                                    ${explanationsResult?.linkProject ? `<h4><strong>Lien du projet :</strong></h4><p> <a style="text-decoration : underline;" target="”_blank”" href="${explanationsResult.linkProject}">${explanationsResult.linkProject}</a></p>` : ""}
                                      ${explanationsResult?.api ? `
                                        <h4><strong>API utiliser (lien) :</strong></h4><p> ${explanationsResult.api.map((key) => {
                                    return ` <a style="text-decoration : underline;" target="”_blank”" href="${key.link}">${key.service}</a>`
                                })}
                                     </p> ` : ""}
                                    ${explanationsResult?.description ? ` <h4><strong>Description :</strong></h4><p> ${explanationsResult.description}</p>` : ""}
                                     ${explanationsResult?.objectif ? `<h4><strong>Objectif :</strong></h4><p> ${explanationsResult.objectif}</p>` : ""}
                                     ${explanationsResult?.outils ? `<h4><strong>Outils :</strong></h4><p> ${explanationsResult.outils}</p>` : ""}
                                    ${explanationsResult?.features ? `
                                    <div id="container-fonctionality">
                                      <h4 class="container-fonctionality__h4">Fonctionalitées : </h4>
                                      ${explanationsResult.features.map((obj) => {
                                    return `
                                        
                                        <h5>${obj.feature} :</h5>
                                        <img src="${obj.img}"/>
                                        `
                                }).join('')}
                                    </div>`: ""}
                                    ${explanationsResult?.video ?
                                `<div>
                                      <h4>Vidéo d'explication :</h4>
                                      <iframe  src="${explanationsResult.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>` : ""}
                                  </div>
                              </div>
                             
                        </div>
                    `;
                        let filterBackground = document.createElement("div");
                        document.documentElement.style.overflowY = "hidden";
                        document.body.prepend(filterBackground);
                        filterBackground.setAttribute("id", "filterBackground")
                        // filterBackground.classList.add("filterBackground");
                        filterBackground.innerHTML = explanationContainer;

                    })

            }
        })
    }

    // closeProjectExplanation() {
    //     console.log('?')

    //     this.shadowRoot.addEventListener('click', (e) => {
    //         console.log(e.target)
    //         const id = e.target.id;
    //         if (id == "closeContainerExplanation") {
    //             document.body.removeChild(filterBackground);
    //             document.documentElement.style.overflowY = "auto";
    //         }

    //     });
    // }
}

customElements.define('project-component', ProjectComponent);