console.clear();
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


const btnInfos = document.getElementsByClassName("project__container__card__btn-infos");
console.log(btnInfos)

for(let btn of btnInfos){
  btn.addEventListener('click', (event)=> {
    console.log(btnInfos)
    let target = event;
    let parent = target.currentTarget.parentNode;
    let divExplanation = document.createElement("div");
    let divBlockedPage = document.createElement("div");
    let divInfo = document.createElement("div");
   // document.getElementById("project").prepend(divExplanation);
   document.body.classList.add("overflowHidden");
    document.body.prepend(divBlockedPage);
    divBlockedPage.prepend(divExplanation);
    divBlockedPage.classList.add("test");
    divExplanation.classList.add("expander");
    divExplanation.prepend(divInfo);
    divInfo.classList.add("divInfo");
    console.log(parent)
  })
}
/*
btnInfos.addEventListener('click', (event)=> {
  console.log(btnInfos)
  let target = event;
  let parent = target.currentTarget.parentNode;
  console.log(parent)
})*/