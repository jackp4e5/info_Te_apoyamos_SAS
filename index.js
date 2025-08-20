window.addEventListener("hashchange", () => navigate());
const $$ = (sel, ctx = document) => ctx.querySelector(sel);
const hamburger = document.querySelector(".hamburger");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");

const routes = ["home", "requerimientos", "actoresInformacion", "frameworks"];

const show = (route) => {
  routes.forEach((id) => $$("#" + id)?.classList.remove("active"));
  $$("#" + route)?.classList.add("active");
};

function navigate() {
  const hash = location.hash.replace("#/", "") || "home";
  if (!routes.includes(hash)) {
    location.hash = "#/home";
    return;
  }
  show(hash);
}

window.addEventListener("load", () => {
  const actualHash = location.hash.slice(2);
  
  show(actualHash || "home");
});

open.addEventListener("click", () => {
  menu.style.right = "-25px";
  open.style.display = "none";
  close.style.display = "block";
});

hamburger.addEventListener("click", (e) => {
  if (e.target.closest(".open")) {
    menu.style.right = "-25px";
    open.style.display = "none";
    close.style.display = "block";
  } else if (e.target.closest(".close")) {
    menu.style.right = "-125%";
    open.style.display = "block";
    close.style.display = "none";
  }
});

 menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        menu.style.right = "-125%";
        open.style.display = "block";
        close.style.display = "none";
      }
    });

const mediaQuery = window.matchMedia("(width < 760px)");

function manejarCambio(e) {
  if (e.matches) {
   console.log("menor que 760px");
  } else {
    console.log("mayor que 760px");
  }
}

mediaQuery.onchange = manejarCambio;
manejarCambio(mediaQuery);
