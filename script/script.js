import myWorks from "./Projects.js";

const navLabel = document.querySelectorAll(".label");
const worksContainer = document.querySelector(".work-grid");
// Nav Bar
const labels = [
  { name: "Hello,", link: "About" },
  { name: "I am", link: "Works" },
  { name: "Youssef", link: "Contacts" },
];

navLabel.forEach((nav, index) => {
  nav.addEventListener("mouseover", () => {
    nav.style.marginLeft = "2.4rem";
    nav.textContent = `${labels[index].link}`;
  });
  nav.addEventListener("mouseout", () => {
    nav.style.marginLeft = "0";
    nav.textContent = `${labels[index].name}`;
  });
});

// Works
worksContainer.innerHTML = "";

myWorks.forEach((work, index) => {
  worksContainer.innerHTML += `
  <div class="work">
  <div class="work--img-container">
  <img src="${myWorks[index].src}" alt="Porject Image" class="work-img">
  <div class="preview hidden">
  <p class="preview--txt">${myWorks[index].name}</p>
  <div class="preview--view">
  <a href="${myWorks[index].srcCode}" class="preview-link"><img src="imgs/logos/github-brands.svg" alt="" class="preview--img"></a>
  <a href="${myWorks[index].live}" class="preview-link"><img src="imgs/logos/eye-solid.svg" alt="" class="preview--img"></a>
  </div>
  </div>
  </div>
  </div>`;
});

const worksImg = document.querySelectorAll(".work-img");
const works = document.querySelectorAll(".work");
const previews = document.querySelectorAll(".preview");

// console.log(previews)

works.forEach((work, index) => {
  work.addEventListener("mouseover", () => {
    worksImg[index].classList.add("work-img--scale");
    previews[index].classList.remove("hidden");
    // previews[index].classList.add("animate__zoomIn");
  });
  work.addEventListener("mouseout", () => {
    // previews[index].classList.remove("animate__zoomIn");
    previews[index].classList.add("hidden");
    worksImg[index].classList.remove("work-img--scale");
  });
});
