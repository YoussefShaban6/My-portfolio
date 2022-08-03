import myWorks from "./Projects.js";

const webViewer = document.querySelectorAll(".web-view");
const worksContainer = document.querySelector(".work-grid");
const heroSection = document.querySelector(".hero-section");
const contentLabel = document.querySelectorAll(".lbl");
const labelLinks = document.querySelectorAll(".lbl--link");

// Nav Bar
const labels = [
  { name: "Hello,", link: "About" },
  { name: "I am", link: "Works" },
  { name: "Youssef", link: "Contacts" },
];

webViewer.forEach((nav, index) => {
  nav.addEventListener("mouseover", () => {
    nav.style.marginLeft = "2.4rem";
    nav.textContent = `${labels[index].link}`;
  });
  nav.addEventListener("mouseout", () => {
    nav.style.marginLeft = "0";
    nav.textContent = `${labels[index].name}`;
  });
});

let isClicked = false;

heroSection.addEventListener("click", () => {
  console.log(labelLinks);
  labelLinks.forEach((nav, index) => {
    if (isClicked) {
      labelLinks[index].classList.remove("label-hide");
      contentLabel[index].classList.add("label-hide");
    } else {
      labelLinks[index].classList.add("label-hide");
      contentLabel[index].classList.remove("label-hide");
    }
  });
  isClicked = !isClicked;
});

// Smooth Scrolling
const section = document.querySelector("html");
section.scrollIntoView({ behavior: "smooth" });

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
