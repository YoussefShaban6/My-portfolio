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
  <img src="${myWorks[index].src}" alt="Porject Image" class="work-img">
  <div class="preview">
   <a href="${myWorks[index].srcCode}" class="preview-link"><img src="imgs/logos/github.png" alt="" class="preview--img"></a>
   <a href="${myWorks[index].live}" class="preview-link"><img src="imgs/logos/view.png" alt="" class="preview--img"></a>
  </div>
  </div>`;
});
