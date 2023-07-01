const scriptURL = 'https://script.google.com/macros/s/AKfycbzlP497o1k5IoDKiDlt-jEYReCUMBe3EQ4PhzoxvpqAEL-7C2V_-anIAHVqWX5MlNlXUw/exec'
const form = document.forms['form-message'];

form.addEventListener('submit', e => {
    e.preventDefault();
    const checkEmail = isEmail();
    const failedAlert = document.querySelector(".alert-danger");
    const successAlert = document.querySelector(".alert-success");
    const btnLoading = document.querySelector("#button-loading");
    const btnSubmit = document.querySelector(".button-form");

    btnSubmit.classList.toggle("d-none");
    btnLoading.classList.toggle("d-none")

    if (checkEmail) {
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                if (!failedAlert.classList.contains("d-none")) {
                    failedAlert.classList.toggle("d-none");
                }

                if (!successAlert.classList.contains("d-none")) {
                    btnLoading.classList.toggle("d-none");
                    btnSubmit.classList.toggle("d-none");
                } else {
                    successAlert.classList.toggle("d-none");
                    btnLoading.classList.toggle("d-none");
                    btnSubmit.classList.toggle("d-none");
                }

                form.reset();
            })
            .catch(error => {
                failedAlert.innerHTML = `<strong>Unsent Message!</strong> ${error}.
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>`
            })
    } else {
        if (!successAlert.classList.contains("d-none")) {
            successAlert.classList.toggle("d-none");
        }
        
        if (!failedAlert.classList.contains("d-none")) {
            btnSubmit.classList.toggle("d-none");
            btnLoading.classList.toggle("d-none");
        } else {
            btnSubmit.classList.toggle("d-none");
            btnLoading.classList.toggle("d-none");
            failedAlert.classList.toggle("d-none");
        }
    }
});

const isEmail = () => {
    const email = document.querySelector("#email");
    const userEmail = email.value;
    const arrayEmail = userEmail.split("@");
    const spassUser = arrayEmail[0].split(" ");
    const domainEmail = arrayEmail[1].split(".");
    const spassDomain = arrayEmail[1].split(" ");

    // Mengecek jumlah karakter email 
    if (userEmail.length > 64) {
        return false;
    }

    // mengecek apakah ada dot (.) setelah @
    if (domainEmail.length < 2) {
        return false;
    }

    // mengecek apakah setelah tanda @ huruf kapital semua
    if (arrayEmail[1] === arrayEmail[1].toUpperCase()) {
        return false;
    }

    // Mengecek spasi setelah tanda @ 
    if (spassDomain.length > 1) {
        return false;
    }

    // Check jumlah karakter sebelum tnada @ 
    if (arrayEmail[0].length < 4 || arrayEmail[0].length > 64) {
        return false;
    }

    // mengecek spasi sebelum tanda @
    if (spassUser.length > 1) {
        return false;
    }

    return true
}

