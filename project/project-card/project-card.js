export class ProjectCardComponent extends HTMLElement {


    constructor() {
        super();
        this.infos = [];
        this.attachShadow({ mode: 'open' });

    }

    connectedCallback() {
        this.getInfos();
    }

    getInfos() {
        fetch('./../../infos.json')
            .then((res) => res.json())
            .then((data) => {
                this.infos = data.data;
                this.render();
            })
            .catch((error) => console.error("Erreur de chargement du fichier JSON:", error));
    }

    render() {
        const infos = this.infos;
        const style = `@import './project/project-card/project.css';`;
        const cardHTML = infos.map(
            info => `
            <style>${style}</style>
                <div class="project__container__card" data-aos="fade-left">
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
                    <button class="project__container__card__btn-infos">En savoir plus</button>
                </div>
                `
        ).join('');
        this.shadowRoot.innerHTML = cardHTML;
    }
}

customElements.define('project-card', ProjectCardComponent);