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

const tabs = document.querySelectorAll(".nav-tab");
const works = document.querySelectorAll(".work");

works.forEach((work) => {
  work.classList.add("active--card");
});

const tabIsClicked = (e) => {
  let activeTabs = document.querySelectorAll(".active");

  activeTabs.forEach((tab) => {
    tab.className = tab.className.replace("active", "");
  });

  e.target.className += " active";

  works.forEach((work) => {
    work.classList.remove("active--card");
  });

  if (e.target.href.split("#")[1] === "all") {
    works.forEach((work) => {
      work.classList.add("active--card");
    });
  } else {
    const cards = document.getElementsByName(e.target.href.split("#")[1]);

    cards.forEach((card) => {
      card.classList.add("active--card");
    });
  }
};

tabs.forEach((tab) => {
  tab.addEventListener("click", tabIsClicked);
});

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
