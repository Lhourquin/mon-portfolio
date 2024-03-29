import './components/project-component.js';
import './components/annimation.js';
document.addEventListener('click', (e) => {
  const id = e.target.id;
  if (id == "closeContainerExplanation" || id == "filterBackground" ) {
      const filterBackground = document.getElementById('filterBackground');
      document.body.removeChild(filterBackground);
      document.documentElement.style.overflowY = "auto";
  }
});