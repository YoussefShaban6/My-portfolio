"use-strict";
import myWorks from "./Projects.js";

const webViewer = document.querySelectorAll(".web-view");
const worksContainer = document.querySelector(".work-grid");
const heroSection = document.querySelector(".hero-section");
const contentLabel = document.querySelectorAll(".lbl");
const labelLinks = document.querySelectorAll(".lbl--link");


/* ---------------------------Nav Bar--------------------------- */
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

/* ---------------------------Works--------------------------- */
worksContainer.innerHTML = "";

myWorks.forEach((work, index) => {
  worksContainer.innerHTML += `
  <div class="work col-md-6" name="${work.type}">
  <div class="work--img-container">
  <img src="${work.src}" alt="Porject Image" class="work-img">
  <div class="preview hidden">
  <p class="preview--txt">${work.name}</p>
  <div class="preview--view">
  <a href="${work.srcCode}" class="preview-link" target="_blank"><img src="imgs/logos/github-brands.svg" alt="" class="preview--img"></a>
  <a href="${work.live}" class="preview-link" target="_blank"><img src="imgs/logos/eye-solid.svg" alt="" class="preview--img"></a>
  </div>
  </div>
  </div>
  </div>`;
});

const works = document.querySelectorAll(".work");

const worksImg = document.querySelectorAll(".work-img");
const previews = document.querySelectorAll(".preview");

// console.log(previews)

works.forEach((work, index) => {
  work.addEventListener("mouseover", () => {
    worksImg[index].classList.add("work-img--scale");
    previews[index].classList.remove("hidden");
  });
  work.addEventListener("mouseout", () => {
    previews[index].classList.add("hidden");
    worksImg[index].classList.remove("work-img--scale");
  });
});

const tabs = document.querySelectorAll(".nav-tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("isclicked");
    const filteredTab = document.querySelector(".active");
    filteredTab.className = filteredTab.className.replace("active", "");

    e.target.classList.add("active");

    works.forEach((work) => {
      work.style.display = "none";
    });

    const filter = () => {
      if (e.target.href.split("#")[1] !== "all") {
        const filteredCards = document.getElementsByName(
          e.target.href.split("#")[1]
        );

        filteredCards.forEach((card) => {
          card.style.display = "block";
        });
      } else {
        works.forEach((card) => {
          card.style.display = "block";
        });
      }
    };

    setTimeout(filter, 50);
  });
});

/* ---------------------------Certificates--------------------------- */
import { Certificates } from "./Certificates.js";

const coursesContainer = document.querySelector(".education");

const certificateHandler = (idx) => {
  const coursesList = Certificates[idx].list;

  let courseListEl = "";
  for (const course of coursesList) {
    courseListEl += `<li>${
      course.link !== "#"
        ? `<a href=${course.link} target="_blank" >${course.name}</a>`
        : `<span>${course.name}</span>`
    } </li>`;
  }

  return `
  <div class="courses--content">
  <div class="course">
    <div class="certificate--header">${Certificates[idx].name}</div>
      <div class="finish--date">${Certificates[idx].date}</div>
        <div class="courses--list">
          <ul class="p-0">
            ${courseListEl}
          </ul>
        </div>
    </div>
    <div class="certificate--icon-container txt-center">
      <div class="certificate--icon"><img src=${Certificates[idx].src} /></div>
    </div>
  </div>
  `;
};

const certificatesNum = Certificates.length;

for (let idx = 0; idx < certificatesNum; idx++) {
  let certificateEl = certificateHandler(idx);
  coursesContainer.innerHTML += certificateEl;
}

// Quotes

const dots = document.querySelectorAll(".dot");
const quotes = document.querySelectorAll(".quote");
console.log(quotes);

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    dots.forEach((activeDot, index) => {
      activeDot.classList.toggle("active--dot");
      quotes[index].classList.toggle("quote-hidden");
    });
  });
});
