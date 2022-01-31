window.onload = function () {
  const primaryNav = document.querySelector(".menu-text");
  const navToggle = document.querySelector(".menu-ham");
  const body = document.querySelector("body");
  const topImage = document.querySelector(".top-image");

  navToggle.addEventListener("click", function closeMenu() {
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", true);
      navToggle.setAttribute("data-visible", true);
      body.style.overflow = "hidden";
    } else {
      primaryNav.setAttribute("data-visible", false);
      navToggle.setAttribute("data-visible", false);
      body.style.overflow = "visible";
    }
  });
};
