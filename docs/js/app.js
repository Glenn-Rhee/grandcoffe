// Ketika baru nympe web
document.addEventListener("DOMContentLoaded", function () {
    setAnimateMain()
})

// const imgsGallery = document.querySelectorAll(".gallery img");
// imgsGallery.forEach((img) => {
//     if (styles.opacity == 1) {
//         img.addEventListener("mouseover", function () {
//             img.style.transform = "scale(2)";
//         })

//         img.addEventListener("mouseout", function () {
//             img.style.transform = "scale(1)";
//         })

//     }
// })


// Halaman di scroll
window.addEventListener("scroll", function () {
    let wScroll = this.scrollY;
    wScroll = Math.round(wScroll);
    console.log(wScroll);
    if (wScroll > 150) {
        setAnimateAbout();
    }

    if (wScroll > 860) {
        setAnimateGallery();
    }

    if (wScroll > 3900) {
        setAnimateTesti();
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
            img.classList.add("show");
            setInterval(() => {
                img.addEventListener("mouseover", function () {
                    img.style.opacity = ".7";
                })
                img.addEventListener("mouseout", function () {
                    img.style.opacity = "1";
                })
            }, 500 * (imgsGallery.length));
        }, 500 * (index + 1));

    })
}

function setAnimateTesti() {
    const person = document.getElementById("person-testi");
    person.classList.add("show");
}

