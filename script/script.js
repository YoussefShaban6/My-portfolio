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

/* ---------------------------Works--------------------------- */
worksContainer.innerHTML = "";

myWorks.forEach((work, index) => {
  worksContainer.innerHTML += `
  <div class="work" name="${work.type}">
  <div class="work--img-container">
  <img src="${work.src}" alt="Porject Image" class="work-img">
  <div class="preview hidden">
  <p class="preview--txt">${work.name}</p>
  <div class="preview--view">
  <a href="${work.srcCode}" class="preview-link"><img src="imgs/logos/github-brands.svg" alt="" class="preview--img"></a>
  <a href="${work.live}" class="preview-link"><img src="imgs/logos/eye-solid.svg" alt="" class="preview--img"></a>
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

const coursesContainer1 = document.querySelector(".edu--container1");
const coursesContainer2 = document.querySelector(".edu--container2");

const certificateHandler = (idx) => {
  const coursesList = Certificates[idx].list;

  let courseListEl = "";
  for (const course of coursesList) {
    courseListEl += `<li>${
      course.link !== "#"
        ? `<a href=${course.link}>${course.name} <span><ion-icon name="open-outline"></ion-icon></span></a>`
        : `<span>${course.name}</span>`
    } </li>`;
  }

  return `
  <div class="courses--content">
    <div class="certificate--icon"><img src=${Certificates[idx].src} /></div>
    <div class="certificate--header">${Certificates[idx].name}</div>
    <div class="finish--date">${Certificates[idx].date}</div>
    <div class="courses--list">
      <ul>
        ${courseListEl}
      </ul>
    </div>
  </div>
  `;
};

const certificatesNum = Certificates.length;

for (let idx = 0; idx < parseInt(certificatesNum / 2); idx++) {
  let certificateEl = certificateHandler(idx);
  coursesContainer1.innerHTML += certificateEl;
}

for (let idx = parseInt(certificatesNum / 2); idx < certificatesNum; idx++) {
  const certificateEl = certificateHandler(idx);
  coursesContainer2.innerHTML += certificateEl;
}

/* ---------------------------FROM--------------------------- */
const closeBtn = document.querySelector(".close");
const chatMe = document.querySelector(".chat-me");
const backdrop = document.querySelector(".overlay");
const form = document.querySelector(".form");

const closeFrom = (e) => {
  e.preventDefault();
  form.classList.add("hidden-form");
  backdrop.classList.add("hidden-form");
};

closeBtn.addEventListener("click", closeFrom);

chatMe.addEventListener("click", (e) => {
  e.preventDefault();
  form.classList.remove("hidden-form");
  backdrop.classList.remove("hidden-form");
});

backdrop.addEventListener("click", closeFrom);
