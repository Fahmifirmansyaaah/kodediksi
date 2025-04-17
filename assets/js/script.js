function aosInit() {
  AOS.init({
    duration: 600,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
}
window.addEventListener("load", aosInit);

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
  navMenu.classList.add("active");
  hamburger.classList.add("hide");
});

closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
  hamburger.classList.remove("hide"); // Tampilkan lagi hamburger
});

const portdisplay = document.getElementById("portdisplay");
const btnDown = document.getElementById("btnDown");
const btnUp = document.getElementById("btnUp");

btnDown.addEventListener("click", () => {
  portdisplay.classList.add("active");
  btnUp.classList.add("active");
  btnDown.classList.add("hide");

  btnUp.addEventListener("click", () => {
    portdisplay.classList.remove("active");
    btnDown.classList.remove("hide");
    btnUp.classList.remove("active");
  });
});

function initSwiper() {
  document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
    let config = JSON.parse(swiperElement.querySelector(".swiper-config").innerHTML.trim());

    if (swiperElement.classList.contains("swiper-tab")) {
      initSwiperWithCustomPagination(swiperElement, config);
    } else {
      new Swiper(swiperElement, config);
    }
  });
}
window.addEventListener("load", initSwiper);
