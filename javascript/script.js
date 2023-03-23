"use strict";

const mobileMenu = document.getElementById("social-nav-container");
const menuCloseBtn = mobileMenu.querySelector(".menu-close-btn");
const menuOverlay = document.getElementById("mobile-menu-overly");
const menuOpenBtn = document.getElementById("menu-open-bars");

function toggleMenu() {
    mobileMenu.classList.toggle("closed");
    mobileMenu.classList.toggle("opened");
    menuOverlay.classList.toggle("closed");
    menuOverlay.classList.toggle("opened");
}

menuOpenBtn.addEventListener("click", toggleMenu);
menuCloseBtn.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", toggleMenu);

// submenu for mobile responsive

const subMenus = document.querySelectorAll(".nav-submenu-item-container");

subMenus.forEach((subMenu) => {
    const title = subMenu.querySelector(".submenu-title");
    title.addEventListener("click", () => {
        subMenu.classList.toggle("closed");
        subMenu.classList.toggle("opened");
    });
});
