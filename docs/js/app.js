const btnForm = document.querySelector(".button-form");
const alertText = document.querySelector(".alert");
alertText.style.display = "none";
btnForm.addEventListener("click", function(){
    alertText.innerHTML = "Form ini belum berfungsi :D";
    alertText.style.color = "red";
    alertText.style.display = "block";
})