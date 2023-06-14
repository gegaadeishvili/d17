const first_cont = document.querySelector('.first_cont');
const second_cont = document.querySelector('.second_cont');
const submit = document.querySelector('.submit');
const buttons = document.querySelectorAll('#button');
const rateButton = document.getElementById('rating_cont')
submit.addEventListener("click", () =>{
    second_cont.style.display = "block";
    first_cont.style.display = "none";
});

buttons.forEach((rating_cont) =>{
    rating_cont.addEventListener("click",() =>{
        rateButton.innerHTML = rating_cont.innerHTML
    });
});