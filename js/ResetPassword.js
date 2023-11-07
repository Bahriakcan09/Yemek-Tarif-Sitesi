var s1 = document.querySelector("#s1");
var s2 = document.querySelector("#s2");
var s3 = document.querySelector("#s3");

var step1 = document.querySelector(".step1");
var step2 = document.querySelector(".step2");
var step3 = document.querySelector(".step3");

var currentstep = 0;

function foward() {
    currentstep++;
    if (currentstep == 1) {
        s2.classList.add("active-step");
        step2.style.display = "block";

        s1.classList.remove("active-step");
        s3.classList.remove("active-step");

        step1.style.display = "none";
        step3.style.display = "none";
    } else if (currentstep == 2) {
        s3.classList.add("active-step");
        step3.style.display = "block";

        s1.classList.remove("active-step");
        s2.classList.remove("active-step");

        step1.style.display = "none";
        step2.style.display = "none";
        var btn = document.querySelector('form input[type="button"]');
        btn.value = "Bitir";
    }

}