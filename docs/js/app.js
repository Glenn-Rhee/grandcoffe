// Ketika baru nympe web
document.addEventListener("DOMContentLoaded", function () {
    setAnimateMain()
})

// Halaman di scroll
window.addEventListener("scroll", function () {
    let wScroll = this.scrollY;
    wScroll = Math.round(wScroll);
    console.log(wScroll);
    if (wScroll > 150) {
        setAnimateAbout();
    }

    if (wScroll > 1170) {
        setAnimateGallery();
    }
})

function setAnimateMain() {
    const hTop = document.querySelector(".heading-top");
    const hCoffe = document.querySelector(".heading-coffe");
    const mainP = document.querySelector("section .paragraf");
    const btnMain = document.querySelector("section button");
    hTop.classList.add("show");
    setInterval(function () {
        hCoffe.classList.add("show");
    }, 350)
    setInterval(function () {
        mainP.classList.add("show");
    }, 700)
    setInterval(function () {
        btnMain.classList.add("show");
    }, 1050)
}

function setAnimateAbout() {
    const headingAbout = document.querySelector(".heading-about");
    const paragAbout = document.querySelector(".about .about-paragraf");
    const btnAbout = document.querySelector("#button-about");
    const imgAbout = document.querySelector("#img-about");
    headingAbout.classList.add("show");
    setInterval(() => {
        paragAbout.classList.add("show");
    }, 500);

    setInterval(() => {
        btnAbout.classList.add("show");
    }, 700);

    setInterval(() => {
        imgAbout.classList.add("show")
    }, 1000);
}

function setAnimateGallery() {
    const imgsGallery = document.querySelectorAll(".gallery img");
    imgsGallery.forEach((img, index) => {
        setInterval(() => {
            img.classList.add("show")
        }, 500 * (index + 1));
    })
}